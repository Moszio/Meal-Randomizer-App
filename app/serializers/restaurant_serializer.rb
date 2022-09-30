class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :notes
end
# name: "Chipotle", outdoor_seating: true, reviews: nil, price_range: "$"