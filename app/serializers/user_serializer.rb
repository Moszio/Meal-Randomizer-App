class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image, :total_randomized, :email, :created_at, :updated_at


  has_many :restaurants

  # has_many :restaurants, serializer: VisitationSerializer
end
