class Persona{
    private nombre:string;
    private apellido:string;
    private edad:number;

    //Propiedades
    getNombre():string{
        return this.nombre;
    }

    getApellido():string{
        return this.apellido;
    }

    getEdad():number{
        return this.edad;
    }

    //Constructor
    constructor(nombre:string, apellido:string,edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //Funciones
    personaToJson():string{
        return JSON.stringify(this);
    }
}