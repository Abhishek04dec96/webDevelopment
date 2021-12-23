const fs = require('fs');
try {
fs.mkdirSync('js');
console.log('folder was created');
}
catch (err) {
    console.error(err);
}
console.log(" i come after mkdir in the file ");