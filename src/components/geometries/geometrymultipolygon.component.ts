import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { geom, proj } from 'openlayers';

@Component({
  selector: 'aol-geometry-multipolygon',
  template: `<ng-content></ng-content>`
})
export class GeometryMultiPolygonComponent extends SimpleGeometryComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-multipolygon';
  public instance: ol.geom.MultiPolygon;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // console.log('creating aol-geometry-multipolygon');
  }

  ngOnInit() {
    this.instance = new geom.MultiPolygon([[[[0, 0], [1, 1], [0, 1]]]]);
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
