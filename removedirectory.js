const fileSystem = require('fs');

fileSystem.rmdir('./folder', (err => {
    if (err) return err;
    console.log('directory removed');
}))