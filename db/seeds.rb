
puts "Destroy Data"

User.destroy_all
Restaurant.destroy_all
Visitation.destroy_all

puts "Seeding Started"



User.create(username: "Andor", password_digest: "123", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80", email: nil, total_randomized: 0)
User.create(username: "Bob", password_digest: "asd", image: nil, email: nil, total_randomized: 0)


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