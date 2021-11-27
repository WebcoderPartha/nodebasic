const fileSystem = require('fs');

fileSystem.rename('./index.html', './page.html', (err => {
    if (err){
        console.log(err);
    }else{
        console.log('rename done');
    }
}))