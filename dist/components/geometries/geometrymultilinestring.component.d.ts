/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
export declare class GeometryMultiLinestringComponent extends SimpleGeometryComponent implements OnInit, OnDestroy {
    componentType: string;
    instance: ol.geom.MultiLineString;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
