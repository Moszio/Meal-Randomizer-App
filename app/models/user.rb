class User < ApplicationRecord
    has_many :points
    has_many :visitations
    has_many :rewards, through: :points
    has_many :restaurants, through: :visitations
end
