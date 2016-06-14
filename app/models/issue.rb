class Issue < ActiveRecord::Base
  belongs_to :projects
  validates :titulo, :project_id, presence: true
end
