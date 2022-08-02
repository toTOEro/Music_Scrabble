# Music Scrabble

This project can be found at the following link: https://totoero.github.io/Dynaguys/index.html

Music Scrabble is a website that is developed for music listeners and music writers to find songs that with lyrics that match the words that they specify. By entering words and hitting the submit button, users are presented with a results page showing up to 5 songs that match their query.

The code works utilizing the MusixMatch (https://developer.musixmatch.com/) and Spotify (https://developer.spotify.com/documentation/web-api/) web APIs. MusixMatch finds songs with lyrics containing the words, these results are then saved into local storage and passed to the Spotify API to return song information including links to populate the page. 

![A user enters "test" and "winner" into the search option. After clicking submit, they are presented with 5 song results. They click onto one of the Spotify links, opening up a new tab showing the song on Spotify. The user then highlights the matching lyrics.](./assets/musicScrabble.gif)



