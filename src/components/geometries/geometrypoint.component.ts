import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { geom, proj } from 'openlayers';

@Component({
  selector: 'aol-geometry-point',
  template: `<ng-content></ng-content>`
})
export class GeometryPointComponent extends SimpleGeometryComponent implements OnInit, OnDestroy, OnChanges {
  public componentType: string = 'geometry-point';
  public instance: ol.geom.Point;
  @Input() coordinates: ol.Coordinate;
  transformedCoordinates: ol.Coordinate;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // console.log('creating aol-geometry-point');
  }

  ngOnInit() {
    this.instance = new geom.Point(this.transformedCoordinates);
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reprojectCoordinates();
  }

  reprojectCoordinates() {
    let referenceProjection: ol.proj.Projection;
    let referenceProjectionCode: string;

    referenceProjection = this.map.instance.getView().getProjection();
    referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';

    if (this.srid && this.srid !== referenceProjectionCode) {
      this.transformedCoordinates = proj.transform(this.coordinates, this.srid, referenceProjectionCode);
    } else {
      this.transformedCoordinates = this.coordinates;
    }

    if (this.instance) {
      this.instance.setCoordinates(this.transformedCoordinates);
    }
  }
}
