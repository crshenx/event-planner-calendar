class EventSerializer < ActiveModel::Serializer
  attributes :id, :location, :title, :type, :date, :addess
end
