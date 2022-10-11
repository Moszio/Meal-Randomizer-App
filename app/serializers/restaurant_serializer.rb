class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price_range, :address, :website

  has_many :notes
end
