class Empleado extends Persona{
    //Atributos
    private horario:string;
    private legajo:number;

    //Getters
    getHorario():string{
        return this.horario;
    }

    getLegajo():number{
        return this.legajo;
    }

    //Constructor
    constructor(nombre:string,apellido:string,edad:number,horario:string,legajo:number){
        super(nombre, apellido, edad);
        this.horario = horario;
        this.legajo = legajo;
    }

    //Funciones
    empleadoToJson():string{
        return JSON.stringify(this);
    }
}