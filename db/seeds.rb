# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.create name: 'Realize JS'
Project.create name: 'Kaminari'
Project.create name: 'Ransack'
Project.create name: 'React'
Project.create name: 'Confortable Mexican Sofa'

Project.all.each do |project|
  10.times do |i|
    status = 0
    if i >= 5 and i < 8
      status = 1
    elsif i >= 8
      status = 2
    end

    Issue.create project: project, title: "Issue #{i}", description: "Description #{i}", status: status
  end
end