const readline = require('readline');
const util = require('util')

let RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name?', (name) => {
    RL.setPrompt(`${name}, How old are you?`);
    RL.prompt();
    RL.on('line', (age) => {
        if (age < 18){
            util.log(`${name}, Because you are ${age} year old. We cannot procced`);
            RL.close()
        }else{
            util.log(`${name}, You are ${age} year old. Because you are now enjoy our services`)
            RL.close()
        }
    })
});