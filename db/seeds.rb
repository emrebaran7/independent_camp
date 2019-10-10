# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Album.destroy_all
Track.destroy_all


user1 = User.create(
    username: 'lmerger',
    email: 'lorraine.merger@gmail.com', 
    password: 'charlie21',
    is_artist: false,
)

user2 = User.create(
    username: "gandalf",
    email: "gandalf@istari.com", 
    password: "olorin",
    is_artist: true,
    artist_name: "Gandalf, the Grey",
    artist_location: 'Middle Earth'
)

user3 = User.create(
    username: 'emrebaran7',
    email: 'emre.ersolmaz@gmail.com',
    password: 'Andersson1',
    is_artist: true,
    artist_location: 'Brooklyn, New York',
    artist_name: "Emre Ersolmaz"
)

user4 = User.create(
    username: 'dom21',
    email: 'dom@dom.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Brooklyn, New York',
    artist_name: "Dawn of Midi"
)

user4 = User.create(
    username: 'klc',
    email: 'kls@gmail.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Montreal, Quebec',
    artist_name: "Kara-Lis Coverdale"
)

user5 = User.create(
    username: 'htrk123',
    email: 'htrk@ghostly.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Melbourne, Australia',
    artist_name: "HTRK"
)

user6 = User.create(
    username: 'Novad',
    email: 'novad@novad.com',
    password: 'password',
    is_artist: true,
    artist_location: 'Panama',
    artist_name: "Novad"
)

album1 = Album.create(
    artist_id: User.find_by(username: 'dom21').id,
    title: 'Dysnomia',
    description: 'What people are saying about Dysnomia :
        /nl/
        " Something totally unprecedented " - Pitchfork
        /nl/
        " Stellar...at a loss for words " - SPIN
        /nl/
        " Sounds like something completely different " - NPR
        /nl/
        " Perverse in a good way " - The New York Times
        /nl/
        " Seriously never seen anything like these guys...favorite thing in years " - Jad Abumrad, Radiolab
        /nl/
        " Cannot urge you more strongly: go see Dawn of Midi " - Sasha Frere-Jones, The New Yorker
        /nl/
        " Moving and addictive...a feat of innovation " - Interview Magazine
        /nl/
        " An unplugged translation of contemporary electronica...state-of-the-art. " - Time Out NY
        /nl/
        " It sounds like nothing else right now " - The Guardian
        /nl/
        " A mysterious, vital sound with a pull all its own " - Los Angeles Times
        /nl/
        " A work of lunatic genius " - The Village Voice"',
    credits: 'Aakaash Israni - Bass
    /nl/
    Amino Belyamani - Piano
    /nl/
    Qasim Naqvi - Drums',
    release_date: Date.new(2015,5,26)
)

album1.photo.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/dom_dysnomia.jpg"), 
    filename: "dom_dysnomia.jpg"
    ) 

album2 = Album.create(
    artist_id: User.find_by(username: 'emrebaran7').id,
    title: 'Searching EP',
    description: "Something I have worked on for over 5 years",
    credits: 'Emre Ersolmaz',
    release_date: Date.new(2019,10,1)
)

album2.photo.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/ee_searching.png"), 
    filename: "ee_searching.png"
    ) 

album3 = Album.create(
    artist_id: User.find_by(username: 'klc').id,
    title: 'Aftertouches',
    description: "Aftertouches playfully exploits the systemic nature of a post-sacred and post-instrument world, continuing Kara-Lis Coverdale’s exploration of coded realism and virtual transfiguration. Through an optimistic lens, Aftertouches explores and celebrates the multiple voices of the machine. Synthetic instruments sourced from VSTs, sound banks, and personal archives are arranged into holograms of dreams once inspired by physical origin. Through digital superimposition processes, instrument profiles mutate and take on new forms of articulation. Crystalline organs support and prop plastic voices and insistent water flutes dance with metallically chromatic snake-like motifs in vignettes of compositional schizophrenia. Absurd and delightful fusions seething through temporal portholes are unexpectedly swiped left, enveloped by dense clouds of lament and remembrance.",
    credits: 'All music performed, recorded, and composed by Kara-Lis Coverdale between Mar 2013-Jan 2015 in Montreal. "X 4EWI" and "Splash 144" are sections II and III from "Conversion Music" for VST and Wind Controller premiered at LMCML in June, 2014.',
    release_date: Date.new(2015,3,24)
)

album3.photo.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/klc_aftertouches.jpg"), 
    filename: "klc_aftertouches.jpg"
    ) 

album4 = Album.create(
    artist_id: User.find_by(username: 'htrk123').id,
    title: 'Work (work, work)',
    description: "reviews: yourcomicbookfantasy.com/workpress.html",
    credits: "Produced by HTRK
    /nl/
    Mixed by NY
    /nl/
    Mastered by Denis Blackham at Skye
    /nl/
    Cover wave image by Trent Mitchell
    /nl/
    Polaroid by Eulalie Fumond Halperin-Katz, Paris 2009
    /nl/
    Sleeve design by JCS",
    release_date: Date.new(2011,9,5)
)

album4.photo.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/htrk_work_work_work.jpg"), 
    filename: "htrk_work_work_work.jpg"
    ) 

album5 = Album.create(
    artist_id: User.find_by(username: 'Novad').id,
    title: 'Looks Like Eldorado',
    description: "",
    credits: "Novad",
    release_date: Date.new(2018,12,1)
)

album5.photo.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/novad_looks_like_eldorado.png"), 
    filename: "novad_looks_like_eldorado.png"
    ) 

track1 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Io',
    ord: 1,
)

track1.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Io.mp3"), 
    filename: "Io.mp3"
    ) 

track2 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Sinope',
    ord: 2,
)

track2.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Sinope.mp3"), 
    filename: "Sinope.mp3"
    ) 

track3 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Atlas',
    ord: 3,
)

track3.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Atlas.mp3"), 
    filename: "Atlas.mp3"
    ) 

track4 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Nix',
    ord: 4,
)

track4.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Nix.mp3"), 
    filename: "Nix.mp3"
    ) 

track5 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Moon',
    ord: 5,
    )

track5.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Moon.mp3"), 
    filename: "Moon.mp3"
    ) 

track6 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Ymir',
    ord: 6,
) 

track6.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Ymir.mp3"), 
    filename: "Ymir.mp3"
    ) 

track7 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Ijiraq',
    ord: 7,
)

track7.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Ijiraq.mp3"), 
    filename: "Ijiraq.mp3"
    ) 

track8 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Algol',
    ord: 8,
)

track8.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Algol.mp3"), 
    filename: "Algol.mp3"
    ) 

track9 = Track.create(
    album_id: Album.find_by(title: 'Dysnomia').id,
    title: 'Dysnomia',
    ord: 9,
) 

track9.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Dysnomia.mp3"), 
    filename: "Dysnomia.mp3"
    ) 

track10 = Track.create(
    album_id: Album.find_by(title: 'Searching EP').id,
    title: 'Searching',
    ord: 1,
)

track10.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Searching.mp3"), 
    filename: "Searching.mp3"
    ) 

track11 = Track.create(
    album_id: Album.find_by(title: 'Searching EP').id,
    title: 'Say Something',
    ord: 2,
)

track11.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Say_Something.mp3"), 
    filename: "Say_Something.mp3"
    ) 

track12= Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Imgs/r',
    ord: 1,
)

track12.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Imgs_R.mp3"), 
    filename: "Imgs_R.mp3"
    ) 

track13 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Touch Me & Die',
    ord: 2,
)

track13.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Touch_Me_Die.mp3"), 
    filename: "Touch_Me_Die.mp3"
    ) 

track14 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Splash 144',
    ord: 3,
)

track14.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Splash_144.mp3"), 
    filename: "Splash_144.mp3"
    ) 

track15 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'X 4EWI',
    ord: 4,
)

track15.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/X_4ewi.mp3"), 
    filename: "X_4ewi.mp3"
    ) 

track16 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Ad_renaline',
    ord: 5,
)

track16.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Ad_Renaline.mp3"), 
    filename: "Ad_Renaline.mp3"
    ) 

track17 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Icon/c',
    ord: 6,
)

track17.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Icon_C.mp3"), 
    filename: "Icon_C.mp3"
    ) 

track18 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Arcane',
    ord: 7,
)

track18.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Arcane.mp3"), 
    filename: "Arcane.mp3"
    ) 

track19 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Nu_chanic',
    ord: 8,
)

track19.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Nu_Chanic.mp3"), 
    filename: "Nu_chanic.mp3"
    ) 

track20 = Track.create(
    album_id: Album.find_by(title: 'Aftertouches').id,
    title: 'Saps /h',
    ord: 9,
) 

track20.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Saps_H.mp3"), 
    filename: "Saps_H.mp3"
    ) 

track21 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Ice Eyes Eis',
    ord: 1,
)

track21.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Ice_Eyes_Eis.mp3"), 
    filename: "Ice_Eyes_Eis.mp3"
    ) 


track22 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Slo Glo',
    ord: 2,
)

track22.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Slo_Glo.mp3"), 
    filename: "Slo_Glo.mp3"
    ) 


track23 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Eat Yr Heart',
    ord: 3,
)

track23.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Eat_Yr_Heart.mp3"), 
    filename: "Eat_Yr_Heart.mp3"
    ) 

track24 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Bendin',
    ord: 4,
)

track24.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Bendin.mp3"), 
    filename: "Bendin.mp3"
    ) 

track25 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Skinny',
    ord: 5,
)

track25.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Skinny.mp3"), 
    filename: "Skinny.mp3"
    ) 

track26 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Synthetik',
    ord: 6,
)

track26.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Synthetik.mp3"), 
    filename: "Synthetik.mp3"
    ) 

track27 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Poison',
    ord: 7,
)

track27.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Poison.mp3"), 
    filename: "Poison.mp3"
    ) 

track28 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Work that Body',
    ord: 8,
)

track28.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Work_that_Body.mp3"), 
    filename: "Work_that_Body.mp3"
    ) 

track29 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Love Triangle',
    ord: 9,
) 

track29.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Love_Triangle.mp3"), 
    filename: "Love_Triangle.mp3"
    ) 

track30 = Track.create(
    album_id: Album.find_by(title: 'Work (work, work)').id,
    title: 'Body Double',
    ord: 10,
)

track30.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Body_Double.mp3"), 
    filename: "Body_Double.mp3"
    ) 


track31 = Track.create(
    album_id: Album.find_by(title: 'Looks Like Eldorado').id,
    title: "Looks Like Eldorado",
    ord: 1,
)

track31.audio.attach(
    io: open("https://independent-camp-dev.s3.us-east-2.amazonaws.com/Looks_like_Eldorado.mp3"), 
    filename: "Looks_like_Eldorado.mp3"
    ) 