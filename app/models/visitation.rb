class Visitation < ApplicationRecord
    belongs_to :restaurant , dependent: :destroy
    belongs_to :user
end
