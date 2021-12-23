var givejoke = require('give-me-a-joke');
var cowsay=require('cowsay');
var msg;
givejoke.getRandomDadJoke (function(joke) {
 console.log(cowsay.say({
    text : joke,
    e : "oO",
    T : "U "
}));
    
});
