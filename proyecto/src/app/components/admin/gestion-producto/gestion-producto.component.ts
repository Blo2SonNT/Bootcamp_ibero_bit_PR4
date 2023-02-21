import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-gestion-producto',
    templateUrl: './gestion-producto.component.html',
    styleUrls: ['./gestion-producto.component.css']
})
export class GestionProductoComponent {

    tituloComponente: string = 'Crear'
    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;

    constructor(private fb: FormBuilder, private _productoService: ProductosService, private router: Router) {
        this.productoForm = this.fb.group({
            nombre: ['', Validators.required],
            precio: ['', [Validators.minLength(3), Validators.required, Validators.pattern(this.regexNumero)]],
            rutaImg: ['', Validators.required],
        })
    }

    enviarInformacion() {
        this._productoService.postProducto(this.productoForm.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Producto creado',
            })
            this.router.navigate(['/admin/lista-productos'])
        }, error => {
            console.log(error)
        })
    }
}
