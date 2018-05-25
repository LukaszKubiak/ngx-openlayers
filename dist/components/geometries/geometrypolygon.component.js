"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feature_component_1 = require("../feature.component");
var simplegeometry_component_1 = require("./simplegeometry.component");
var map_component_1 = require("../map.component");
var openlayers_1 = require("openlayers");
var GeometryPolygonComponent = (function (_super) {
    __extends(GeometryPolygonComponent, _super);
    function GeometryPolygonComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-polygon';
        return _this;
        // console.log('creating aol-geometry-polygon');
    }
    GeometryPolygonComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.Polygon([[[0, 0], [1, 1], [0, 1]]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPolygonComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return GeometryPolygonComponent;
}(simplegeometry_component_1.SimpleGeometryComponent));
GeometryPolygonComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-geometry-polygon',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
GeometryPolygonComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: feature_component_1.FeatureComponent, },
]; };
exports.GeometryPolygonComponent = GeometryPolygonComponent;
//# sourceMappingURL=geometrypolygon.component.js.map