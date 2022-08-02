
// Pulls stored spotify info 
var spotifyInfo = JSON.parse(window.localStorage.getItem("spotifyInformation"));
var results = document.getElementById('results').children[0];

// Renders top 5 results on page
function renderResults() {

    for (let i = 0; i < 5; i++) {
        var newRow = document.createElement('tr');
        var artistCell = document.createElement('td');
        var albumCell = document.createElement('td');
        var trackCell = document.createElement('td');

        artistCell.textContent = spotifyInfo[i].artist;
        albumCell.innerHTML = `<img src='${spotifyInfo[i].albumArt.url}'>`;
        
        console.log(spotifyInfo[i].albumArt.url)
        trackCell.innerHTML = `<a href=${spotifyInfo[i].url} target="_blank">${spotifyInfo[i].song}</a>`;
        newRow.append(artistCell,albumCell,trackCell);
        
        results.appendChild(newRow)


    }

}

renderResults()
