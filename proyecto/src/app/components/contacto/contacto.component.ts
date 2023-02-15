import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { modelContacto } from 'src/app/models/modelContacto';
import { ContactoServiceService } from 'src/app/service/contacto-service.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

    formContacto: FormGroup
    regexNumero = /^[0-9]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    constructor(private fb: FormBuilder, private router:Router, private _servicioAPIContacto: ContactoServiceService) {
        this.formContacto = this.fb.group({
            nombre: ['', Validators.required],
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            ciudad: ['', Validators.required],
            mensaje: ['', Validators.required]
        })
    }

    enviarInformacion() {
        console.log(this.formContacto.value)
        console.log(this.formContacto.get('nombre')?.value)

        const CONTACTO: modelContacto = {
            nombre: this.formContacto.get('nombre')?.value,
            correo: this.formContacto.get('correo')?.value,
            telefono: this.formContacto.get('telefono')?.value,
            ciudad: this.formContacto.get('ciudad')?.value,
            mensaje: this.formContacto.get('mensaje')?.value,
        }


        this._servicioAPIContacto.postContacto(CONTACTO).subscribe(data => {
            console.log(data)
            this.router.navigate(['/'])
            Swal.fire({
                icon: 'success',
                title: 'Su petición fue enviada exitosamente',
                text: 'Nos estaremos colocando en contacto contigo próximamente',
            })
        })

        // const CONTACTO:modelContacto = this.formContacto.value
    }

}
