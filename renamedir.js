const fileSystem = require('fs');

fileSystem.rename('./bangla/new', 'bangla/tumpa', (err => {
    if (err) return err;
    console.log('directory removed done');
}))