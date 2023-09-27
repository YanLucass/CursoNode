const EventEmitter = require('events');

const eventsEmitter = new EventEmitter() // instanciando classe

eventsEmitter.on('start', () => {       // evento start, e executa a função anonima
    console.log('durante');
});

console.log('antes');

eventsEmitter.emit('start')  // ativando o evento, depois do antes pelo event loop

console.log("depois");

// podemos atrela rum evento global em alguma etapa do meu código. Tipo criar um log caso de um erro