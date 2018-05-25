/// <reference types="openlayers" />
import { OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryPointComponent, GeometryLinestringComponent, GeometryPolygonComponent, GeometryMultiPointComponent, GeometryMultiLinestringComponent, GeometryMultiPolygonComponent } from './geometries';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
export declare class CoordinateComponent implements OnChanges, OnInit {
    private map;
    private host;
    private mapSrid;
    x: number;
    y: number;
    srid: string;
    constructor(map: MapComponent, viewHost: ViewComponent, geometryPointHost: GeometryPointComponent, overlayHost: OverlayComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged(event);
    private transformCoordinates();
}
export declare class CollectionCoordinatesComponent implements OnChanges, OnInit {
    private map;
    private host;
    private mapSrid;
    coordinates: ol.Coordinate[] | ol.Coordinate[][] | ol.Coordinate[][][];
    srid: string;
    constructor(map: MapComponent, geometryLinestring: GeometryLinestringComponent, geometryPolygon: GeometryPolygonComponent, geometryMultipoint: GeometryMultiPointComponent, geometryMultilinestring: GeometryMultiLinestringComponent, geometryMultipolygon: GeometryMultiPolygonComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged(event);
    private transformCoordinates();
}
