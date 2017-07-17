//node module imports needed to run fuctions 
var fs = require("fs"); //reads and writes files 
var keys = require("./keys.js");
var request = require("request");
var twitter = require("twitter");
var spotify = require("spotify");
//var exps = require("./liri-exports.js");
var liriArgument = process.argv[2];
var twitKeys = keys.twitterKeys;

//possible commands for application 
switch (liriArgument) {
    case "my-tweets":
        myTweets(20);
        break;

    case "spotify-this-song":
        spotifyThisSong('some song name');
        break;

    case "movie-this":
        movieThis('some movie name');
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

        //Instructions displayed in terminal 
    default:

}

function myTweets(count) {
    //https://dev.twitter.com/docs
    //Tweet content and date
    console.log(`Tweet Tweet ${count} times!`);
};

function spotifyThisSong(song) {
    //https://www.npmjs.com/package/node-spotify-api
    if (song) {
        // Artist(s)
        // The song's name
        // A preview link of the song from Spotify
        // The album that the song is from
    } else {
        //"The Sign" by Ace of Base.
    }

    console.log('Spot this song');
};

function movieThis(movie) {
    //http://www.omdbapi.com/
    if (movie) {
        //    * Title of the movie.
        //    * Year the movie came out.
        //    * IMDB Rating of the movie.
        //    * Rotten Tomatoes Rating of the movie.
        //    * Country where the movie was produced.
        //    * Language of the movie.
        //    * Plot of the movie.
        //    * Actors in the movie.
    } else {
        // 'Mr. Nobody.'
    }
    console.log('Big Movie');
};

function doWhatItSays() {
    console.log('Do what it says');
};