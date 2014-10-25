// dependencies
var express = require("express"),
app = express();

// middle ware

app.use(express.static(__dirname + '/public'));

// page navigations

app.get('/', function(req,res){
	res.render('index.ejs');
});

app.get('/index', function(req,res){
	res.render('index.ejs');
});

app.get('/work/mario_xsonic', function(req,res){
	res.render('work/mario_sonic.ejs');
});

app.get('/work/dinolife', function(req,res){
	res.render('work/dinolife.ejs');
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
	res.render('work/urgentgenius.ejs');
});

app.get('/fun/typothesis', function(req,res){
	res.render('fun/typothesis.ejs');
});

app.get('/fun/states', function(req,res){
	res.render('fun/states.ejs');
});

app.get('/about', function(req,res){
	res.render('about/about.ejs');
});

app.get('/tumblr', function(req,res){
	res.render('tumblr/tumblr.ejs');
});

app.listen(3000, function(){
  console.log("let's look at this portfolio!");
});