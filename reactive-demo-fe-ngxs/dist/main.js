(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/airlines/_store/airlines.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/airlines/_store/airlines.actions.ts ***!
  \*****************************************************/
/*! exports provided: Query, Favorize, Favorized */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Favorize", function() { return Favorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Favorized", function() { return Favorized; });
var Query = /** @class */ (function () {
    function Query(payload) {
        this.payload = payload;
    }
    Query.type = '[Airlines] query';
    return Query;
}());

var Favorize = /** @class */ (function () {
    function Favorize(payload) {
        this.payload = payload;
    }
    Favorize.type = '[Airlines] favorize';
    return Favorize;
}());

var Favorized = /** @class */ (function () {
    function Favorized(payload) {
        this.payload = payload;
    }
    Favorized.type = '[Airlines] favorized';
    return Favorized;
}());



/***/ }),

/***/ "./src/app/airlines/_store/airlines.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/airlines/_store/airlines.service.ts ***!
  \*****************************************************/
/*! exports provided: AirlinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinesService", function() { return AirlinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AirlinesService = /** @class */ (function () {
    function AirlinesService(_http) {
        this._http = _http;
    }
    AirlinesService.prototype.getAirlineList = function (country) {
        return this._http
            .get("/api/airline/" + country)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err.json()); }));
    };
    AirlinesService.prototype.setFavorite = function (id, favorite) {
        return this._http
            .get("/api/airline/" + id + "/" + favorite);
    };
    AirlinesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AirlinesService);
    return AirlinesService;
}());



/***/ }),

/***/ "./src/app/airlines/_store/airlines.state.ts":
/*!***************************************************!*\
  !*** ./src/app/airlines/_store/airlines.state.ts ***!
  \***************************************************/
/*! exports provided: AirlinesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinesState", function() { return AirlinesState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _airlines_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./airlines.actions */ "./src/app/airlines/_store/airlines.actions.ts");
/* harmony import */ var _airlines_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./airlines.service */ "./src/app/airlines/_store/airlines.service.ts");





var AirlinesState = /** @class */ (function () {
    function AirlinesState(_service) {
        this._service = _service;
    }
    AirlinesState.prototype.query = function (_a, _b) {
        var setState = _a.setState;
        var payload = _b.payload;
        return this._service.getAirlineList(payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            setState(result);
        }));
    };
    AirlinesState.prototype.favorize = function (_a, _b) {
        var dispatch = _a.dispatch;
        var payload = _b.payload;
        return this._service.setFavorite(payload.id, payload.favorite)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) { return dispatch(new _airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Favorized"](result)); }));
    };
    AirlinesState.prototype.favorized = function (_a, _b) {
        var getState = _a.getState, setState = _a.setState;
        var payload = _b.payload;
        var airlines = getState();
        airlines = airlines.map(function (a) {
            return a.id === payload.id ? payload : a;
        });
        setState(airlines);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Query"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Query"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AirlinesState.prototype, "query", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Favorize"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Favorize"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AirlinesState.prototype, "favorize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Favorized"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Favorized"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AirlinesState.prototype, "favorized", null);
    AirlinesState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'airlines',
            defaults: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_airlines_service__WEBPACK_IMPORTED_MODULE_4__["AirlinesService"]])
    ], AirlinesState);
    return AirlinesState;
}());



/***/ }),

/***/ "./src/app/airlines/airlines-list/airlines-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/airlines/airlines-list/airlines-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"flightId\" matSortDirection=\"asc\"\n           matSortDisableClear>\n\n  <ng-container matColumnDef=\"favorite\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"5\">&nbsp;</mat-header-cell>\n    <mat-cell *matCellDef=\"let row\" fxFlex=\"5\">\n      <button mat-icon-button (click)=\"updateFavorite(row.id, !row.favorite)\">\n        <mat-icon *ngIf=\"row.favorite\">favorite</mat-icon>\n        <mat-icon *ngIf=\"!row.favorite\">favorite_border</mat-icon>\n      </button>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"id\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"10\">ID</mat-header-cell>\n    <mat-cell *matCellDef=\"let row\" fxFlex=\"10\">{{row.id}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"40\">Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let row;\" fxFlex=\"40\"> {{row.name}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"iata\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"15\">IATA</mat-header-cell>\n    <mat-cell *matCellDef=\"let row;\" fxFlex=\"15\"> {{row.iata}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"icao\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"15\">ICAO</mat-header-cell>\n    <mat-cell *matCellDef=\"let row;\" fxFlex=\"15\"> {{row.icao}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"callsign\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"15\">Callsign</mat-header-cell>\n    <mat-cell *matCellDef=\"let row;\" fxFlex=\"15\"> {{row.callsign}}</mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n</mat-table>\n\n<mat-paginator #paginator\n               [length]=\"dataSource.length\"\n               [pageIndex]=\"0\"\n               [pageSize]=\"5\"\n               [pageSizeOptions]=\"[5,10,25,100]\"\n               [showFirstLastButtons]=\"true\">\n\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/airlines/airlines-list/airlines-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/airlines/airlines-list/airlines-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: AirlinesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinesListComponent", function() { return AirlinesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var app_airlines_store_airlines_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/airlines/_store/airlines.actions */ "./src/app/airlines/_store/airlines.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AirlinesListComponent = /** @class */ (function () {
    function AirlinesListComponent(_store) {
        var _this = this;
        this._store = _store;
        this.displayedColumns = ['favorite', 'id', 'name', 'iata', 'icao', 'callsign'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.disconnect$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.airlines$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.disconnect$))
            .subscribe(function (data) { return _this.dataSource.data = data; });
    }
    AirlinesListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    AirlinesListComponent.prototype.ngOnDestroy = function () {
        this.disconnect$.next();
        this.disconnect$.complete();
    };
    AirlinesListComponent.prototype.updateFavorite = function (id, favorite) {
        this._store.dispatch(new app_airlines_store_airlines_actions__WEBPACK_IMPORTED_MODULE_4__["Favorize"]({
            id: id,
            favorite: favorite
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AirlinesListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], AirlinesListComponent.prototype, "airlines$", void 0);
    AirlinesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'demo-airlines-list',
            template: __webpack_require__(/*! ./airlines-list.component.html */ "./src/app/airlines/airlines-list/airlines-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AirlinesListComponent);
    return AirlinesListComponent;
}());



/***/ }),

/***/ "./src/app/airlines/airlines.component.html":
/*!**************************************************!*\
  !*** ./src/app/airlines/airlines.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Country\" [(value)]=\"country\">\n    <mat-option *ngFor=\"let c of countries\" [value]=\"c\">\n      {{ c }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<demo-airlines-list></demo-airlines-list>\n"

/***/ }),

/***/ "./src/app/airlines/airlines.component.ts":
/*!************************************************!*\
  !*** ./src/app/airlines/airlines.component.ts ***!
  \************************************************/
/*! exports provided: AirlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinesComponent", function() { return AirlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_airlines_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_store/airlines.actions */ "./src/app/airlines/_store/airlines.actions.ts");




var AirlinesComponent = /** @class */ (function () {
    function AirlinesComponent(_store) {
        this._store = _store;
        this.countries = ['Brazil', 'India', 'Mexico', 'Netherlands', 'Spain'];
        this._country = 'Netherlands';
        this.query(this._country);
    }
    Object.defineProperty(AirlinesComponent.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
            this.query(value);
        },
        enumerable: true,
        configurable: true
    });
    AirlinesComponent.prototype.query = function (country) {
        this._store.dispatch(new _store_airlines_actions__WEBPACK_IMPORTED_MODULE_3__["Query"](country));
    };
    AirlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'demo-airlines',
            template: __webpack_require__(/*! ./airlines.component.html */ "./src/app/airlines/airlines.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AirlinesComponent);
    return AirlinesComponent;
}());



/***/ }),

/***/ "./src/app/airlines/airlines.module.ts":
/*!*********************************************!*\
  !*** ./src/app/airlines/airlines.module.ts ***!
  \*********************************************/
/*! exports provided: AirlinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinesModule", function() { return AirlinesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_airlines_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_store/airlines.state */ "./src/app/airlines/_store/airlines.state.ts");
/* harmony import */ var _airlines_list_airlines_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./airlines-list/airlines-list.component */ "./src/app/airlines/airlines-list/airlines-list.component.ts");
/* harmony import */ var _airlines_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./airlines.component */ "./src/app/airlines/airlines.component.ts");
/* harmony import */ var app_airlines_store_airlines_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/airlines/_store/airlines.service */ "./src/app/airlines/_store/airlines.service.ts");











var AirlinesModule = /** @class */ (function () {
    function AirlinesModule() {
    }
    AirlinesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _airlines_component__WEBPACK_IMPORTED_MODULE_9__["AirlinesComponent"],
                _airlines_list_airlines_list_component__WEBPACK_IMPORTED_MODULE_8__["AirlinesListComponent"]
            ],
            imports: [
                // ANGULAR
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                // MATERIAL
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                // NGXS
                _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forFeature([_store_airlines_state__WEBPACK_IMPORTED_MODULE_7__["AirlinesState"]])
            ],
            providers: [
                app_airlines_store_airlines_service__WEBPACK_IMPORTED_MODULE_10__["AirlinesService"]
            ],
            exports: [
                _airlines_component__WEBPACK_IMPORTED_MODULE_9__["AirlinesComponent"]
            ]
        })
    ], AirlinesModule);
    return AirlinesModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<demo-airlines></demo-airlines>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _airlines_airlines_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./airlines/airlines.module */ "./src/app/airlines/airlines.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                // NGXS
                _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot([]),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsLoggerPluginModule"].forRoot(),
                // APP
                _airlines_airlines_module__WEBPACK_IMPORTED_MODULE_7__["AirlinesModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wjboogerd/Development/projects/ExampleReactiveLibraries/reactive-demo-fe-ngxs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map