class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image


  has_many :restaurants
  has_many :rewards
  # has_many :restaurants, serializer: VisitationSerializer
end
