function Cat(name){
    this.name = name;
    this.dead = false;
}

Cat.prototype.die = function(){
    this.dead = true;
};
Cat.prototype.eat = function(){
    
};
module.export = Cat;
//comment sadfasdf