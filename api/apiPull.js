
// var client_id = "e9b231023ef4412d9b11150e6f14f96b";

// var client_secret = '249263bfaf414e1eaf1f3d355ab2fff1';

// var encodedString = btoa(client_id+':'+client_secret)

// var url = 'https://accounts.spotify.com/api/token'
// var fetchHeaders = new Headers({
//     // 'Authorization': 'Basic ' + (client_id + ':' + client_secret),
//     'Authorization': 'Basic ' + encodedString,
//     });



// var fetchOptions = {
//     method: 'POST',
//     body: 'grant_type=client_credentials',
//     headers: {
//         'Authorization': 'Basic ' + encodedString,
//         'Content-Type': 'application/x-www-form-urlencoded',
//     }

// }

// var testFetch = fetch(url,fetchOptions).then(function (resp) {
//     return resp.json()
//     })
//     .then (function (data){
//         var token = 'Bearer ' + data.access_token
//     })


