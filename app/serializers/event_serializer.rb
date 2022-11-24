class EventSerializer < ActiveModel::Serializer
  attributes :id, :location, :title, :type_of_event, :date, :address, :start_date, :end_date, :user_id, :planner_id
end
