const fs = require('fs');
fs.mkdir('test',{ recursive: true },(err) => 
{
    console.log("i have created a folder")
    if(err) throw err;
} );

console.log(" i come after mkdir in the file ");
