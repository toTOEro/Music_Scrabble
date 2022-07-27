

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = 'e9b231023ef4412d9b11150e6f14f96b'; // Your client id
var spotify_secret = process.env.spotify_API; // Your secret
var musix_secret = process.env.musix_API;
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri


console.log(spotify_secret)
console.log(musix_secret)