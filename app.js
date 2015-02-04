// dependencies
var express = require("express"),
app = express(),
request = require("request");
http = require("http");

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

app.get('/play/typothesis', function(req,res){
	res.render('play/typothesis.ejs');
});

app.get('/play/states', function(req,res){
	res.render('play/states.ejs');
});

app.get('/about', function(req,res){
	var wnwUrl = "https://www.kimonolabs.com/api/alnefw9q?apikey=eEQAr4JifJfWjFfbzUIIAFnWC3Sh6uLT";
	request(wnwUrl, function (err, response, body) {
  	console.log(body);
  	var wnwResult = (JSON.parse(body));
		res.render('about/about.ejs', {wnwResult: wnwResult});
	});
});


app.get('/tumblr', function(req,res){
	res.render('tumblr/tumblr.ejs');
});

app.listen(3000, function(){
  console.log("let's look at this portfolio!");
});