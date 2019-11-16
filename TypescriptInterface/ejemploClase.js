var Dog = /** @class */ (function () {
    function Dog(name, vidas) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log("Guau!!!" + this.name);
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.makeSound = function () {
        console.log("Miau!!!" + this.name);
    };
    return Cat;
}());
var animales;
(function (animales) {
    function makeSounds() {
        var miPerro = new animales.Dog("Toby");
        var miGato = new animales.Cat("Monin");
        //miPerro.makeSound();
        var lista = new Array();
        lista.push(miPerro);
        lista.push(miGato);
        lista.forEach(function (animal) {
            animal.makeSound();
        });
    }
    animales.makeSounds = makeSounds;
})(animales || (animales = {}));
