"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleGeometryComponent = (function () {
    function SimpleGeometryComponent(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    SimpleGeometryComponent.prototype.ngOnInit = function () {
        this.host.instance.setGeometry(this.instance);
    };
    SimpleGeometryComponent.prototype.ngOnDestroy = function () {
        // this.host.instance.setGeometry(null);
    };
    return SimpleGeometryComponent;
}());
SimpleGeometryComponent.propDecorators = {
    'srid': [{ type: core_1.Input },],
};
exports.SimpleGeometryComponent = SimpleGeometryComponent;
//# sourceMappingURL=simplegeometry.component.js.map