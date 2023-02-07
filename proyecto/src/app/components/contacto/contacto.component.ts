import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

    formContacto:FormGroup
    regexNumero = /^[0-9]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    constructor(private fb:FormBuilder){
        this.formContacto = this.fb.group({
            nombre:['', Validators.required],
            correo:['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono:['', [Validators.required, Validators.pattern(this.regexNumero)]],
            ciudad:['', Validators.required],
            mensaje:['', Validators.required]
        })
    }

    enviarInformacion(){
        console.log(this.formContacto)
    }

}
