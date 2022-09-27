class RestaurantsController < ApplicationController


    def show 
        restaurant = Restaurant.all
        render json: restaurant
    end

    


end
