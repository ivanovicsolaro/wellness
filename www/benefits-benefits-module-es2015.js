(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["benefits-benefits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/benefits.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/benefits.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"wellness\">\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-text-center grid-title\">\n        <ion-text color=\"wellness\">Programa de Asistencia al Empleado <br> Áreas de Consulta</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list>\n          <ion-item lines=\"full\" *ngIf=\"isLoading; else loaded\">\n            <ion-label class=\"ion-text-center\">\n              <ion-spinner></ion-spinner>\n            </ion-label>\n          </ion-item>\n          <ng-template #loaded>\n            <ion-item lines=\"full\" *ngIf=\"benefits.length <= 0\">\n              <ion-label class=\"ion-text-center\">\n                No hay beneficios registrados para la empresa.\n              </ion-label>\n            </ion-item>\n            <app-benefit-item *ngFor=\"let benefit of benefits; let i = index\" [benefit]=\"benefit\" [index]=\"i\" (emitBenefit)=\"actionBenefit($event)\"></app-benefit-item>\n          </ng-template>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines=\"none\" button (click)=\"sendBenefit(benefit)\">\n  <ion-label class=\"ion-no-margin\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-no-padding ion-justify-content-center ion-align-items-center\"> \n        <ng-container *ngIf=\"index % 2; else odd\">\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-img [src]=\"benefit.img\"></ion-img>\n          </ion-col>\n          <ion-col size=\"8\">\n            <h3 class=\"benefit-name\"><ion-icon name=\"caret-forward\"></ion-icon>{{ benefit.name }}</h3>\n          </ion-col>\n        </ng-container>\n        <ng-template #odd>\n          <ion-col size=\"8\" class=\"ion-no-padding\">\n            <h3 class=\"benefit-name\"><ion-icon name=\"caret-forward\"></ion-icon>{{ benefit.name }}</h3> \n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-img [src]=\"benefit.img\"></ion-img>\n          </ion-col>\n        </ng-template>\n      </ion-row>\n    </ion-grid>\n  </ion-label>\n</ion-item>");

/***/ }),

/***/ "./src/app/pages/home/benefits/benefits-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/benefits/benefits-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BenefitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsPageRoutingModule", function() { return BenefitsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _benefits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benefits.page */ "./src/app/pages/home/benefits/benefits.page.ts");




const routes = [
    {
        path: '',
        component: _benefits_page__WEBPACK_IMPORTED_MODULE_3__["BenefitsPage"]
    },
    {
        path: 'detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | benefit-detail-benefit-detail-module */ "benefit-detail-benefit-detail-module").then(__webpack_require__.bind(null, /*! ./benefit-detail/benefit-detail.module */ "./src/app/pages/home/benefits/benefit-detail/benefit-detail.module.ts")).then(m => m.BenefitDetailPageModule)
    }
];
let BenefitsPageRoutingModule = class BenefitsPageRoutingModule {
};
BenefitsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BenefitsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/benefits/benefits.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home/benefits/benefits.module.ts ***!
  \********************************************************/
/*! exports provided: BenefitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsPageModule", function() { return BenefitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _benefits_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./benefits-routing.module */ "./src/app/pages/home/benefits/benefits-routing.module.ts");
/* harmony import */ var _benefits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./benefits.page */ "./src/app/pages/home/benefits/benefits.page.ts");
/* harmony import */ var _components_benefit_item_benefit_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/benefit-item/benefit-item.module */ "./src/app/pages/home/benefits/components/benefit-item/benefit-item.module.ts");
/* harmony import */ var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/page-title/page-title.module */ "./src/app/components/page-title/page-title.module.ts");









let BenefitsPageModule = class BenefitsPageModule {
};
BenefitsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _benefits_routing_module__WEBPACK_IMPORTED_MODULE_5__["BenefitsPageRoutingModule"],
            _components_benefit_item_benefit_item_module__WEBPACK_IMPORTED_MODULE_7__["BenefitItemModule"],
            src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_8__["PageTitleModule"]
        ],
        declarations: [_benefits_page__WEBPACK_IMPORTED_MODULE_6__["BenefitsPage"]]
    })
], BenefitsPageModule);



/***/ }),

/***/ "./src/app/pages/home/benefits/benefits.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/home/benefits/benefits.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvYmVuZWZpdHMvYmVuZWZpdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/benefits/benefits.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/home/benefits/benefits.page.ts ***!
  \******************************************************/
/*! exports provided: BenefitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsPage", function() { return BenefitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");




let BenefitsPage = class BenefitsPage {
    constructor(apiSrv, router) {
        this.apiSrv = apiSrv;
        this.router = router;
        this.isLoading = true;
        this.benefits = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadData();
        });
    }
    /**
     * Load data for view
     */
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.benefits = [];
            let response;
            try {
                response = yield this.apiSrv.getCompanyList().toPromise();
            }
            catch (e) {
                response = null;
            }
            if (response) {
                this.benefits = Object.keys(response.benefits).map(k => {
                    const img = `assets/benefits/${response.benefits[k].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.png`;
                    return { id: +k, name: response.benefits[k], img };
                }).filter(benefit => {
                    const found = response.company.benefits.find(b => b.name === benefit.name);
                    return found ? true : false;
                });
            }
            this.isLoading = false;
        });
    }
    /**
     * Action to every benefir
     * @param benefit
     */
    actionBenefit(benefit) {
        console.log(benefit);
        this.router.navigate(['/tablinks/benefits/detail', benefit.id]);
    }
};
BenefitsPage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BenefitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benefits',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./benefits.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/benefits.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./benefits.page.scss */ "./src/app/pages/home/benefits/benefits.page.scss")).default]
    })
], BenefitsPage);



/***/ }),

/***/ "./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".benefit-name {\n  text-align: left;\n  font-size: 1.2em;\n  font-weight: bold;\n  color: var(--ion-color-wellness);\n}\n\nion-item {\n  border: 1px solid #eee;\n  margin: 5px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9iZW5lZml0cy9jb21wb25lbnRzL2JlbmVmaXQtaXRlbS9iZW5lZml0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvYmVuZWZpdHMvY29tcG9uZW50cy9iZW5lZml0LWl0ZW0vYmVuZWZpdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlbmVmaXQtbmFtZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdlbGxuZXNzKTtcbn1cblxuaW9uLWl0ZW17XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BenefitItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitItemComponent", function() { return BenefitItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BenefitItemComponent = class BenefitItemComponent {
    constructor() {
        this.emitBenefit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    /**
     * Send benefit to parent
     * @param benefit
     */
    sendBenefit(benefit) {
        this.emitBenefit.emit(benefit);
    }
};
BenefitItemComponent.ctorParameters = () => [];
BenefitItemComponent.propDecorators = {
    benefit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    emitBenefit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
BenefitItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benefit-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./benefit-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./benefit-item.component.scss */ "./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.scss")).default]
    })
], BenefitItemComponent);



/***/ }),

/***/ "./src/app/pages/home/benefits/components/benefit-item/benefit-item.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/home/benefits/components/benefit-item/benefit-item.module.ts ***!
  \************************************************************************************/
/*! exports provided: BenefitItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitItemModule", function() { return BenefitItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _benefit_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benefit-item.component */ "./src/app/pages/home/benefits/components/benefit-item/benefit-item.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let BenefitItemModule = class BenefitItemModule {
};
BenefitItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_benefit_item_component__WEBPACK_IMPORTED_MODULE_3__["BenefitItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [_benefit_item_component__WEBPACK_IMPORTED_MODULE_3__["BenefitItemComponent"]]
    })
], BenefitItemModule);



/***/ })

}]);
//# sourceMappingURL=benefits-benefits-module-es2015.js.map