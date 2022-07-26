
var apiKEY = ""

var musixCall = fetch(`https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=cumulonimbus&page_size=3&page=1&s_track_rating=desc&apikey=${apiKEY}`, {
});



console.log(musixCall)
console.log("Connected to HTML")

console.log(process.env.MUSIXMATCH_API)

// Establishing API's from Spotify/SoundCloud and MusiX


// Logic to determine song from words

