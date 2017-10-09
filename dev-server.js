var express = require('express');
var app = express();
var c = require('child_process');
app.get('/*', function(req, res) {
    if (req.query.view) {
        var cmdStr = 'cd src && fis3 release -d ../public';
        c.exec(cmdStr, function(err, stdout, stderr) {
        	console.log(cmdStr);
            res.sendFile(__dirname + '/public/' + req.query.view + '.html');
        });
    } else {
        if (req.path.indexOf('plugins') > -1) {
            res.sendFile(__dirname + '/public' + req.path);
        } else {
            res.sendFile(__dirname + '/' + req.path);
        }
    }
});


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
c.exec('start http://localhost:3000/?view=Home/index/index');