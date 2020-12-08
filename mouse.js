var chalk = require('chalk');

function Mouse(name){
	this.name=name;
	this.age=1;
}
Mouse.prototype.eat=function(){
	Mouse.die=true;
};

Mouse.prototype.sayHi=function(){
	console.log('Hi! I am a mouse. My name is ' + chalk.red(this.name));
};

module.exports = Mouse;
