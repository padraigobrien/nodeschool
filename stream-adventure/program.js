var fs = require('fs');  // file system

var existingfile = process.argv[2] 

fs.createReadStream(existingfile).pipe(process.stdout);


