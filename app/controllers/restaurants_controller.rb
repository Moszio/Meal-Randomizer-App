class RestaurantsController < ApplicationController


    def show 
        restaurant = Restaurant.all
        render json: restaurant
    end


    def like
        restaurant = Restaurant.create!(name: params[:name])
        visitation = Visitation.create!(user_id: params[:user_id], restaurant_id: restaurant.id)
        render json: restaurant
    end

end
