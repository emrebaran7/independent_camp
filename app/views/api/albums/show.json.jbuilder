json.album do 
    json.partial! 'api/albums/album', album: @album
    json.photoUrl url_for(@album.photo)
    json.artist artist_name: @album.artist.artist_name
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :album_id, :title, :ord
            json.audioUrl url_for(track.audio)
        end
    end
end

