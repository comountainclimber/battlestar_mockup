// Requires \\
var express = require("express");
var bodyParser = require("body-parser");
// var sassMiddleware = require('node-sass-middleware');
var path = require("path");

// Create Express App Object \\
var app = express();

// app.use(
//   sassMiddleware({
//     src: __dirname + '/public/sass',
//     dest: __dirname + '/public/stylesheets',
//     debug: true,
//     outputStyle: 'compressed',
//     prefix:  '/stylesheets'
//   })
// );

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

// Routes \\
app.get("/", function(req, res) {
  res.sendFile("index.html", { root: "./public" });
});

// app.get('*', function(req, res) {
//   res.redirect('/')
// });

// Creating Server and Listening for Connections \\
var port = 3000;
app.listen(port, function() {
  console.log("Server running on port " + port);
});
