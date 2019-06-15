 namespace animal{
    export class Perro implements Animal{
        private nombre:string = ""; //Por defecto público //si es privado hacer getter setter
        //No existe la sobrecarga se haria el constructor con parametros y ?
        constructor(nombre?:string){
            if(nombre != undefined){
                this.nombre = nombre;
            }
        }
        hacerRuido():string{
            return "Guau!!";
        }
    
        getNombre():string{
            return this.nombre;
        }

        setNombre(nombre:string):void{
            this.nombre = nombre;
        }
    }
 }