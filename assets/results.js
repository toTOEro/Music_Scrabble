var spotifyInfo = JSON.parse(window.localStorage.getItem("spotifyInformation"));
var results = document.getElementById('results').children[0];

console.log(spotifyInfo)

// console.log(spotifyInfo)

// console.log({ results })

// Remove this later
while (results.children.length != 1) {
    results.removeChild(results.lastChild);
}

function renderResults() {

    for (let i = 0; i < 5; i++) {
        var newRow = document.createElement('tr');
        var artistCell = document.createElement('td');
        var albumCell = document.createElement('td');
        var trackCell = document.createElement('td');

        artistCell.textContent = spotifyInfo[i].artist;
        albumCell.innerHTML = `<img src='${spotifyInfo[i].albumArt.url}'>`;
        
        console.log(spotifyInfo[i].albumArt.url)
        trackCell.innerHTML = `<a href=${spotifyInfo[i].url}>${spotifyInfo[i].song}</a>`;
        newRow.append(artistCell,albumCell,trackCell);
        
        results.appendChild(newRow)


    }

}

renderResults()

for (let i = 0; i < results.children.length; i++) {
    var test = results.children[i]
    // console.log(`Children[${i}]`)
    // console.log(test)

}

