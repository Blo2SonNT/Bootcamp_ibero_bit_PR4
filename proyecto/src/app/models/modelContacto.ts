export class modelContacto {
    _id?: string;
    nombre:string;
    correo:string;
    telefono:string;
    ciudad:string;
    mensaje:string;

    constructor(nombre:string, correo:string, telefono:string, ciudad:string, mensaje:string){
        this.nombre = nombre
        this.correo = correo
        this.telefono = telefono
        this.ciudad = ciudad
        this.mensaje = mensaje
    }
}


