import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

  constructor(private router: Router){

  }

  visormapa() {
    this.router.navigate(['/visor-mapa'])
  }

  presentacion() {
    this.router.navigate(['/presentacion'])
  }

}
