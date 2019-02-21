var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
        return console.log(err)
    }
    var lines = contents.toString().split('\n').length -1
    //var text = contents.toString()
    console.log(lines)
    //console.log(text)
})