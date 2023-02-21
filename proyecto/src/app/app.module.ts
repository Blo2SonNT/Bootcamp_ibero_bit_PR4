import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';
import { HttpClientModule } from "@angular/common/http";
import { GestionProductoComponent } from './components/admin/gestion-producto/gestion-producto.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { MenuLateralComponent } from './components/admin/menu-lateral/menu-lateral.component';
import { ListaProductosComponent } from './components/admin/lista-productos/lista-productos.component';


@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        NavbarComponent,
        ContactoComponent,
        CarritoComponent,
        CatalogoComponent,
        NotFoundComponent,
        FooterComponent,
        RegistroComponent,
        GestionProductoComponent,
        AdminUsersComponent,
        MenuLateralComponent,
        ListaProductosComponent,
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
