json.album do 
    json.partial! 'api/albums/album', album: @album
    json.photoUrl url_for(@album.photo)
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :album_id, :title, :ord
        end
    end
end

