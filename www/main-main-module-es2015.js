(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content slot=\"fixed\">\n  <ion-grid class=\"main-page-grid\">\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"action('benefits')\">\n        <ion-img src=\"assets/main/benefits.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"12\" (click)=\"action('resources')\">\n        <ion-img src=\"assets/main/resources.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/main/main-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home/main/main-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/home/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/main/main.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/main/main.module.ts ***!
  \************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/home/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/home/main/main.page.ts");
/* harmony import */ var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/page-title/page-title.module */ "./src/app/components/page-title/page-title.module.ts");








let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"],
            src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/pages/home/main/main.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/main/main.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-page-grid {\n  height: 100%;\n}\n.main-page-grid ion-row {\n  height: 100%;\n}\n.main-page-grid ion-row ion-col {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUo7QUFESTtFQUNFLFdBQUE7QUFHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWFpbi9tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2UtZ3JpZHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBpb24tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW9uLWNvbCB7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/main/main.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/main/main.page.ts ***!
  \**********************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let MainPage = class MainPage {
    constructor(alertCtrl, router) {
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    /**
     * Action that show options to the user
     * @param type
     */
    action(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '¿Donde desea ir?',
                message: 'Seleccione la accion que desea realizar.',
                buttons: [
                    {
                        text: type === 'benefits' ? 'Ir a Sección Programa de asistencia al empleado' : 'Ir a Sección Recursos',
                        handler: () => {
                            let route = 'tablinks/' + type;
                            this.router.navigate([route]);
                        }
                    },
                    {
                        text: 'Ver video',
                        handler: () => {
                            // let videoId = type === 'benefits' ? 472346173 : 375651446;
                            let videoId = type === 'benefits' ? 472346173 : 476598362;
                            // this.router.navigate(['/tablinks/main/video', videoId]);
                            const queryParams = {
                                type: 'main',
                                videoId
                            };
                            this.router.navigate(['/video'], { queryParams });
                        }
                    },
                    {
                        text: 'Cancelar'
                    }
                ]
            });
            return yield alert.present();
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/home/main/main.page.scss")).default]
    })
], MainPage);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map