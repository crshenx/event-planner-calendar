class User < ApplicationRecord
    has_secure_password
    has_many :events, dependent: :destroy
    has_many :planners, through: :events
end
