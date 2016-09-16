class Issue < ActiveRecord::Base
  enum status: [ :to_do, :in_progress, :done ]

  belongs_to :project
  validates :title, :project_id, presence: true
end
