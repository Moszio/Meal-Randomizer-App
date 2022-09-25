class RewardsController < ApplicationController


    def index
        reward = Reward.all
        render json: reward
    end


end
