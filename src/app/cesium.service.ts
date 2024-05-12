import { Injectable } from '@angular/core';

// declare let Cesium: any;
// import * as Cesium from '../assets/js/Cesium.js';
import * as Cesium from 'cesium';

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYmU5MTczMC02MjQ3LTQ1MjctOWZiOS05ZGIwZmM1MDE0M2YiLCJpZCI6MjE0MTcyLCJpYXQiOjE3MTU0ODIzMDJ9.OLayONujTmrcmnE-XBioA89vL8EeExbBUNdBu59Xf6k";


@Injectable({
  providedIn: 'root'
})
export class CesiumService {

  constructor() { }
  private viewer: any;
plotPoints(div:string){
    this.viewer = new Cesium.Viewer(div);
    this.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
      point: {
        color: Cesium.Color.RED,
        pixelSize: 16,
      },
    });
    this.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-80.5, 35.14),
      point: {
        color: Cesium.Color.BLUE,
        pixelSize: 16,
      },
    });
    this.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-80.12, 25.46),
      point: {
        color: Cesium.Color.YELLOW,
        pixelSize: 16,
      },
    });
  }
}
