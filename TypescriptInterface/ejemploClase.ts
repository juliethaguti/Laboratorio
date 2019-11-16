interface Animal{
    name:string;
    makeSound():void;
}

class Dog implements Animal{
    public name:string;

    constructor(name:string, vidas?:number){
        this.name = name;
    }
    makeSound(){
        console.log("Guau!!!" + this.name);
    }
}

class Cat implements Animal{
    public name:string;

    constructor(name:string){
        this.name = name;
    }
    makeSound(){
        console.log("Miau!!!" + this.name);
    }
}
namespace animales{
export function makeSounds():void{ //Palabra reservada function porque está fuera de la clase
var miPerro:Dog = new Dog("Toby");
var miGato:Cat = new Cat("Monin");
//miPerro.makeSound();

var lista:Array<Animal> = new Array<Animal>();

lista.push(miPerro);
lista.push(miGato);
lista.forEach(function(animal){
    animal.makeSound();
});
}
}
