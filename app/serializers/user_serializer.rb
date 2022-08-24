class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_name, :email, :phone_number, :password
end
