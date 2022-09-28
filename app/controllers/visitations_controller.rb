class VisitationsController < ApplicationController


    def show
        visit = Visitation.all
        render json: visit
    end
end


