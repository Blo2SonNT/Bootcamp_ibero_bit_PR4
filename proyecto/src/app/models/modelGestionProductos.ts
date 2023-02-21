export class modelGestionProductos{
    _id?: string;
    nombre:string;
    precio:number;
    rutaImg:string;

    constructor(nombre:string, precio:number, rutaImg:string){
        this.nombre = nombre
        this.precio = precio
        this.rutaImg = rutaImg
    }
}

