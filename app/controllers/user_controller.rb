class UserController < ApplicationController


    def index 
        user = User.all
        render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end
   
end
