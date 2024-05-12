import { Component, OnInit } from '@angular/core';
import { CesiumService } from '../../../cesium.service';

@Component({
  selector: 'app-pagina-mapa',
  standalone: true,
  imports: [],
  templateUrl: './pagina-mapa.component.html',
  styleUrl: './pagina-mapa.component.css'
})
export class PaginaMapaComponent implements OnInit {

  constructor(private cesium: CesiumService) { }
  
  ngOnInit(): void {
    this.cesium.plotPoints("cesium");
  }

}3
