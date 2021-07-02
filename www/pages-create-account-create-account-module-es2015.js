(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-account-create-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-account/create-account.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-account/create-account.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\">\n  <div class=\"background\">\n    <img class=\"logo-image\" src=\"assets/logo.png\" alt=\"Wellness\">\n    <div class=\"title\">\n      SERVICIOS PROFECIONALES DE BIENESTAR\n    </div>\n    <div class=\"grid-container\">\n      <form [formGroup]=\"createAccountForm\" (submit)=\"createAccount()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\">\n              <ion-item>\n                <ion-label position=\"stacked\">Código Empresa</ion-label>\n                <ion-input type=\"text\" formControlName=\"companyCode\" clearInput></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\">\n              <ion-button type=\"submit\" expand=\"block\" color=\"medium\">CREAR MI CUENTA</ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\">\n              <ion-button expand=\"block\" color=\"success\" routerLink=\"/login\" routerDirection=\"forward\">INICIAR SESIÓN</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </div>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"wellness\" routerLink=\"/login\" routerDirection=\"forward\">\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<app-footer-login></app-footer-login>\n<!-- <ion-footer>\n  <ion-toolbar color=\"wellness\" class=\"ion-text-center\">\n    <a style=\"color: white;\">¿Necesitas ayuda para ingresar?</a>\n  </ion-toolbar>\n</ion-footer> -->\n");

/***/ }),

/***/ "./src/app/pages/create-account/create-account-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/create-account/create-account-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageRoutingModule", function() { return CreateAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-account.page */ "./src/app/pages/create-account/create-account.page.ts");




const routes = [
    {
        path: '',
        component: _create_account_page__WEBPACK_IMPORTED_MODULE_3__["CreateAccountPage"]
    }
];
let CreateAccountPageRoutingModule = class CreateAccountPageRoutingModule {
};
CreateAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-account/create-account.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-account/create-account.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function() { return CreateAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-account-routing.module */ "./src/app/pages/create-account/create-account-routing.module.ts");
/* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-account.page */ "./src/app/pages/create-account/create-account.page.ts");
/* harmony import */ var src_app_components_footer_login_footer_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/footer-login/footer-login.module */ "./src/app/components/footer-login/footer-login.module.ts");








let CreateAccountPageModule = class CreateAccountPageModule {
};
CreateAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateAccountPageRoutingModule"],
            src_app_components_footer_login_footer_login_module__WEBPACK_IMPORTED_MODULE_7__["FooterLoginModule"]
        ],
        declarations: [_create_account_page__WEBPACK_IMPORTED_MODULE_6__["CreateAccountPage"]]
    })
], CreateAccountPageModule);



/***/ }),

/***/ "./src/app/pages/create-account/create-account.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-account/create-account.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar.header {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.background {\n  background-image: url('background-min.jpg');\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\nimg.logo-image {\n  max-width: 50%;\n}\n\ndiv.title {\n  background: #346699;\n  color: white;\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 15px;\n}\n\ndiv.grid-container {\n  position: absolute;\n  width: 100%;\n  bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWFjY291bnQvY3JlYXRlLWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUVBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtYWNjb3VudC9jcmVhdGUtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhci5oZWFkZXIge1xuICAvLyAtLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2dpbi9iYWNrZ3JvdW5kLW1pbi5qcGcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5pbWcubG9nby1pbWFnZSB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuZGl2LnRpdGxle1xuICBiYWNrZ3JvdW5kOiAjMzQ2Njk5O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5kaXYuZ3JpZC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/create-account/create-account.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-account/create-account.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPage", function() { return CreateAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");






let CreateAccountPage = class CreateAccountPage {
    constructor(alertCtrl, menuCtrl, apiSrv, router, formBuilder) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.apiSrv = apiSrv;
        this.router = router;
        this.formBuilder = formBuilder;
        this.initForm();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    /**
     * Check if a company code exists and redirect to register form
     */
    createAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.createAccountForm.valid) {
                const header = 'Error';
                let message = '';
                const fields = {
                    'companyCode': 'Código Empresa'
                };
                Object.keys(this.createAccountForm.controls).forEach(key => {
                    const formControl = this.createAccountForm.controls[key];
                    if (!formControl.valid) {
                        message += `<p>El campo ${fields[key]} es requerido.</p>`;
                    }
                });
                this.showAlert(header, message, ['Aceptar']);
                return;
            }
            let response;
            const companyCode = this.createAccountForm.get('companyCode').value;
            try {
                response = yield this.apiSrv.checkCompanyCode(companyCode).toPromise();
            }
            catch (e) {
                let message = e;
                if (e && Object.hasOwnProperty.call(e, 'error') && Object.hasOwnProperty.call(e.error, 'message')) {
                    message = e.error.message;
                }
                this.showAlert('Error', message);
                return;
            }
            if (response) {
                console.log(response);
                this.router.navigate(['/register', companyCode]);
            }
        });
    }
    ionViewWillLeave() {
        this.menuCtrl.enable(true);
    }
    /**
     * Initialize form
     */
    initForm() {
        this.createAccountForm = this.formBuilder.group({
            companyCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    /**
     * Show an alert with custom header. message and buttons
     * @param header
     * @param message
     * @param buttons
     */
    showAlert(header, message, buttons = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (buttons.length <= 0)
                buttons = ['Aceptar'];
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons
            });
            return yield alert.present();
        });
    }
};
CreateAccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CreateAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-account/create-account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-account.page.scss */ "./src/app/pages/create-account/create-account.page.scss")).default]
    })
], CreateAccountPage);



/***/ })

}]);
//# sourceMappingURL=pages-create-account-create-account-module-es2015.js.map