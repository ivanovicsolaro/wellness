(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-img class=\"logo-title\" src='assets/logo_white.png'></ion-img>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<!-- <ion-content>\n  Home\n</ion-content> -->\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"wellness\">\n    <ion-tab-button *ngFor=\"let tab of tabs\" [tab]=\"tab.route\">\n      <ion-icon [name]=\"tab.icon\"></ion-icon>\n      <ion-label>{{ tab.label }}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: 'tablinks',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'benefits',
                loadChildren: () => Promise.all(/*! import() | benefits-benefits-module */[__webpack_require__.e("common"), __webpack_require__.e("benefits-benefits-module")]).then(__webpack_require__.bind(null, /*! ./benefits/benefits.module */ "./src/app/pages/home/benefits/benefits.module.ts")).then(m => m.BenefitsPageModule)
            },
            {
                path: 'resources',
                loadChildren: () => Promise.all(/*! import() | resources-resources-module */[__webpack_require__.e("common"), __webpack_require__.e("resources-resources-module")]).then(__webpack_require__.bind(null, /*! ./resources/resources.module */ "./src/app/pages/home/resources/resources.module.ts")).then(m => m.ResourcesPageModule)
            },
            {
                path: 'news',
                loadChildren: () => Promise.all(/*! import() | news-news-module */[__webpack_require__.e("common"), __webpack_require__.e("news-news-module")]).then(__webpack_require__.bind(null, /*! ./news/news.module */ "./src/app/pages/home/news/news.module.ts")).then(m => m.NewsPageModule)
            },
            {
                path: 'contact',
                loadChildren: () => Promise.all(/*! import() | contact-contact-module */[__webpack_require__.e("common"), __webpack_require__.e("contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "./src/app/pages/home/contact/contact.module.ts")).then(m => m.ContactPageModule)
            },
            {
                path: 'main',
                loadChildren: () => Promise.all(/*! import() | main-main-module */[__webpack_require__.e("common"), __webpack_require__.e("main-main-module")]).then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/app/pages/home/main/main.module.ts")).then(m => m.MainPageModule)
            },
            {
                path: '',
                redirectTo: '/tablinks/main',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tablinks/main',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-title {\n  max-width: 100px;\n  height: auto;\n  margin: 0 auto;\n}\n\nion-tab-button.tab-selected, ion-tab-button.ion-activated {\n  color: #99c566 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUVFLHlCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tdGl0bGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCwgaW9uLXRhYi1idXR0b24uaW9uLWFjdGl2YXRlZHtcbiAgLy8gY29sb3I6IGdvbGQ7XG4gIGNvbG9yOiAjOTljNTY2ICFpbXBvcnRhbnQ7XG59XG5cbi8vIGlvbi10YWItYnV0dG9ue1xuLy8gICAtLWNvbG9yLXNlbGVjdGVkOiAjOTljNTY2O1xuLy8gfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.tabs = [];
    }
    ngOnInit() {
        this.tabs = [
            { route: 'benefits', label: 'Beneficios', icon: 'heart' },
            { route: 'resources', label: 'Recursos', icon: 'star' },
            { route: 'news', label: 'Novedades', icon: 'notifications' },
            { route: 'contact', label: 'Contacto', icon: 'mail' }
        ];
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map