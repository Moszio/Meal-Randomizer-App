class Restaurant < ApplicationRecord
    has_many :visitations
    has_many :users, through: :visitations

end
