//node module imports needed to run fuctions 
var fs = require("fs");//reads and writes files 
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var liriArgument = process.argv[2];

//possible commands for application 
switch (liriArgument) {
    case "my-tweets": 
        //myTweets();
        break;

    case "spotify-this-song": 
        //spotifyThisSong();
        break;
    
    case "movie-this": 
        //movieThis();
        break;

    case "do-what-it-says": 
        //doWhatItSays();
        break;
    
        //Instructions displayed in terminal 
    default: 

}