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


User.create(username: "Andor", password_digest: "123", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80")
User.create(username: "Bob", password_digest: "asd", image: nil)
User.create(username: "John", password_digest: "asd", image: nil)
# user3 = User.create(username: "John", password_digest: "123")
# user4 = User.create(username: "Greg", password_digest: '123')
# user5 = User.create(username: "Tod", password_digest: "123")

puts "Seeding Rewards!"
Reward.create!(name: "Phone", category: "electronics", cost: 100, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
Reward.create!(name: "Laptop", category: "electronics", cost: 200, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")
Reward.create!(name: "Monalisa", category: "art", cost: 50000, image: "https://images.unsplash.com/photo-1569335529517-278a45cfcb53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80")
Reward.create(name: "Trip", category: "travel", cost: 100, image: "https://images.unsplash.com/photo-1594671515324-ea48fea744d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmUlMjB0aWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
Reward.create(name: "Voucher", category: "restaurants", cost: 10, image: "https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dm91Y2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
Reward.create(name: "Voucher", category: "restaurants", cost: 10, image: "https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dm91Y2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
Reward.create(name: "Voucher", category: "restaurants", cost: 10, image: "https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dm91Y2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")

#t.string "name"
#t.string "category"
#t.integer "cost"
#t.string "image"



# t.integer "user_id"
# t.integer "rewards_id"
# t.integer "points"


#t.integer "user_id"
#t.integer "restaurant_id"
puts "Seeding Restaurants"

restaurant_1 = Restaurant.create!(name: "Chipotle" , notes: nil, price_range: "$")
restaurant_2 = Restaurant.create!(name: "Mcdonalds", notes: nil, price_range: "$" )
restaurant_3 = Restaurant.create!(name: "Chipriani" ,notes: nil, price_range: "$$$$" )


puts "Seeding Visitation"

5.times do
    Visitation.create!(restaurant_id: Restaurant.all.sample.id, user_id: User.all.sample.id)
end
# t.string "name"
# t.string "image"
# t.boolean ""
# t.text "reviews"
# t.string "price_range"


puts "Points Seeding Started"

3.times do 
    Point.create!(user_id: User.all.sample.id, reward_id: Reward.all.sample.id)
end
puts "Done Seeding"