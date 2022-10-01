class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image, :total_randomized, :email


  has_many :restaurants

  # has_many :restaurants, serializer: VisitationSerializer
end
