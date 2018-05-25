/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
export declare abstract class SimpleGeometryComponent implements OnInit, OnDestroy {
    protected map: MapComponent;
    protected host: FeatureComponent;
    instance: ol.geom.SimpleGeometry;
    componentType: string;
    srid: string;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
