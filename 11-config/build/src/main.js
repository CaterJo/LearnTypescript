"use strict";
var Car = /** @class */ (function () {
    function Car() {
        this.engine = 0;
    }
    Car.prototype.move = function () {
        var engine = this.engine + 1;
        console.log('brmm', engine);
    };
    return Car;
}());
//# sourceMappingURL=main.js.map