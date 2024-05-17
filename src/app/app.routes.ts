import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/mains/pagina-inicio/pagina-inicio.component';
import { PaginaMapaComponent } from './components/mains/pagina-mapa/pagina-mapa.component';
import { PresentacionComponent } from './components/pages/presentacion/presentacion.component';

export const routes: Routes = [
    {path:'',redirectTo:'inicio',pathMatch:'full'},
    {path:'inicio', component:PaginaInicioComponent},
    {path:'visor-mapa', component:PaginaMapaComponent},
    {path:'presentacion', component:PresentacionComponent}
];
