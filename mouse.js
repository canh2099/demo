function mouse(name){
	this.name=name;
	this.age=1;
}
mouse.prototype.die=function(){
	mouse.die=true;
}

module.export=Mouse;
