import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelContacto } from '../models/modelContacto';

@Injectable({
    providedIn: 'root'
})
export class ContactoServiceService {

    url = 'http://localhost:4000/api'

    constructor(private http:HttpClient) { }

    postContacto(dataContacto:modelContacto): Observable<any>{
        return this.http.post(`${this.url}/crear-contacto`, dataContacto)
    }
}
