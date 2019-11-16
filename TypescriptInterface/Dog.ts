namespace animales
{
    export class Dog implements Animal{
        public name:string;

        constructor(name:string, vidas?:number){
            this.name = name;
        }
        makeSound(){
            console.log("Guau!!!" + this.name);
        }
    }
}