import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { GestionProductoComponent } from './components/admin/gestion-producto/gestion-producto.component';
import { ListaProductosComponent } from './components/admin/lista-productos/lista-productos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contactenos', component: ContactoComponent },
    { path: 'productos', component: CatalogoComponent },
    { path: 'admin/productos', component: GestionProductoComponent },
    { path: 'admin/editar-producto/:id', component:GestionProductoComponent },
    { path: 'admin/lista-productos', component: ListaProductosComponent },
    { path: '404', component: NotFoundComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'adminpage', component: AdminUsersComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
