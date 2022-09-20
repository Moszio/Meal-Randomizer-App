# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroy Data"

Point.destroy_all
User.destroy_all
Reward.destroy_all

puts "Seeding Started"

5.times do
user = User.create(username: "Andor")

end


puts "Done Seeding"