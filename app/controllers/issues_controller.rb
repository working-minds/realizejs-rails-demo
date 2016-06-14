class IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :edit, :update, :destroy]
  before_action :set_project, only: [:show, :edit, :create, :update, :destroy]

  # GET /issues
  # GET /issues.json
  def index
    @project = Project.find(params[:project_id])

    params[:p] ||= 1
    params[:q] ||= {}

    @issues = Issue.where(project_id: params[:project_id]).ransack(params[:q]).result
    @issues_count = @issues.size
    @issues = @issues.page(params[:p]).per(params[:per_page])

    respond_to do |format|
      format.html
      format.json { render json: {
          issues: @issues.as_json(),
          count: @issues_count
      }.to_json
      }
    end

  end

  # GET /issues/1
  # GET /issues/1.json
  def show
    @project = Project.find(params[:project_id])
  end

  # GET /issues/new
  def new
    @issue = Issue.new
    @project = Project.find(params[:project_id])
  end

  # GET /issues/1/edit
  def edit
  end

  # POST /issues
  # POST /issues.json
  def create
    @issue = @project.issues.create((params.require(:issue).permit(:titulo, :descricao)))

    respond_to do |format|
      if @issue.save
        format.js {render js: "window.location = '#{project_issues_path(id: params[:id], project_id: params[:project_id])}'"}
        format.html { redirect_to @project, notice: 'Issue was successfully created.' }
        format.json { render :show, status: :created, location: @issue }
      else
        format.html { render :new }
        format.json { render json: @issue.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /issues/1
  # PATCH/PUT /issues/1.json
  def update
    respond_to do |format|
      if @issue.update(params.require(:issue).permit(:titulo, :descricao))
        format.js{render js: "window.location = '#{project_issues_path}'"}
        format.html { redirect_to project_issue_path, notice: 'Issue was successfully updated.' }
        format.json { render :show, status: :ok, location: @issue }
      else
        format.html { render :edit }
        format.json { render json: @issue.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /issues/1
  # DELETE /issues/1.json
  def destroy
    @issue.destroy
    respond_to do |format|
      format.js{render js: "window.location = '#{project_path(@project)}'"}
      #format.html { redirect_to project_path(@project), notice: 'Issue was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_issue
      @issue = Issue.find(params[:id])
    end

    def set_project
      @project = Project.find(params[:project_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def issue_params
      params.fetch(:issue, {})
    end
end
