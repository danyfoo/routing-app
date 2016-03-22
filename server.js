/**
 * Created by darivera on 3/21/2016.
 */
var express = require('express'),
    path = require('path'),
    app = express();

var port = process.env.PORT || 8080;

//Set up public folder to serve public assets
app.use(express.static(__dirname + '/public'));

//Set up our one route to the index.html file
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//Start the server on port 8080 (http://localhost:8080)
app.listen(port);
console.log("Visit me at http://localhost:" + port);