import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
    registroForm:FormGroup
    regexNumero = /^[0-9]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[gmail]{2,63}$/i

    constructor(private fb: FormBuilder){
        this.registroForm = this.fb.group({
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            pass1: ['', Validators.required],
            pass2: ['', Validators.required],
            direccion: ['', Validators.required],
            telefono: ['',[ Validators.required, Validators.pattern(this.regexNumero), Validators.minLength(4)]],
            ciudad: ['', Validators.required],
        });
    }

    enviarInformacion(){
        console.log(this.registroForm)
    }

}
