class UsersController < ApplicationController
 before_action :authorize, only: [:show]
 skip_before_action :authorize, only: [:show]
    def show 
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create(user_params)
        if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
        else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end     

    def update
        user = User.find_by!(id: params[:id])
        if user
            if params[:image]
                user.image = params[:image]
                user.save!
            end 
            render json: user
        else
            render json: {error: user.errors.full_messages}, status: 422
        end
    end


    def look 
        user = User.find_by(id: params[:id])
        render json: user
    end

     private

        def authorize
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end

        def user_params
            params.permit(:username, :password, :password_confirmation)
        end

        # def ticket_params
        #     params.permit(:theater_id, :seat_id)
        # end
    end

