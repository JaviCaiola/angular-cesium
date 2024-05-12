import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { LoaderComponent } from './pages/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prueba de Compatibilidad Angular - Cesium';

  showLoader: boolean = false;

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (event instanceof NavigationEnd) {
        this.showLoader = false;
      }
    });
  }
}
