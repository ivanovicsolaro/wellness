(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resources.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resources.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"wellness\">\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-text-center grid-title\">\n        <ion-text color=\"wellness\">Recursos para el Bienestar</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-img src=\"assets/resources/resources.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center topics-title\">\n        <ion-text color=\"wellness\">Temas Disponibles</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let topic of topics\" [routerLink]=\"'list/' + topic.id\">\n            <ion-icon name=\"caret-forward\" slot=\"start\" color=\"wellness\"></ion-icon>\n            <ion-label color =\"wellness\">\n              {{ topic.name }}\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/resources/resources-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/resources/resources-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ResourcesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageRoutingModule", function() { return ResourcesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources.page */ "./src/app/pages/home/resources/resources.page.ts");




const routes = [
    {
        path: '',
        component: _resources_page__WEBPACK_IMPORTED_MODULE_3__["ResourcesPage"]
    },
    {
        path: 'list/:topicId',
        loadChildren: () => Promise.all(/*! import() | resources-list-resources-list-module */[__webpack_require__.e("common"), __webpack_require__.e("resources-list-resources-list-module")]).then(__webpack_require__.bind(null, /*! ./resources-list/resources-list.module */ "./src/app/pages/home/resources/resources-list/resources-list.module.ts")).then(m => m.ResourcesListPageModule)
    },
    {
        path: 'detail/:resourceId',
        loadChildren: () => __webpack_require__.e(/*! import() | resource-detail-resource-detail-module */ "resource-detail-resource-detail-module").then(__webpack_require__.bind(null, /*! ./resource-detail/resource-detail.module */ "./src/app/pages/home/resources/resource-detail/resource-detail.module.ts")).then(m => m.ResourceDetailPageModule)
    }
];
let ResourcesPageRoutingModule = class ResourcesPageRoutingModule {
};
ResourcesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResourcesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/resources/resources.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/resources/resources.module.ts ***!
  \**********************************************************/
/*! exports provided: ResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageModule", function() { return ResourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-routing.module */ "./src/app/pages/home/resources/resources-routing.module.ts");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources.page */ "./src/app/pages/home/resources/resources.page.ts");
/* harmony import */ var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/page-title/page-title.module */ "./src/app/components/page-title/page-title.module.ts");








let ResourcesPageModule = class ResourcesPageModule {
};
ResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourcesPageRoutingModule"],
            src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"]
        ],
        declarations: [_resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"]]
    })
], ResourcesPageModule);



/***/ }),

/***/ "./src/app/pages/home/resources/resources.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/resources/resources.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topics-title {\n  font-weight: bold;\n  padding: 10px;\n}\n\nion-item {\n  border: 1px solid #eee;\n  margin: 5px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9yZXNvdXJjZXMvcmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcmVzb3VyY2VzL3Jlc291cmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9waWNzLXRpdGxle1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzoxMHB4O1xufVxuXG5pb24taXRlbXtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/resources/resources.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home/resources/resources.page.ts ***!
  \********************************************************/
/*! exports provided: ResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPage", function() { return ResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");



let ResourcesPage = class ResourcesPage {
    constructor(apiSrv) {
        this.apiSrv = apiSrv;
        this.topics = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.topics = [];
            let topics;
            try {
                topics = yield this.apiSrv.getTopicList().toPromise();
            }
            catch (e) {
                topics = [];
            }
            this.topics = [...topics];
        });
    }
};
ResourcesPage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ResourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resources',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resources.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resources.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resources.page.scss */ "./src/app/pages/home/resources/resources.page.scss")).default]
    })
], ResourcesPage);



/***/ })

}]);
//# sourceMappingURL=resources-resources-module-es2015.js.map