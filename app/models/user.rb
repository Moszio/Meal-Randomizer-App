class User < ApplicationRecord
    has_many :points
    has_many :rewards, through: :points
end
