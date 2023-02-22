import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelGestionProductos } from "../models/modelGestionProductos";

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    url = 'http://localhost:4000/api'

    constructor(private http: HttpClient) { }

    getProductos(): Observable<any>{
        return this.http.get(this.url+"/productos")
    }

    postProducto(producto: modelGestionProductos): Observable<any>{
        return this.http.post(this.url+"/crear-producto", producto)
    }

    deleteProducto(id:string): Observable<any>{
        return this.http.delete(this.url+"/eliminar-producto/"+id)
    }

    getProducto(id:string): Observable<any>{
        return this.http.get(this.url+"/productos/"+id)
    }

    putProducto(id:string, producto:modelGestionProductos): Observable<any>{
        return this.http.put(this.url+"/actualizar-producto/"+id, producto)
    }
}
