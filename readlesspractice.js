const readline = require('readline');
const util  = require('util')

const ReadLine = readline.createInterface(process.stdin, process.stdout);

ReadLine.question("What is your name?", (name) => {

    ReadLine.setPrompt(name+', How old are you?');
    ReadLine.prompt();
    ReadLine.on('line', (age) => {
        if (age < 18){
            util.log(name+ ' you are age is '+age+ ' you are not allowed');
            ReadLine.close()
        }else{
            util.log(name+ ' you are age is '+age+ ' you are allowed');
            ReadLine.setPrompt(name+ " what is your birtiday");
            ReadLine.prompt();
            ReadLine.on('line',(birthday) => {
                util.log(name+ ' your birthday is '+birthday);
                ReadLine.close()
            })
        }
    })


});