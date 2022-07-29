var apiKEY = "740dcd30745d6e3536b315d57ead722b"

var lyrics = "if,i,were,a,boy"


var musixUrl = `https://cors-anywhere-vercel-chi.vercel.app/api/cors?url=https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyrics}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKEY}`


var tracks = {};
var spotifyApiArray = [];

var music = [];


function musixApiCall(url) {
    const mus = fetch(url)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data.message.header.status_code)
            if (data.message.header.status_code != 200) {
                throw new Error('Network response not OK');
            };
            music = data.message.body.track_list;
            for (let i = 0; i < music.length; i++) {
                var song = music[i].track;
                var spotifyUrl = `https://api.spotify.com/v1/search?q=${song.track_name}+artist:${song.artist_name.split('feat.')[0]}&type=track&include_external:audio`

                spotifyApiArray.push(spotifyUrl);


            };

            spotifyApiCall(spotifyApiArray);

        });
};


function spotifyApiCall(songs) {

    var client_id = "e9b231023ef4412d9b11150e6f14f96b";
    var client_secret = '249263bfaf414e1eaf1f3d355ab2fff1';
    var encodedString = btoa(client_id + ':' + client_secret);
    var songDataArray = [];

    var url = 'https://accounts.spotify.com/api/token'

    var fetchOptions = {
        method: 'POST',
        body: 'grant_type=client_credentials',
        headers: {
            'Authorization': 'Basic ' + encodedString,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }

    var tokenFetch = fetch(url, fetchOptions)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            var token = 'Bearer ' + data.access_token

            for (let i = 0; i < songs.length; i++) {
                var songFetchOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization': token,
                    },
                };

                const spotifyMusic = fetch(songs[i], songFetchOptions)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var topMatch = data.tracks.items[0];
                        var spotifySongData = {
                            song: topMatch.name,
                            album: topMatch.album.name,
                            albumArt: topMatch.album.images[0],
                            artist: topMatch.artists[0].name,
                            url: topMatch.external_urls.spotify,
                            preview: topMatch.preview_url,
                        };
                        songDataArray.push(spotifySongData);
                    });
            };
            console.log(songDataArray)

        });
};

// For loop to iterate over the songArray

// Pull song URLs

// populate an array of objects with title + album + artist URL
// -> renderSongs()

// const spotifySong = fetch(url)
//     .then((response) => response.json())
//     .then()





musixApiCall(musixUrl)

// Establishing API's from Spotify/SoundCloud and MusiX


// Logic to determine song from words
