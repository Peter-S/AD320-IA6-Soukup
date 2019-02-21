// var path = require('path');
// var filterFn = require('./solution_filter.js');
// var dir = process.argv[2];
// var filterStr = '.' + process.argv[3];
//
// filterFn(dir, filterStr, function (err, list) {
//     if (err)
//         return console.error('There is a Error' + err);
//
//     list.forEach(function (file) {
//         console.log(file)
//     })
// });

// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2];
// var filterStr = '.' + process.argv[3];
//
// fs.readdir(dir, filterStr, function (err, list) {
//     if (err) {
//         return console.log('ERROR' +  err);
//     }
//     list.forEach(function (file) {
//             console.log(file)
//
//     })
// })

var path = require('path');
var mymodule = require('./solution_filter');
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

mymodule(dir, filterExtension, callback);
