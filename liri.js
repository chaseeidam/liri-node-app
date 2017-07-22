//node module imports needed to run fuctions 
var fs = require("fs"); //reads and writes files 
var keys = require("./keys.js");
var request = require("request");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

var twitKeys = keys.twitterKeys;
var creds = keys.spotifyCreds;

//var exps = require("./liri-exports.js");
var liriArgument = process.argv[2];
var nodeArgs = process.argv;
var searchTerm = "";

for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        searchTerm = searchTerm + "+" + nodeArgs[i];
    } else {
        searchTerm += nodeArgs[i];
    }
};


//possible commands for application 
switch (liriArgument) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        if (searchTerm) {
            querySong(searchTerm);
        } else {
            querySong("The Sign Ace Of Base");
        }
        break;

    case "movie-this":
        if (searchTerm) {
            queryMovie(searchTerm);
        }else {
            queryMovie("Mr. Nobody");
        }
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

function myTweets() {
    var client = new twitter(twitKeys);
    var parameters= {
        screen_name: 'chase_eidam',
        count: '20'

    };
    client.get("statuses/user_timeline", parameters, function(error, tweets, response){
        if(error){
            console.log("An error has occured! Error: " + error);
        } else{
            for (var i = 0; i < tweets.length; i++){
                var date = tweets[i].created_at;
                console.log("@chase_eidam tweeted " + tweets[i].text + " on " + date);
            };
        };
    })
   
};

function querySong(track) {
    var spotifyThisSong = new spotify(creds);
    spotify.search({type: 'track', query: track, limit: '1'}, function(err, data){
		if (err){
			console.log("Oops, an error occured! Error: " + error);
		} else {
			var song = data.tracks.items[0].name;
			var artist = data.tracks.items[0].artists[0].name;
			var album = data.tracks.items[0].album.name;
			var preview = data.tracks.items[0].preview_url;	
				
			console.log("Song: " + song);
			console.log("Artist: " + artist);
			console.log("Album: " + album);
			console.log("Preview at: " + preview);
				
		};
	});		
};

function queryMovie(movie) {
	var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {
		if (error) {
			console.log("Oops, an error occured! " + error);
		} else {
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Release Year: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
			console.log("Rotton Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
			console.log("Country of Production: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		}

		if (movie === "Mr. Nobody") {
			console.log("****************");
			console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
			console.log("It's on Netflix!");
		};
	});
};

function doThisThing() {
	fs.readFile("random.txt", "utf8", function(error, data){
		if(error){
			console.log("Oops, an error occured! Error: " + error);
		} else {
			var splitData = data.split(",");

			querySong(splitData[1]);
		};
	});
};






