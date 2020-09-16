import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {AlumnosComponent} from './components/alumnos/alumnos.component';

const routes: Routes = [
    {
        path:'productos',
        component: ProductsComponent
    },
    {
        path:'',
        component: ProductsComponent
    },
    {
        path:'alumnos',
        component: AlumnosComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{enableTracing:true})],
    exports: [RouterModule]
})

export class AppRoutingModule{}