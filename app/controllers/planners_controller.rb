class PlannersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        planner = Planner.create!(event_params)
        render json: planner, status: :created
    end

    private

    def event_params
        params.permit(:name, :email, :phone_number)
    end

    def record_invalid(e)         
        render json: {errors: e.record.errors.full_messages }, status: :unprocessable_entity     
      end 
end
