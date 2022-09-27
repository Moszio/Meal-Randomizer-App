class User < ApplicationRecord
    has_many :points
    has_many :visitations
    has_many :rewards, through: :points
    has_many :restaurants, through: :visitations


    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, allow_nil: true

    has_secure_password

end


