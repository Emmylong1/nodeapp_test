var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello Emmanuel it's great to connect with you. I've been working on githubworkflows project, and I thought it would be helpful to get your input on" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;