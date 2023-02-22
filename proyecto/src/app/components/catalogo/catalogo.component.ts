import { Component, OnInit } from '@angular/core';
import { modelGestionProductos } from 'src/app/models/modelGestionProductos';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    listaProductos: modelGestionProductos[] = [];

    public urlAssets: string = "assets/img/productos"

    constructor(private _productoService: ProductosService){}

    ngOnInit(): void {
        this._productoService.getProductos().subscribe(data => {
            console.log(data)
            this.listaProductos = data
        }, err => console.log(err))
    }

}
