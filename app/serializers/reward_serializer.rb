class RewardSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :cost, :image
end
