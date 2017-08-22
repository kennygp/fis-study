var express = require('express');
var app = express();

app.get('/*', function(req, res) {
    if (req.query.view) {
        var exec = require('child_process').exec;
        var cmdStr = 'cd src && fis3 release -d ../public';
        exec(cmdStr, function(err, stdout, stderr) {
            res.sendFile(__dirname + '/public/' + req.query.view + '.html');
        });
    } else {
        res.sendFile(__dirname + '/public/' + req.path);
    }
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
var c = require('child_process');
c.exec('start http://localhost:3000/?view=Home/index/index');