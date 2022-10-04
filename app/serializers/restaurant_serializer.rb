class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price_range, :address, :website

  has_many :notes
end
# name: "Chipotle", outdoor_seating: true, reviews: nil, price_range: "$"