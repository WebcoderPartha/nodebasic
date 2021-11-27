const fs = require('fs');

// fs.rmdirSync('./folder');

// fs.rmdir('./folder', (err) => {
//     if (err){
//         console.log(err+'error here');
//     }else{
//         console.log('removed')
//     }
// })
fs.unlink('./folder/new.js', (error)=>{
    if (error){
        console.log(error);
    }else{
        console.log("unlink done")
    }
})
