class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid


    def create
        # check if the user is logged in
        if session[:user_id]
            event = Event.create!(event_params)
            render json: event, status: :created
        end
    end

    def index
        # only render events that belong to the user
        events = Event.where(user_id: session[:user_id])
        render json: events
    end

    private

    def event_params
        params.permit( :title, :location, :date, :type_of_event, :address, :user_id, :planner_id, :start_date, :end_date)
    end

    def record_invalid(e)         
        render json: {errors: e.record.errors.full_messages }, status: :unprocessable_entity     
      end 
      
end
