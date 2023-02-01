//instalacion de typeScript npm i typescript -g
// tsc -v
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola mundo juan");
/*
ubican terminal
| ---------- | -------------- |
| Manual     | tsc code.ts    |
| Automatica | tsc code.ts -w |
| ---------- | -------------- |
*/
var texto = "lorem ipsum dolor its amet consecutive";
var numero = 13;
var siOno = false;
// let siOno:boolean = false || true
var cualquierCosa = false;
var arregloVariado = ["juan", 2, false];
var arregloDeTextos = ["juan"];
var pi = "3.1416";
var arregloDeNumero = [1, 2, 3, 4];
var arrayEstructurado = [true, "texto", "texto", 5];
var arrayEstructuradoDeArrays = [[true, "texto", "texto", 5], [true, "texto", "texto", 5]];
// let dataVacio:undefined = undefined
// let URLAPI:string = "https://pokeapi.com/api/pokemon"
// let API:object = fetch(URLAPI)
function sumaNumero(numero1, numero2) {
    return numero1 + numero2;
}
console.log(sumaNumero(1, 5));
var restarNumeros = function (numero1, numero2) {
    return parseInt(numero1) - numero2;
};
console.log(restarNumeros("5", 2));
// let numero_fin:number | null = prompt("Hasta que necesita")
// let numero_tabla = prompt("De que tabla?")
// if(typeof(numero_fin) == null){
//     numero_fin = 5
// }
// for (let x = 0; x <= numero_fin; x++) {
//     const element = array[x];
// }
function funcionVoid() {
    localStorage.setItem("pepe", "fulano");
    return;
}
var info = {
    nombre: "alpilitro",
    precio: 8500,
    cantidadInventario: 25,
    productoLimitado: true
};
function venderAlpina(producto) {
    //proceso
}
var Usuario = /** @class */ (function () {
    function Usuario(nombre, correo, edad) {
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
    }
    Usuario.prototype.saludar = function () {
        return "Buenas noches ".concat(this.nombre, ", bienvenido a clase");
    };
    Usuario.prototype.hizo_tarea = function (confirmacion) {
        var respuesta = (confirmacion) ? "".concat(this.nombre, " es un ni\u00F1o bueno") : "".concat(this.nombre, " es ni\u00F1o malo, largo de aqui");
        return respuesta;
    };
    return Usuario;
}());
var classUsuario = new Usuario("miguel", "correo@correo.com", 25);
console.log(classUsuario.saludar());
console.log(classUsuario.hizo_tarea(false));
var Pedidos = /** @class */ (function (_super) {
    __extends(Pedidos, _super);
    function Pedidos(producto, nombre, correo, edad) {
        var _this = _super.call(this, nombre, correo, edad) || this;
        _this.producto = producto;
        return _this;
    }
    Pedidos.prototype.verificarEstado = function () { };
    return Pedidos;
}(Usuario));
var classPedidos = new Pedidos("alpilitro", "miguel", "correo@correo.com", 25);
classPedidos.hizo_tarea(false);
