class VisitationSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :restaurant
end
