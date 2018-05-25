"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("./map.component");
var geometries_1 = require("./geometries");
var view_component_1 = require("./view.component");
var overlay_component_1 = require("./overlay.component");
var CoordinateComponent = (function () {
    function CoordinateComponent(map, viewHost, geometryPointHost, overlayHost) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        // console.log('instancing aol-coordinate');
        if (geometryPointHost !== null) {
            this.host = geometryPointHost;
        }
        else if (viewHost !== null) {
            this.host = viewHost;
        }
        else if (overlayHost !== null) {
            this.host = overlayHost;
        }
    }
    CoordinateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.instance.on('change:view', function (e) { return _this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.ngOnChanges = function (changes) {
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.onMapViewChanged = function (event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.transformCoordinates = function () {
        var transformCoordinates;
        if (this.srid === this.mapSrid) {
            transformCoordinates = [this.x, this.y];
        }
        else {
            transformCoordinates = ol.proj.transform([this.x, this.y], this.srid, this.mapSrid);
        }
        switch (this.host.componentType) {
            case 'geometry-point':
                this.host.instance.setCoordinates(transformCoordinates);
                break;
            case 'view':
                this.host.instance.setCenter(transformCoordinates);
                break;
            case 'overlay':
                this.host.instance.setPosition(transformCoordinates);
                break;
        }
    };
    return CoordinateComponent;
}());
CoordinateComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-coordinate',
                template: "<div class=\"aol-coordinate\"></div>"
            },] },
];
/** @nocollapse */
CoordinateComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: view_component_1.ViewComponent, decorators: [{ type: core_1.Optional },] },
    { type: geometries_1.GeometryPointComponent, decorators: [{ type: core_1.Optional },] },
    { type: overlay_component_1.OverlayComponent, decorators: [{ type: core_1.Optional },] },
]; };
CoordinateComponent.propDecorators = {
    'x': [{ type: core_1.Input },],
    'y': [{ type: core_1.Input },],
    'srid': [{ type: core_1.Input },],
};
exports.CoordinateComponent = CoordinateComponent;
var CollectionCoordinatesComponent = (function () {
    function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        // console.log('creating aol-collection-coordinates');
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else if (!!geometryMultipoint) {
            this.host = geometryMultipoint;
        }
        else if (!!geometryMultilinestring) {
            this.host = geometryMultilinestring;
        }
        else if (!!geometryMultipolygon) {
            this.host = geometryMultipolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
    }
    CollectionCoordinatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.instance.on('change:view', function (e) { return _this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.ngOnChanges = function (changes) {
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.onMapViewChanged = function (event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.transformCoordinates = function () {
        var _this = this;
        var newCoordinates;
        if (this.srid === this.mapSrid) {
            newCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    newCoordinates = this.coordinates.map(function (c) {
                        return ol.proj.transform(c, _this.srid, _this.mapSrid);
                    });
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    newCoordinates = this.coordinates.map(function (cc) {
                        return cc.map(function (c) { return ol.proj.transform(c, _this.srid, _this.mapSrid); });
                    });
                    break;
                case 'geometry-multipolygon':
                    newCoordinates = this.coordinates.map(function (ccc) {
                        return ccc.map(function (cc) {
                            return cc.map(function (c) { return ol.proj.transform(c, _this.srid, _this.mapSrid); });
                        });
                    });
                    break;
            }
        }
        this.host.instance.setCoordinates(newCoordinates);
    };
    return CollectionCoordinatesComponent;
}());
CollectionCoordinatesComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-collection-coordinates',
                template: "<div class=\"aol-collection-coordinates\"></div>"
            },] },
];
/** @nocollapse */
CollectionCoordinatesComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: geometries_1.GeometryLinestringComponent, decorators: [{ type: core_1.Optional },] },
    { type: geometries_1.GeometryPolygonComponent, decorators: [{ type: core_1.Optional },] },
    { type: geometries_1.GeometryMultiPointComponent, decorators: [{ type: core_1.Optional },] },
    { type: geometries_1.GeometryMultiLinestringComponent, decorators: [{ type: core_1.Optional },] },
    { type: geometries_1.GeometryMultiPolygonComponent, decorators: [{ type: core_1.Optional },] },
]; };
CollectionCoordinatesComponent.propDecorators = {
    'coordinates': [{ type: core_1.Input },],
    'srid': [{ type: core_1.Input },],
};
exports.CollectionCoordinatesComponent = CollectionCoordinatesComponent;
//# sourceMappingURL=coordinate.component.js.map