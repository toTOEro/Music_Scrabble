var lyricsEl = document.getElementById('lyrics');
var submitBt = document.getElementById('submitBt');
var lyricEntryEl = document.getElementById('submitBt');
var searchBt = document.getElementById('searchBt');

var apiKEY = "740dcd30745d6e3536b315d57ead722b";

var lyrics = []

var tracks = {};
var spotifyApiArray = [];

var music = [];

// musixApiCall sends a request to the musixAPi to match the entered words to the lyrics of songs. It returns the top 10
// songs as a result
function musixApiCall() {
    lyricString = lyrics.join(',');
    var musixUrl = `https://cors-anywhere-vercel-chi.vercel.app/api/cors?url=https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyricString}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKEY}`

    const mus = fetch(musixUrl)
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

// spotifyApiCall takes the song information and sends a request to the Spotify API for song information and the URL to the album art.
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
                        console.log(data)
                        var topMatch = data.tracks.items[0];
                        // If statement to handle situations where there is no song result
                        if (data.tracks.total == 0) {
                            i++
                        } else {
                            var spotifySongData = {
                                song: topMatch.name,
                                album: topMatch.album.name,
                                albumArt: topMatch.album.images[0],
                                artist: topMatch.artists[0].name,
                                url: topMatch.external_urls.spotify,
                                preview: topMatch.preview_url,
                            };
                            songDataArray.push(spotifySongData);
                        };
                        renderResults(songDataArray);
                    });
            };
        });
};

// The logWord function takes the user's entry and pushes it to an array
function logWord(event) {
    event.preventDefault();
    var enteredWord = lyricsEl.value;

    if (onlyCharacters(enteredWord)) {
        lyrics.push(enteredWord);
        enteredWord = "";
    } else {
        enteredWord = "";
    };
    console.log(lyrics)
};

// onlyCharacters function to verify only characters were added.
// https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-letters#:~:text=Use%20the%20test()%20method,only%20letters%20and%20false%20otherwise.
function onlyCharacters(entry) {
    return /^[a-zA-z]+$/.test(entry);
};

function renderResults(songInformation) {
    window.localStorage.setItem("spotifyInformation", JSON.stringify(songInformation));
    window.location.href = "./results.html";

}


lyricEntryEl.addEventListener("click", logWord)
searchBt.addEventListener('click', musixApiCall)
