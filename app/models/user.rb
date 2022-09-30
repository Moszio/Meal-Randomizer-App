class User < ApplicationRecord

    has_many :visitations
 
    has_many :restaurants, through: :visitations


    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, allow_nil: true

    has_secure_password

end


