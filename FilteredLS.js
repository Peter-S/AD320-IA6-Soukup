var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, names) {
    if (err) {
        return console.log(err);
    }
    names.forEach(function (name) {
        if(path.extname(name) === ext) {
            console.log(name)
        }
    })
});

