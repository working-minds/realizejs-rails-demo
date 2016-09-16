class AddStatusToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :status, :integer, null: false, default: 0
  end
end
