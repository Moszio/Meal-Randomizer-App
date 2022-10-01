# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroy Data"

User.destroy_all
Restaurant.destroy_all
Visitation.destroy_all

puts "Seeding Started"


User.create(username: "Andor", password_digest: "123", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80")
User.create(username: "Bob", password_digest: "asd", image: nil)
User.create(username: "John", password_digest: "asd", image: nil)
# user3 = User.create(username: "John", password_digest: "123")
# user4 = User.create(username: "Greg", password_digest: '123')
# user5 = User.create(username: "Tod", password_digest: "123")



#t.integer "user_id"
#t.integer "restaurant_id"
puts "Seeding Restaurants"

restaurant_1 = Restaurant.create!(name: "Chipotle" ,  price_range: "$")
restaurant_2 = Restaurant.create!(name: "Mcdonalds",  price_range: "$" )
restaurant_3 = Restaurant.create!(name: "Chipriani" , price_range: "$$$$" )


puts "Seeding Visitation"

5.times do
    Visitation.create!(restaurant_id: Restaurant.all.sample.id, user_id: User.all.sample.id)
end

1.times do 
    Note.create!(note: "This is my favourite restaurant", restaurant_id: Restaurant.all.sample.id)
    Note.create!(note: "It was ok", restaurant_id: Restaurant.all.sample.id)
    Note.create!(note: "Not my style", restaurant_id: Restaurant.all.sample.id)
    Note.create!(note: "Love it", restaurant_id: Restaurant.all.sample.id)
end

puts "Done Seeding"