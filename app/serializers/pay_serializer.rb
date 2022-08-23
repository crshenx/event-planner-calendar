class PaySerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time, :status, :pay_rate, :estimate_hours
end
