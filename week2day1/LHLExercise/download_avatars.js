
//Given a GitHub repository name (and owner), download all the contributors'
//profile images and save them to a subdirectory, avatars/.

var request = require('request');
var dotenv = require('dotenv');
dotenv.config();


// Makes an un-authenticated request to github
function gitHubRequest(endpoint, _cb) {
  var githubRoot = "https://api.github.com";

  // Github requests require a user agent
  var options = {
    url: `${githubRoot}${endpoint}`,
    headers: {
      'User-Agent': 'request',
      'auth': {
        'user': process.env.username,
        'pass': process.env.token
      }
    }
  };

  // passes the callback down to request
  request.get(options, _cb);
}

// Using githubRequest to get contributors to a repo
function getRepoContributors(gitHubrepoOwner, gitHubrepoName, _cb) {
  //again passing down the callback function
  gitHubRequest(`/repos/${gitHubrepoOwner}/${gitHubRepoName}/contributors`, _cb);
}

// Getting the party started!

var gitHubRepoOwner = process.argv[2]; //Get repo owner from calling
var gitHubRepoName = process.argv[3]; //Get repo name from calling



console.log(`Getting ${gitHubRepoOwner}${gitHubRepoName} contributors...\n`);

getRepoContributors(gitHubRepoOwner, gitHubRepoName, function(error, response, body) {
  if (error) {
    console.log("Something went wrong:", error);
    return;
  }


  var contributors = JSON.parse(body);
  console.log(`${contributors.length} contributors:\n`);




  contributors.forEach(   ) {
    downloadImageByUrl(contributor.avatar_url, 'AvatarImages.png', function(){
      console.log('done');
    });
  });

})



contributors.forEach((contributor) {
   var avatarURL = contributor["avatar_url"];
   var username = contributor["login"];
   var filePath = `avatars/${username}.jpeg`;
   console.log(`Downloading ${username}'s avatar'`);
   downloadImageByURL(avatarURL, filePath);
 });



//repoOwner: lighthouse-labs
//repoName: laser_shark


// Extend your program to grab the avatar_url attribute from each contributor.
// You can find these URLs in the API response from the previous step.
// Try implementing a function which can make a request to a given url, and
// write the result to a specified filepath:


function downloadImageByUrl (uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
