const fs = require('fs');

fs.mkdir('./bangla/new', (err => {
    if (err) return err;
    console.log('Directory created done')
}))