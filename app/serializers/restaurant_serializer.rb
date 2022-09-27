class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :outdoor_seating, :price_range, :reviews

  
end


# name: "Chipotle", outdoor_seating: true, reviews: nil, price_range: "$"