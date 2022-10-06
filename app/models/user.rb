class User < ApplicationRecord

    has_many :visitations, dependent: :destroy
 
    has_many :restaurants, through: :visitations, dependent: :destroy


    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, allow_nil: true
    validates :email, presence: true, allow_nil: true

    has_secure_password

end


