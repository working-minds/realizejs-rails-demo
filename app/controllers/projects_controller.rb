class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    params[:q] ||= {}
    params[:p] ||= 1

    @projects = Project.ransack(params[:q]).result.page(params[:p])
    respond_to do |format|
      format.html
      format.json { render json: { data: @projects, count: @projects.total_count } }
    end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @project = Project.find(params[:id])
    @issue = @project.issues.new
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
    @project = Project.find(params[:id])
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(params.require(:project).permit(:name))
    if @project.save
      flash[:success] = 'Project was successfully created.'
      render js: "window.location = '#{projects_path}'"
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    @project = Project.find(params[:id])
    if @project.update(params.require(:project).permit(:name))
      flash[:success] = 'Project was successfully updated.'
      render js: "window.location = '#{projects_path}'"
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end


  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    flash[:success] = 'Project was successfully destroyed.'
    render js: "window.location = '#{projects_path}'"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.fetch(:project, {})
    end
end
