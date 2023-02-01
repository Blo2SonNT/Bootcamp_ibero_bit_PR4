//instalacion de typeScript npm i typescript -g
// tsc -v

console.log("Hola mundo juan")

/*
ubican terminal
| ---------- | -------------- |
| Manual     | tsc code.ts    |
| Automatica | tsc code.ts -w |
| ---------- | -------------- |
*/

let texto:string = "lorem ipsum dolor its amet consecutive" 
let numero:number = 13
let siOno:boolean = false
// let siOno:boolean = false || true

var cualquierCosa:any = false

let arregloVariado:any[] = ["juan", 2, false]
let arregloDeTextos:string[] = ["juan"]
const pi:string = "3.1416"

let arregloDeNumero:number[] = [1,2,3,4]
let arrayEstructurado:[boolean, string, string, number] = [true, "texto", "texto", 5]
let arrayEstructuradoDeArrays:[boolean, string, string, number][] = [[true, "texto", "texto", 5], [true, "texto", "texto", 5]]


// let dataVacio:undefined = undefined

// let URLAPI:string = "https://pokeapi.com/api/pokemon"
// let API:object = fetch(URLAPI)


function sumaNumero(numero1:number, numero2:number):number {
    return numero1 + numero2
}

console.log(sumaNumero(1, 5))

let restarNumeros = function(numero1:string, numero2:number): number{
    return parseInt(numero1) - numero2
}

console.log(restarNumeros("5",2))

// let numero_fin:number | null = prompt("Hasta que necesita")
// let numero_tabla = prompt("De que tabla?")

// if(typeof(numero_fin) == null){
//     numero_fin = 5
// }

// for (let x = 0; x <= numero_fin; x++) {
//     const element = array[x];
    
// }

function funcionVoid():void {
    localStorage.setItem("pepe", "fulano")
    return
}

interface iDataAlpina{
    nombre: string,
    precio: number,
    cantidadInventario: number,
    productoLimitado: boolean
}

let info:iDataAlpina = {
    nombre:"alpilitro",
    precio:8500, 
    cantidadInventario:25, 
    productoLimitado:true
}

function venderAlpina(producto:iDataAlpina):any{
    //proceso
}

class Usuario{
    public nombre:string
    protected correo:string
    private edad:number

    constructor(nombre:string, correo:string, edad:number){
        this.nombre = nombre
        this.correo = correo
        this.edad = edad
    }

    saludar(){
        return `Buenas noches ${this.nombre}, bienvenido a clase`
    }

    hizo_tarea(confirmacion:boolean){
        let respuesta = (confirmacion) ? `${this.nombre} es un niño bueno` : `${this.nombre} es niño malo, largo de aqui`
        return respuesta
    }

}


let classUsuario = new Usuario("miguel", "correo@correo.com", 25)
console.log(classUsuario.saludar())
console.log(classUsuario.hizo_tarea(false))


class Pedidos extends Usuario{
    public producto: string
    public entregado: boolean

    constructor( producto:string, nombre:string, correo:string, edad:number){
        super(nombre, correo, edad)
        this.producto = producto
    }

    verificarEstado(){}
}

let classPedidos = new Pedidos("alpilitro", "miguel", "correo@correo.com", 25)
classPedidos.hizo_tarea(false)