class Api::AlbumsController < ApplicationController
    before_action :ensure_logged_in, only: [:new, :edit, :update, :create, :destroy]
    #cookies? 

    def index
        @albums = Album.all.includes(:tracks)
        @users = User.where(id: @albums.pluck(:artist_id))
        render :index
    end

    def show
        # debugger
        @album = Album.find(params[:id])
        # debuggerr
        render :show
        
    end

    def create
        @album = current_user.albums.new(album_params)

        if album.save
            redirect_to api_album_url(album)
        else
            flash.now[:errors] = album.errors.full_messages
            render :new
        end
    end

    def new
        @album = Album.new
    end

    def edit
        @album - current_user.albums.find(params[:id])
        render :edit
    end

    def update
        @album = current_user.albums.find(params[:id])
        
        if album.update(album_params)
            redirect_to api_album_url(album)
        else
            render json: album.errors.full_messages, status: 422
        end
    end

    def destroy
        album = current_user.albums.find_by(id: params[:id])
        
        if album
            album.destroy
            redirect_to api_albums_url
        else
            render json: 'Album not found', status: 404
        end
    end


    def get_last
        @albums = Album.get_last(params[:num])
        @users = User.where(id: @albums.pluck(:artist_id))
        render :index
    end

    private

    def album_params
        params.require(:album).permit(:title, :artist_id, :description, :credits, :release_date)
    end
end

