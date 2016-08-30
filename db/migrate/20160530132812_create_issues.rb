class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title
      t.text :description
      t.references :project, foreign_key: true

      t.timestamps null: false
    end
  end
end
