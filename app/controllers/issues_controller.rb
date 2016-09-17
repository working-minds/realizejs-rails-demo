class IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :edit, :update, :destroy]
  before_action :set_project, only: [:show, :edit, :create, :update, :destroy]

  # GET /issues
  # GET /issues.json
  def index
    params[:q] ||= {}
    params[:p] ||= 1

    @issues = Issue.where(project_id: params[:project_id]).ransack(params[:q]).result.page(params[:p])
    @project = Project.find(params[:project_id])
    respond_to do |format|
      format.html
      format.json { render json: { data: @issues, count: @issues.total_count } }
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
    @issue = @project.issues.create((params.require(:issue).permit(:title, :description, :status)))
    if @issue.save

      respond_to do |format|
        format.js {
          flash[:success] = 'Issue was successfully created.'
          render js: "window.location = '#{project_issues_path(@project.id)}'"
        }
        format.json { render json: @issue, status: :created }
      end
    else
      render json: @issue.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /issues/1
  # PATCH/PUT /issues/1.json
  def update
    if @issue.update(params.require(:issue).permit(:title, :description, :status))
      respond_to do |format|
        format.js {
          flash[:success] = 'Issue was successfully updated.'
          render js: "window.location = '#{project_issues_path(@project.id)}'" }

        format.json { render json: @issue }
      end
    else
      render json: @issue.errors, status: :unprocessable_entity
    end
  end

  # DELETE /issues/1
  # DELETE /issues/1.json
  def destroy
    @issue.destroy
    flash[:success] = 'Issue was successfully destroyed.'
    render js: "window.location = '#{project_issues_path(@project.id)}'"
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
