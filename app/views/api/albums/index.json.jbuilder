json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.partial! 'album', album: album
      json.photoUrl url_for(album.photo)
      json.artist artist_name: album.artist.artist_name
    end
  end
end