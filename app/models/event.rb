class Event < ApplicationRecord
    belongs_to :user
    belongs_to :planner, optional: true
    has_one :pay, dependent: :destroy
    has_one :detail, dependent: :destroy
end
