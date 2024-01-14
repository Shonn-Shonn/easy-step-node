const {EventEmitter} = require('events'); //import event emitter from events module into node
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', function(){
    console.log('yum');
})


eventEmitter.emit('lunch');