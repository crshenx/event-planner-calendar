class ApplicationController < ActionController::API
    include ActionController::Cookies
    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    #   end

    before_action :authorized
    def authorized
      return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
