class RestaurantsController < ApplicationController


    def show 
        restaurant = Restaurant.all
        render json: restaurant
    end

    def each 
        restaurant = Restaurant.find_by(id: params[:id])
        render json: restaurant
    end


    def like
        restaurant = Restaurant.create!(name: params[:name], image: params[:image])
        visitation = Visitation.create!(user_id: params[:user_id], restaurant_id: restaurant.id)
        render json: restaurant
    end


    def destroy
        restaurant = Restaurant.find_by!(id: params[:id])
        if restaurant
            restaurant.destroy
            head :no_content
        else
            render json: {error: "Restaurant not found"}, status: :not_found
        end
    end


end
