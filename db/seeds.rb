# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Album.destroy_all
Track.destroy_all


user1 = User.create(
    username: 'lmerger',
    email: 'lorraine.merger@gmail.com', 
    password: 'charlie21',
    is_artist: false,
    artist_location: ''
)

user2 = User.create(
    username: "gandalf",
    email: "gandalf@istari.com", 
    password: "secretfire",
    is_artist: false,
    artist_location: ''

)

user3 = User.create(
    username: 'emrebaran7',
    email: 'emre.ersolmaz@gmail.com',
    password: 'Andersson1',
    is_artist: true,
    artist_location: 'Brooklyn, New York' 
)

user4 = User.create(
    username: 'Dawn of Midi',
    email: 'dom@dom.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Brooklyn, New York'
)


album1 = Album.create(
    artist_id: User.find_by(username: 'Dawn of Midi').id,
    title: 'Dysnomia',
    description: "'Something totally unprecedented' by Pitchfork",
    credits: 'Aakaash Israni - Bass | Amino Belyamani - Piano | Qasim Naqvi - Drums',
    release_date: Date.new(2015,5,26)
)

track1 = Track.create(
    album_id: 1,
    title: 'Io',
    ord: 1,
 )

track2 = Track.create(
    album_id: 1,
    title: 'Sinope',
    ord: 2,
)

track3 = Track.create(
    album_id: 1,
    title: 'Atlas',
    ord: 3,
 )

track4 = Track.create(
    album_id: 1,
    title: 'Nix',
    ord: 4,
 ) 

track5 = Track.create(
    album_id: 1,
    title: 'Moon',
    ord: 5,
 ) 

track6 = Track.create(
    album_id: 1,
    title: 'Ymir',
    ord: 6,
) 

track7 = Track.create(
    album_id: 1,
    title: 'Ijiraq',
    ord: 7,
)

track8 = Track.create(
    album_id: 1,
    title: 'Algol',
    ord: 8,
)

track9 = Track.create(
    album_id: 1,
    title: 'Dysnomia',
    ord: 9,
) 