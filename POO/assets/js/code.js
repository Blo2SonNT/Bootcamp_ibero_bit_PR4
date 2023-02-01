class Saludo {
    nombrePersona

    constructor(nombre) {
        this.nombrePersona = nombre
    }

    saludarPersona() {
        return `Hola ${this.nombrePersona}, como estas?`
    }

}

let classSaludo = new Saludo("Pedro")

// console.log(classSaludo.saludarPersona())


class Armadura {
    color
    forma
    material
    imagenes = [
        "https://png.pngitem.com/pimgs/s/511-5116902_thumb-image-armadura-de-diamante-minecraft-hd-png.png",
        "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Leather_Cap_JE4_BE2.png/revision/latest?cb=20200218001736",
        "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/37/Iron_Helmet_JE2_BE2.png/revision/latest?cb=20200218002126",
        "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Turtle_Shell.png/revision/latest?cb=20200218002557"
    ]

    constructor(forma, material) {
        this.forma = forma
        this.material = material
    }

    crearArmadura() {
        switch (this.forma) {
            case "Casco":
                if (this.material == "Cuero") {
                    this.color = "#d68d8d"
                    return this.imagenes[1]
                } else if (this.material == "Tortuga") {
                    return this.imagenes[3]
                }
                break;
            case "Botas":

                break;
            default:
                return "Tipo de armadura no encontrado"
                break;
        }
    }
}