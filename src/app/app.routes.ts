import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/mains/pagina-inicio/pagina-inicio.component';

export const routes: Routes = [
    {path:'',redirectTo:'inicio',pathMatch:'full'},
    {path:'inicio', component:PaginaInicioComponent}
];
