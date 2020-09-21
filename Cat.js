function Cat(name){
    this.name = name;
    this.dead = false;
}

Cat.prototype.die = function(){
    this.dead = true;
};
Cat.prototype.eat = function(name){
    this.name = name
};
module.exports = Cat;
//comment sadfasdf