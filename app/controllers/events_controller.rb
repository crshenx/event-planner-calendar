class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def index
        render json: Event.all 
    end

    private

    def event_params
        params.permit( :title, :location, :date, :type_of_event, :addess, :user_id, :planner_id)
    end

    def record_invalid(e)         
        render json: {errors: e.record.errors.full_messages }, status: :unprocessable_entity     
      end 
      
end
