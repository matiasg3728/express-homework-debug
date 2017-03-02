var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
	path    = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(request, response){
  // request object is from the client,
  // the response is what were sending back
  response.send('Hey I the server finally works')
})


app.get('/matias', function(request, responce){
	responce.render('home' , {name: "matias", loggedIn: true});
})
app.get('/bob', function(request, responce){
	responce.render('home' , {name: "Bob", loggedIn: true});
})
app.get('/bobbatea', function(request, responce){

	responce.send(JSON.stringify({ name:"bobbatea", color:"green", flavor:"Maybe good?" }));
})
app.get('/dinosaur', function(request, responce){

	responce.send(JSON.stringify({ name:"walter", color:"green", disposition:"depressed due to the limited nature of his hands, which is a sensative topic", handsize:"small"}));
})
app.get('/message', function(request, responce){

	responce.send("Ged'da fugk outda here stronzo! *angry hand gestures*");
})


// first argument is the port number
server.listen(5000, function(){
  console.log('listening at localhost:5000')
})
