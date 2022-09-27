class Point < ApplicationRecord
    belongs_to :reward, optional: true
    belongs_to :user
end
