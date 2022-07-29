var apiKEY = "740dcd30745d6e3536b315d57ead722b"

var lyrics = "if,i,were,a,boy"

var musixUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyrics}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKEY}`;

var tracks = {};
var songArray = [];
var music = [];



function musixApiCall(url) {
    const mus = fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.message.header.status_code)
            if (data.message.header.status_code != 200) {
                throw new Error('Network response not OK');
            };
            music = data.message.body.track_list;
            console.log(music)
            for (let i = 0; i < music.length; i++) {
                var song = music[i].track;

                const track = {
                    album: song.album_name,
                    artist: song.artist_name,
                    song: song.track_name,
                };

                songArray.push(track);

            };
            console.log(songArray);
            spotifyApiCall(songArray);
            
            // Delete the following line if your spotifyApiCall function works properly
            // return data;
        });
};


function spotifyApiCall(song) {
    console.log(songArray)

    
// For loop to iterate over the songArray

// Pull song URLs

// populate an array of objects with title + album + artist URL
// -> renderSongs()

    // const spotifySong = fetch(url)
    //     .then((response) => response.json())
    //     .then()

}



musixApiCall(musixUrl)

// Establishing API's from Spotify/SoundCloud and MusiX


// Logic to determine song from words
