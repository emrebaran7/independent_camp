# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  artist_id    :integer          not null
#  title        :string           not null
#  description  :text
#  credits      :string
#  release_date :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Album < ApplicationRecord
    validates :artist_id, :title, :release_date, presence: true
    # before_action :ensure_logged_in, only: [:new, :edit, :update, :create, :destroy]
    
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User' 
    
    #cookie?

    def index
        @albums = Album.all
        render :index
    end

    def show
        @album = Album.find(params[:id])
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
        render :new
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

    private

    def album_params
        params.require(:album).permit(:title, :artist_id, :description, :credits, :release_date)
    end

end


