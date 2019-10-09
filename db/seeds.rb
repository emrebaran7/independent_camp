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

user4 = User.create(
    username: 'Kara-Lis Coverdale',
    email: 'kls@gmail.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Montreal, Quebec'
)

user5 = User.create(
    username: 'HTRK',
    email: 'htrk@ghostly.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Melbourne, Australia'
)

user6 = User.create(
    username: 'Novad',
    email: 'novad@novad.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Panama'
)

album1 = Album.create(
    artist_id: User.find_by(username: 'Dawn of Midi').id,
    title: 'Dysnomia',
    description: "'Something totally unprecedented' by Pitchfork",
    credits: 'Aakaash Israni - Bass
    Amino Belyamani - Piano
    Qasim Naqvi - Drums',
    release_date: Date.new(2015,5,26)
)

album2 = Album.create(
    artist_id: User.find_by(username: 'emrebaran7').id,
    title: 'Searching EP',
    description: "Something I have worked on for over 5 years",
    credits: 'Emre Ersolmaz',
    release_date: Date.new(2019,10,1)
)

album3 = Album.create(
    artist_id: User.find_by(username: 'Kara-Lis Coverdale').id,
    title: 'Aftertouches',
    description: "Aftertouches playfully exploits the systemic nature of a post-sacred and post-instrument world, continuing Kara-Lis Coverdale’s exploration of coded realism and virtual transfiguration. Through an optimistic lens, Aftertouches explores and celebrates the multiple voices of the machine. Synthetic instruments sourced from VSTs, sound banks, and personal archives are arranged into holograms of dreams once inspired by physical origin. Through digital superimposition processes, instrument profiles mutate and take on new forms of articulation. Crystalline organs support and prop plastic voices and insistent water flutes dance with metallically chromatic snake-like motifs in vignettes of compositional schizophrenia. Absurd and delightful fusions seething through temporal portholes are unexpectedly swiped left, enveloped by dense clouds of lament and remembrance.",
    credits: 'All music performed, recorded, and composed by Kara-Lis Coverdale between Mar 2013-Jan 2015 in Montreal. "X 4EWI" and "Splash 144" are sections II and III from "Conversion Music" for VST and Wind Controller premiered at LMCML in June, 2014.',
    release_date: Date.new(2015,3,24)
)

album4 = Album.create(
    artist_id: User.find_by(username: 'HTRK').id,
    title: 'Work (work, work)',
    description: "reviews: yourcomicbookfantasy.com/workpress.html",
    credits: "Produced by HTRK
    Mixed by NY
    Mastered by Denis Blackham at Skye
    Cover wave image by Trent Mitchell
    Polaroid by Eulalie Fumond Halperin-Katz, Paris 2009
    Sleeve design by JCS",
    release_date: Date.new(2011,9,5)
)

album5 = Album.create(
    artist_id: User.find_by(username: 'Novad').id,
    title: 'Looks Like Eldorado',
    description: "",
    credits: "Novad",
    release_date: Date.new(2018,12,1)
)

track1 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Io',
    ord: 1,
)

track2 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Sinope',
    ord: 2,
)

track3 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Atlas',
    ord: 3,
)

track4 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Nix',
    ord: 4,
) 

track5 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Moon',
    ord: 5,
 ) 

track6 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Ymir',
    ord: 6,
) 

track7 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Ijiraq',
    ord: 7,
)

track8 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Algol',
    ord: 8,
)

track9 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Dysnomia',
    ord: 9,
) 

track10 = Track.create(
    album_id: Album.find_by(title: 'Searching EP').id,
    title: 'Searching',
    ord: 1,
)

track11 = Track.create(
    album_id: Album.find_by(title: 'Searching EP').id,
    title: 'Say Something',
    ord: 2,
) 


track12= Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Imgs/r',
    ord: 1,
)

track13 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Touch Me & Die',
    ord: 2,
)

track14 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Splash 144',
    ord: 3,
)

track15 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'X 4EWI',
    ord: 4,
)

track16 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Ad_ renaline',
    ord: 5,
)

track17 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Icon/c',
    ord: 6,
)

track18 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Arcane',
    ord: 7,
)

track19 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Nu_chanic',
    ord: 8,
) 

track20 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Saps /h',
    ord: 9,
) 

track21 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Ice Eyes Eis',
    ord: 1,
) 

track22 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Slo Glo',
    ord: 2,
)

track23 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Eat Yr Heart',
    ord: 3,
)

track24 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Bendin',
    ord: 4,
)

track25 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Skinny',
    ord: 5,
)

track26 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Synthetik',
    ord: 6,
)

track27 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Poison',
    ord: 7,
)

track28 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Work that Body',
    ord: 8,
) 

track29 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Love Triangle',
    ord: 9,
) 

track30 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Body Double',
    ord: 10,
)

track31 = Track.create(
    album_id: Album.find_by(title: 'Looks Like Eldorado').id,
    title: "Looks Like Eldorado",
    ord: 1,
)