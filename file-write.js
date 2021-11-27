const fs = require('fs');

// fs.writeFile('./index.html', 'Here is your file data', 'utf-8', (err => {
//     if (err){
//         console.log(err + 'here error')
//     }else{
//         console.log('file save done')
//     }
// }));

fs.appendFile('./index.html', `\n Bangladesh`, 'utf-8', (err => {
    if (err){
        console.log(err + 'here error')
    }else{
        console.log('file save done')
    }
}));