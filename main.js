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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-layout></app-header-layout>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"footer-grids\">\n      <div class=\"col-md-3 footer-grid\">\n        <div class=\"footer-grid-heading\">\n          <h4><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">address</font></font></h4>\n        </div>\n        <div class=\"footer-grid-info\">\n          <p><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Over time, Inc Eiusmod\n             </font></font><span><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">St. Vero Place, 56777 Kingsport.</font></font></span>\n          </p>\n          <p class=\"phone\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Phone: +1 123 456 789\n             </font></font><span><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Email </font></font><a href=\"mailto:example@email.com\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">mail@example.com</font></font></a></span>\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-3 footer-grid\">\n        <div class=\"footer-grid-heading\">\n          <h4><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">navigation</font></font></h4>\n        </div>\n        <div class=\"footer-grid-info\">\n          <ul>\n            <li><a   routerLink=\"/about\" routerLinkActive=\"active\"  ><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">About</font></font></a></li>\n            <li><a href=\"services.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Services</font></font></a></li>\n            <li><a href=\"gallery.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">gallery</font></font></a></li>\n            <li><a href=\"contact.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Contact</font></font></a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-3 footer-grid\">\n        <div class=\"footer-grid-heading\">\n          <h4><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">follow</font></font></h4>\n        </div>\n        <div class=\"social\">\n          <ul>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-rss\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-vk\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-3 footer-grid\">\n        <div class=\"footer-grid-heading\">\n          <h4><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Newsletter</font></font></h4>\n        </div>\n        <div class=\"footer-grid-info\">\n          <form action=\"#\" method=\"post\">\n            <input type=\"email\" id=\"mc4wp_email\" name=\"EMAIL\" placeholder=\"Enter your email here\" required=\"\">\n            <font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><input type=\"submit\" value=\"subscribe\"></font></font>\n          </form>\n        </div>\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\n    <div class=\"copyright\">\n      <p><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">© 2016 my trip. </font><font style=\"vertical-align: inherit;\">All rights reserved | </font><font style=\"vertical-align: inherit;\">Design </font></font><a href=\"http://w3layouts.com/\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">W3layouts</font></font></a> </p>\n    </div>\n  </div>\n</div>\n"

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
        this.title = 'mytourism';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-layout/header-layout.component */ "./src/app/header-layout/header-layout.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_7__["HeaderLayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header-layout/header-layout.component.html":
/*!************************************************************!*\
  !*** ./src/app/header-layout/header-layout.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"banner about-bg\">\n  <div class=\"top-banner about-top-banner\">\n    <div class=\"container\">\n      <div class=\"top-banner-left\">\n        <ul>\n          <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"> +1 234 567 8901</font></font></li>\n          <li><a href=\"mailto:example@email.com\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"> mail@example.com</font></font></a></li>\n        </ul>\n      </div>\n      <div class=\"top-banner-right\">\n        <ul>\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a></li>\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\n  </div>\n  <div class=\"header\">\n    <div class=\"container\">\n      <div class=\"logo\">\n        <h1>\n          <a href=\"index.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">my Trip</font></font></a>\n        </h1>\n      </div>\n      <div class=\"top-nav\">\n        <nav class=\"navbar navbar-default\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Menu\t\t\t\t\t\t\n            </button>\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li><a href=\"index.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">home</font></font></a></li>\n              <li><a class=\"active\" href=\"about.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">About</font></font></a></li>\n              <li><a href=\"services.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Services</font></font></a></li>\n              <li><a href=\"codes.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">codes</font></font></a></li>\t\n              <li><a href=\"gallery.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">gallery</font></font></a></li>\n              <li><a href=\"contact.html\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Contact</font></font></a></li>\n              <div class=\"clearfix\"> </div>\n            </ul>\t\n          </div>\t\n        </nav>\t\t\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header-layout/header-layout.component.scss":
/*!************************************************************!*\
  !*** ./src/app/header-layout/header-layout.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1sYXlvdXQvaGVhZGVyLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/header-layout/header-layout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/header-layout/header-layout.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutComponent", function() { return HeaderLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderLayoutComponent = /** @class */ (function () {
    function HeaderLayoutComponent() {
    }
    HeaderLayoutComponent.prototype.ngOnInit = function () {
    };
    HeaderLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-layout',
            template: __webpack_require__(/*! ./header-layout.component.html */ "./src/app/header-layout/header-layout.component.html"),
            styles: [__webpack_require__(/*! ./header-layout.component.scss */ "./src/app/header-layout/header-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderLayoutComponent);
    return HeaderLayoutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"banner\">\n<div class=\"top-banner\">\n  <div class=\"container\">\n    <div class=\"top-banner-left\">\n      <ul>\n        <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> +1 234 567 8901</li>\n        <li><a href=\"mailto:example@email.com\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> mail@example.com</a></li>\n      </ul>\n    </div>\n    <div class=\"top-banner-right\">\n      <ul>\n        <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n        <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n        <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a></li>\n        <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"clearfix\"> </div>\n  </div>\n</div>\n<div class=\"header\">\n  <div class=\"container\">\n    <div class=\"logo\">\n      <h1>\n        <a href=\"index.html\">My Trip</a>\n      </h1>\n    </div>\n    <div class=\"top-nav\">\n      <nav class=\"navbar navbar-default\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Menu\t\t\t\t\t\t\n          </button>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li><a class=\"active\" href=\"index.html\">Home</a></li>\n            <li><a routerLink=\"/about\" routerLinkActive=\"active\"  >About</a></li>\n            <li><a href=\"services.html\">Services</a></li>\n            <li><a href=\"codes.html\">Codes</a></li>\t\n            <li><a href=\"gallery.html\">Gallery</a></li>\n            <li><a href=\"contact.html\">Contact</a></li>\n            <div class=\"clearfix\"> </div>\n          </ul>\t\n        </div>\t\n      </nav>\t\t\n    </div>\n    <div class=\"clearfix\"> </div>\n  </div>\n</div>\n</div>\n\n<div id=\"kb\" class=\"carousel kb_elastic animate_text kb_wrapper\" data-ride=\"carousel\" data-interval=\"6000\" data-pause=\"hover\">\n  <!-- Wrapper for Slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n      <!-- First Slide -->\n      <div class=\"item\">\n<div class=\"slider\">\n  <div class=\"carousel-caption kb_caption slider-grid\">\n    <h3><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">singapore</font></font></h3>\n    <p><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</font></font></p>\n  </div>\n</div>\n      </div>\n\n      <!-- Second Slide -->\n      <div class=\"item\">\n<div class=\"slider slider1\">\n  <div class=\"carousel-caption kb_caption kb_caption_right slider-grid\">\n    <h3><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Hawaii</font></font></h3>\n    <p><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Live or no blockage, or my developers, photography was.</font></font></p>\n  </div>\n</div>\n      </div>\n\n      <!-- Third Slide -->\n      <div class=\"item active\">\n<div class=\"slider slider2\">\n  <div class=\"carousel-caption kb_caption kb_caption_center slider-grid\">\n     <h3><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Hong Kong</font></font></h3>\n    <p><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Now ugly chili, manufacturing, and how, eu soccer now</font></font></p>\n  </div>\n</div>\n      </div>\n\n  </div>\n  <!-- Navigation Buttons -->\n  <!-- Left Button -->\n  <a class=\"left carousel-control kb_control_left\" href=\"#kb\" role=\"button\" data-slide=\"prev\">\n      <span class=\"fa fa-angle-left kb_icons\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">previous</font></font></span>\n  </a>\n  <!-- Right Button -->\n  <a class=\"right carousel-control kb_control_right\" href=\"#kb\" role=\"button\" data-slide=\"next\">\n      <span class=\"fa fa-angle-right kb_icons\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">next</font></font></span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\angular-website\mytourism\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map