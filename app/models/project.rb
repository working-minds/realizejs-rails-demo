class Project < ActiveRecord::Base
  has_many :issues, dependent: :destroy
  validates :name, length: { minimum: 3, maximum: 40 }
end
