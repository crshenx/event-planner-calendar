class EventSerializer < ActiveModel::Serializer
  attributes :id, :location, :title, :type_of_event, :date, :addess
end
