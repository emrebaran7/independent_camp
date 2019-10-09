json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.partial! 'album', album: album
      json.photoUrl url_for(album.photo)
    end
  end
end

json.users do 
  @albums.each do |album|
    json.set! album.artist_id do 
      json.partial! '/api/users/user', user: album.artist
    end
  end
end
