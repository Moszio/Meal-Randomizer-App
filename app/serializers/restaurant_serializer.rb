class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes


end
# name: "Chipotle", outdoor_seating: true, reviews: nil, price_range: "$"