class Issue < ActiveRecord::Base
  belongs_to :project
  validates :title, :project_id, presence: true
end
