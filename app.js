// dependencies
var express = require("express"),
app = express(),
request = require("request");
http = require("http");
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

 s3.createBucket({Bucket: 'tifsBucket'}, function() {

  var params = {Bucket: 'tifsBucket', Key: 'myKey', Body: 'Hello!'};
  s3.putObject(params, function(err, data) {
      if (err)
          console.log(err);
      else       console.log("Successfully uploaded data to tifsBucket/myKey");
   });
});

// middle ware

app.use(express.static(__dirname + '/public'));

// page navigations

app.get('/', function(req,res){
	res.render('index.ejs');
});

app.get('/index', function(req,res){
	res.render('index.ejs');
});

app.get('/work/mario_sonic', function(req,res){
	res.render('work/mario_sonic.ejs');
});

app.get('/work/dinolife', function(req,res){
	res.render('work/dino_life.ejs');
});

app.get('/work/got2b', function(req,res){
	res.render('work/got2b.ejs');
});

app.get('/work/ups', function(req,res){
	res.render('work/ups.ejs');
});

app.get('/work/cross', function(req,res){
	res.render('work/cross.ejs');
});

app.get('/work/kreate', function(req,res){
	res.render('work/kreate.ejs');
});

app.get('/work/urgentgenius', function(req,res){
	res.render('work/urgent_genius.ejs');
});

app.get('/work/contestofchampions', function(req,res){
	res.render('work/contest_of_champions.ejs');
});

app.get('/work/minus8', function(req,res){
	res.render('work/minus_8.ejs');
});

app.get('/work/codeology', function(req,res){
  res.render('work/codeology.ejs');
});

app.get('/work/braintree', function(req,res){
  res.render('work/braintree.ejs');
});

app.get('/work/btedu', function(req,res){
  res.render('work/bt_edu.ejs');
});

app.get('/work/wellsfargo', function(req,res){
  res.render('work/wells_fargo.ejs');
});

app.get('/work/impossiblefoods', function(req,res){
  res.render('work/impossiblefoods.ejs');
});

app.get('/work/virginamerica', function(req,res){
  res.render('work/virginamerica.ejs');
});

app.get('/work/dropbox', function(req,res){
  res.render('work/dropbox.ejs');
});

app.get('/play/typothesis', function(req,res){
	res.render('play/typothesis.ejs');
});

app.get('/play/states', function(req,res){
	res.render('play/states.ejs');
});

app.get('/play/malkovich', function(req,res){
	res.render('play/browsing_john_malkovich.ejs');
});

app.get('/play/helium', function(req,res){
	res.render('play/helium.ejs');
});

app.get('/play/plantpeople', function(req,res){
	res.render('play/plant_people.ejs');
});

app.get('/play/4thgifs', function(req,res){
  res.render('play/4th_gifs.ejs');
});

app.get('/play/2d1f', function(req,res){
  res.render('play/2d1f.ejs');
});

app.get('/play/weddingspeech', function(req,res){
  res.render('play/weddingspeech.ejs');
});

app.get('/play/sfbaes', function(req,res){
  res.render('play/sfbaes.ejs');
});

app.get('/about', function(req,res){
	// var wnwUrl = "https://www.kimonolabs.com/api/alnefw9q?apikey=eEQAr4JifJfWjFfbzUIIAFnWC3Sh6uLT";
	// request(wnwUrl, function (err, response, body) {
 //  	console.log(body);
 //  	var wnwResult = (JSON.parse(body));
		// res.render('about/about.ejs', {wnwResult: wnwResult});
	// });
  res.render('about/about.ejs');
});

app.get('/tumblr', function(req,res){
	res.render('tumblr/tumblr.ejs');
});

app.listen(process.env.PORT || 8080, function(){
   console.log("let's look at this portfolio!");
});