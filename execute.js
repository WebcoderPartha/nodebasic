const execute = require('child_process').exec;

execute('dir', (error, stdout) => {
    if (error){

        return 'sdfdsf';

    }

    console.log(stdout)
})