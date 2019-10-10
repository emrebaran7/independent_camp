json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.partial! 'album', album: album
      json.photoUrl url_for(album.photo)
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :artist_name
    end
  end
end
     