class NotesController < ApplicationController

    def create
        note = Note.create!(notes: params[:notes], restaurant_id: params[:restaurant_id])
        render json: note
    end



end
