const emitter = require('./sendEmail');

emitter.on('New', (message)=> {
    console.log('Message: '+message);
});

emitter.emit('New', 'Custom events working as well');
