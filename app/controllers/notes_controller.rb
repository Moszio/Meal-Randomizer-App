class NotesController < ApplicationController

    def create
        note = Note.create!(note: params[:notes], restaurant_id: params[:restaurant_id])
        render json: note
    end

    def destroy
        note = Note.find_by!(id: params[:id])
        if note
            note.destroy
            head :no_content
        else
            render json: {error: "Note not found"}, status: :not_found
        end
    end

    # def update
    #     note = Note.find_by!(id: params[:id])
    #     if note 
    #         note.update!(note: params[:note])
    #         render json: note
    #     else
    #         note json: { error: "Note not found!"}, status: :not_found
    #     end

    # end



    def show
        note = Note.find_by!(id: params[:id])
        render json: note
    end

end
