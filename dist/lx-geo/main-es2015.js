(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-area-chart/area-chart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-area-chart/area-chart.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<app-area-chart #areaChart [data]=\"chartData\"></app-area-chart>-->\n<app-geo [geoPoints]=\"mockData\"></app-geo>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/geo/geo.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/geo/geo.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>geo works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-area-chart/area-chart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/app-area-chart/area-chart.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hcmVhLWNoYXJ0L2FyZWEtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/app-area-chart/area-chart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app-area-chart/area-chart.component.ts ***!
  \********************************************************/
/*! exports provided: AreaChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartComponent", function() { return AreaChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



let AreaChartComponent = class AreaChartComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.transitionTime = 1000;
        this.xmax = 45;
        this.ymax = 200;
        this.hticks = 60;
        this.showLabel = 1;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_2__["schemeCategory10"]);
        this.hostElement = this.elRef.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes.data) {
            this.updateChart(changes.data.currentValue);
        }
    }
    updateChart(data) {
        if (!this.svg) {
            this.createChart(data);
            return;
        }
        this.processData(data);
        this.updateAreaCharts();
    }
    createChart(data) {
        this.removeExistingChartFromParent();
        this.setChartDimensions();
        this.setColorScale();
        this.addGraphicsElement();
        this.createXAxis();
        this.createYAxis();
        // d3 area and histogram functions  has to be declared after x and y functions are defined
        this.area = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x((datum) => this.x(d3__WEBPACK_IMPORTED_MODULE_2__["mean"]([datum.x1, datum.x2])))
            .y0(this.y(0))
            .y1((datum) => this.y(datum.length));
        this.histogram = d3__WEBPACK_IMPORTED_MODULE_2__["histogram"]()
            .value((datum) => datum)
            .domain([0, this.xmax])
            .thresholds(this.x.ticks(this.hticks));
        // data has to be processed after area and histogram functions are defined
        this.processData(data);
        this.createAreaCharts();
    }
    processData(data) {
        this.bins = [];
        data.forEach((row) => {
            this.bins.push(this.histogram(row));
        });
    }
    setChartDimensions() {
        const viewBoxHeight = 100;
        const viewBoxWidth = 200;
        this.svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.hostElement).append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight);
    }
    addGraphicsElement() {
        this.g = this.svg.append('g')
            .attr('transform', 'translate(0,0)');
    }
    setColorScale() {
        this.colorScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_2__["schemeCategory10"]);
        // Below is an example of using custom colors
        // this.colorScale = d3.scaleOrdinal().domain([0,1,2,3]).range(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']);
    }
    createXAxis() {
        this.x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, this.xmax])
            .range([30, 170]);
        this.g.append('g')
            .attr('transform', 'translate(0,90)')
            .attr('stroke-width', 0.5)
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](this.x).tickSize(0).tickFormat(''));
        this.g.append('g')
            .attr('transform', 'translate(0,90)')
            .style('font-size', '6')
            .style('stroke-dasharray', ('1,1'))
            .attr('stroke-width', 0.1)
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](this.x).ticks(10).tickSize(-80));
    }
    createYAxis() {
        this.y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, this.ymax])
            .range([90, 10]);
        this.g.append('g')
            .attr('transform', 'translate(30,0)')
            .attr('stroke-width', 0.5)
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](this.y).tickSize(0).tickFormat(''));
        this.g.append('g')
            .attr('transform', 'translate(30,0)')
            .style('stroke-dasharray', ('1,1'))
            .attr('stroke-width', 0.1)
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](this.y).ticks(4).tickSize(-140))
            .style('font-size', '6');
        if (this.showLabel === 1) {
            this.g.append('text')
                .attr('text-anchor', 'middle')
                .attr('transform', 'translate(10,50) rotate(-90)')
                .style('font-size', 8)
                .text('Frequency');
        }
    }
    createAreaCharts() {
        this.paths = [];
        this.bins.forEach((row, index) => {
            this.paths.push(this.g.append('path')
                .datum(row)
                .attr('fill', this.colorScale('' + index))
                .attr('stroke-width', 0.1)
                .attr('opacity', 0.5)
                .attr('d', (datum) => this.area(datum)));
        });
    }
    updateAreaCharts() {
        this.paths.forEach((path, index) => {
            path.datum(this.bins[index])
                .transition().duration(this.transitionTime)
                .attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
                .x((datum) => this.x(d3__WEBPACK_IMPORTED_MODULE_2__["mean"]([datum.x1, datum.x2])))
                .y0(this.y(0))
                .y1((datum) => this.y(datum.length)));
        });
    }
    removeExistingChartFromParent() {
        // !!!!Caution!!!
        // Make sure not to do;
        //     d3.select('svg').remove();
        // That will clear all other SVG elements in the DOM
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.hostElement).select('svg').remove();
    }
};
AreaChartComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaChartComponent.prototype, "transitionTime", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaChartComponent.prototype, "xmax", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaChartComponent.prototype, "ymax", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaChartComponent.prototype, "hticks", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaChartComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaChartComponent.prototype, "showLabel", void 0);
AreaChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-area-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-area-chart/area-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area-chart.component.css */ "./src/app/app-area-chart/area-chart.component.css")).default]
    })
], AreaChartComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: DeliveryMetric, AppComponent, randomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryMetric", function() { return DeliveryMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



class DeliveryMetric {
    constructor(stateIn, stateDisplayValueIn, meanIn, stdDevIn) {
        this.state = stateIn;
        this.stateDisplayValue = stateDisplayValueIn;
        this.mean = meanIn;
        this.stdDev = stdDevIn;
    }
}
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'lx-geo';
        this.chartData = [];
        this.displayedColumns = ['legend', 'stateDisplayValue', 'mean', 'stdDev'];
        this.mockData = this.generate();
    }
    ngOnInit() {
    }
    initialize() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
        this.generateData();
        this.chart.data = [...this.chartData];
        this.refreshInterval = setInterval(() => {
            if (document.hasFocus()) {
                this.generateData();
                this.chart.data = [...this.chartData];
            }
        }, 1000);
    }
    ngOnDestroy() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
    }
    ngAfterContentInit() {
        // this.initialize();
    }
    generateData() {
        this.chartData = [];
        this.deliveryMetrics = [];
        const meanPrepTime = randomInt(10, 11);
        const meanWaitTime = randomInt(8, 9);
        const meanTransitTime = randomInt(9, 10);
        const meanTotalTime = meanPrepTime + meanWaitTime + meanTransitTime;
        const sigmaPrepTime = randomInt(1, 1);
        const sigmaWaitTime = randomInt(2, 3);
        const sigmaTransitTime = randomInt(1, 2);
        const sigmaTotalTime = Math.floor(Math.sqrt(Math.pow(sigmaPrepTime, 2) +
            Math.pow(sigmaWaitTime, 2) +
            Math.pow(sigmaTransitTime, 2)));
        this.deliveryMetrics.push(new DeliveryMetric('preparing', 'Preparation', meanPrepTime, sigmaPrepTime));
        this.deliveryMetrics.push(new DeliveryMetric('ready', 'Waiting', meanWaitTime, sigmaWaitTime));
        this.deliveryMetrics.push(new DeliveryMetric('inTransit', 'In Transit', meanTransitTime, sigmaTransitTime));
        this.deliveryMetrics.push(new DeliveryMetric('delivered', 'Total delivery', meanTotalTime, sigmaTotalTime));
        const prandomizer = d3__WEBPACK_IMPORTED_MODULE_2__["randomNormal"](meanPrepTime, sigmaPrepTime);
        const wrandomizer = d3__WEBPACK_IMPORTED_MODULE_2__["randomNormal"](meanWaitTime, sigmaWaitTime);
        const trandomizer = d3__WEBPACK_IMPORTED_MODULE_2__["randomNormal"](meanTransitTime, sigmaTransitTime);
        const ptimes = [];
        const wtimes = [];
        const ttimes = [];
        const totaltimes = [];
        for (let i = 0; i < 500; i++) {
            const p = Math.floor(prandomizer());
            const w = Math.floor(wrandomizer());
            const t = Math.floor(trandomizer());
            const total = p + w + t;
            ptimes.push(p);
            wtimes.push(w);
            ttimes.push(t);
            totaltimes.push(total);
        }
        this.chartData.push(ptimes);
        this.chartData.push(wtimes);
        this.chartData.push(ttimes);
        this.chartData.push(totaltimes);
    }
    generate() {
        return [
            {
                geoId: 1,
                value: 200,
                geoName: 'Карачаево-Черкессия'
            },
            {
                geoId: 2,
                value: 3000,
                geoName: 'Карелия'
            },
            {
                geoId: 3,
                value: 600,
                geoName: 'Кемерово'
            },
            ,
            {
                geoId: 4,
                value: 50,
                geoName: 'Хабаровск'
            }
        ];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('areaChart', { static: true })
], AppComponent.prototype, "chart", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-area-chart/area-chart.component */ "./src/app/app-area-chart/area-chart.component.ts");
/* harmony import */ var _geo_geo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geo/geo.component */ "./src/app/geo/geo.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _app_area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_4__["AreaChartComponent"],
            _geo_geo_component__WEBPACK_IMPORTED_MODULE_5__["GeoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/geo/geo.component.css":
/*!***************************************!*\
  !*** ./src/app/geo/geo.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlby9nZW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/geo/geo.component.ts":
/*!**************************************!*\
  !*** ./src/app/geo/geo.component.ts ***!
  \**************************************/
/*! exports provided: GeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoComponent", function() { return GeoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/src/index.js");
/* harmony import */ var _russia_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./russia.map */ "./src/app/geo/russia.map.ts");





/**
 * http://bl.ocks.org/KoGor/5685876
 */
let GeoComponent = class GeoComponent {
    constructor() {
    }
    ngOnInit() {
        this.updateChart();
    }
    /**
     * todo: переписать на https://github.com/lsharir/angular-d3-graph-example/blob/master/src/app/d3/d3.service.ts
     */
    updateChart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const width = 960;
            const height = 500;
            const colorDomain = [100, 500, 1000, 5000];
            const extColorDomain = [0, 50, 150, 350, 750, 1500];
            const legendLabels = ['< 50', '50+', '150+', '350+', '750+', '> 1500'];
            const color = d3__WEBPACK_IMPORTED_MODULE_2__["scaleThreshold"]()
                .domain(colorDomain)
                .range(['#eff0f2', '#d8dde7', '#bcc5d6', '#909ebb']);
            const div = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('body').append('div')
                .attr('class', 'tooltip')
                .style('opacity', 0);
            const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('body').append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('margin', '10px auto');
            const projection = d3__WEBPACK_IMPORTED_MODULE_2__["geoAlbers"]()
                .rotate([-105, 0])
                .center([-10, 65])
                .parallels([52, 64])
                .scale(700)
                .translate([width / 2, height / 2]);
            const path = d3__WEBPACK_IMPORTED_MODULE_2__["geoPath"]().projection(projection);
            // Reading map file and data
            // const map = await d3.json('/assets/russia_1e-7sr.json');
            // const russia = map.objects.russia;
            // https://github.com/zarkzork/russia-topojson
            const map = yield d3__WEBPACK_IMPORTED_MODULE_2__["json"]('/assets/russia2.json');
            const russia = map.objects.name;
            const valueById = {};
            const nameById = {};
            const data = this.geoPoints;
            data.forEach(d => {
                const geoMap = _russia_map__WEBPACK_IMPORTED_MODULE_4__["russiaMap"].find(m => m.geoId === d.geoId);
                valueById[geoMap.isoKey] = +d.value;
                nameById[geoMap.isoKey] = d.geoName;
            });
            // Drawing Choropleth
            const region = svg.append('g')
                .attr('class', 'region')
                .selectAll('path')
                // @ts-ignore
                .data(topojson_client__WEBPACK_IMPORTED_MODULE_3__["feature"](map, russia).features)
                .enter().append('path')
                .attr('d', path)
                .style('fill', (d) => {
                const threshold = valueById[d.properties.ISO_2];
                const c = color(threshold || 0);
                return c;
            })
                .style('opacity', 0.8);
            region.on('mouseover', (d, i, nodes) => {
                const select = d3__WEBPACK_IMPORTED_MODULE_2__["select"](nodes[i]);
                select.transition().duration(300).style('fill', '#0065dd');
                div.transition().duration(300)
                    .style('opacity', 1);
                const tooltip = nameById[d.properties.ISO_2] && valueById[d.properties.ISO_2]
                    ? `${valueById[d.properties.ISO_2]} упоминаний в ${nameById[d.properties.ISO_2]}`
                    : `Нет упоминаний`;
                div.text(tooltip)
                    .style('left', (d3__WEBPACK_IMPORTED_MODULE_2__["event"].pageX) + 'px')
                    .style('top', (d3__WEBPACK_IMPORTED_MODULE_2__["event"].pageY - 30) + 'px');
            });
            region.on('mouseout', (d, i, nodes) => {
                const threshold = valueById[d.properties.ISO_2];
                const c = color(threshold || 0);
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](nodes[i])
                    .transition().duration(300)
                    .style('fill', c);
                div.transition().duration(300)
                    .style('opacity', 0);
            });
            // Adding mouseevents
            // Adding cities on the map
            // const cities = await d3.tsv('/assets/cities.tsv');
            // const city = svg.selectAll('g.city')
            //     .data(cities)
            //     .enter()
            //     .append('g')
            //     .attr('class', 'city')
            //     .attr('transform', (d: any) => {
            //         return 'translate(' + projection([d.lon, d.lat]) + ')';
            //     });
            //
            // city.append('circle')
            //     .attr('r', 3)
            //     .style('fill', 'lime')
            //     .style('opacity', 0.75);
            //
            // city.append('text')
            //     .attr('x', 5)
            //     .text(d => d.City);
            const zoomed = () => {
                const transform = d3__WEBPACK_IMPORTED_MODULE_2__["event"].transform;
                svg.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
            };
            const zoom = d3__WEBPACK_IMPORTED_MODULE_2__["zoom"]().on('zoom', zoomed);
            svg.call(zoom);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GeoComponent.prototype, "geoPoints", void 0);
GeoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/geo/geo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geo.component.css */ "./src/app/geo/geo.component.css")).default]
    })
], GeoComponent);



/***/ }),

/***/ "./src/app/geo/russia.map.ts":
/*!***********************************!*\
  !*** ./src/app/geo/russia.map.ts ***!
  \***********************************/
/*! exports provided: russiaMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russiaMap", function() { return russiaMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const russiaMap = [
    {
        geoId: 1,
        topojsonKey: 'RU.KC',
        isoKey: 'KC',
        topojsonName: 'Karachay-Cherkess'
    },
    {
        geoId: 2,
        isoKey: 'KR',
        topojsonKey: 'RU.KI',
        topojsonName: 'Karelia'
    },
    {
        geoId: 3,
        isoKey: 'KEM',
        topojsonKey: 'RU.KE',
        topojsonName: 'Kemerovo'
    },
    {
        geoId: 4,
        isoKey: 'KHA',
        topojsonKey: 'RU.KH',
        topojsonName: 'Khabarovsk'
    },
    {
        geoId: 5,
        isoKey: 'KK',
        topojsonKey: 'RU.KK',
        topojsonName: 'Khakass'
    },
    {
        geoId: 6,
        isoKey: 'KHM',
        topojsonKey: 'RU.KM',
        topojsonName: 'Khanty-Mansi'
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Alex\Sources\lexstark\lx-geo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map