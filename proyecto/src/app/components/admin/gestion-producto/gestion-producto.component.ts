import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-gestion-producto',
    templateUrl: './gestion-producto.component.html',
    styleUrls: ['./gestion-producto.component.css']
})
export class GestionProductoComponent implements OnInit {

    tituloComponente: string = 'Crear'
    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;
    id: string | null

    constructor(private fb: FormBuilder, private _productoService: ProductosService, private router: Router, private idRoute: ActivatedRoute) {
        this.productoForm = this.fb.group({
            nombre: ['', Validators.required],
            precio: ['', [Validators.minLength(3), Validators.required, Validators.pattern(this.regexNumero)]],
            rutaImg: ['', Validators.required],
        })
        this.id = this.idRoute.snapshot.paramMap.get('id')
    }

    ngOnInit() {
        this.accionSolicitada()
    }

    enviarInformacion() {
        if (this.id == null) {
            //crear producto
            this._productoService.postProducto(this.productoForm.value).subscribe(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto creado',
                })
                this.router.navigate(['/admin/lista-productos'])
            }, error => {
                console.log(error)
            })
        }else{
            //actualizar producto
            this._productoService.putProducto(this.id, this.productoForm.value).subscribe(data =>{
                Swal.fire({
                    icon: 'success',
                    title: 'Producto actualizado',
                })
                this.router.navigate(['/admin/lista-productos'])
            }, error => {
                console.log(error)
            })
        }
    }

    accionSolicitada() {
        if (this.id !== null) {
            this.tituloComponente = 'Modificar'
            this._productoService.getProducto(this.id).subscribe(data => {
                this.productoForm.setValue({
                    nombre: data.nombre,
                    precio: data.precio,
                    rutaImg: data.rutaImg
                })
            })
        }
    }
}
