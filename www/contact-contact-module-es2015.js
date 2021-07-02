(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/contact.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/contact.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content slot=\"fixed\">\n  <ion-card>\n    <ion-card-header color=\"wellness\">\n      <ion-card-title>Contáctanos</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row >\n          <ion-col size=\"12\">\n            <ion-img class=\"logo-image\" src=\"assets/logo.png\" [style]=\"logoStyle\" style=\"margin: 0 auto;\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text color=\"wellness\">\n              <p class=\"contact-text\">\n                Hola! Puedes conectar al Programa a través de las siguientes vías. Nuestros profesionales te ayudarán a resolver las situaciones de la vida cotidiana.\n              </p>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"5\" offset=\"1\">\n            <p class=\"ion-text-center\"><b>Whatsapp</b></p>\n          </ion-col>\n          <ion-col size=\"5\">\n            <p class=\"ion-text-center\"><b>Envíanos tu consulta</b></p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"buttons\">\n          <ion-col size=\"5\" offset=\"1\">\n            <ion-button expand=\"block\" color=\"success\" (click)=\"showButtonAlert('whatsapp')\">\n              <ion-icon name=\"logo-whatsapp\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-button expand=\"block\" color=\"medium\" (click)=\"showButtonAlert('showForm')\">\n              <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"5\" offset=\"1\">\n            <p class=\"ion-text-center\"><b>Número Gratuito</b></p>\n            <p class=\"ion-text-center\"><b>0800 266 5243</b></p>\n          </ion-col>\n          <ion-col size=\"5\">\n            <p class=\"ion-text-center\"><b>Teléfono Alternativo</b></p>\n            <p class=\"ion-text-center\"><b>+54 11 3988 4055</b></p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"buttons ion-margin-top\">\n          <ion-col size=\"5\" offset=\"1\">\n            <ion-button expand=\"block\" color=\"medium\" (click)=\"showButtonAlert('callNumberOne')\">\n              <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-button expand=\"block\" color=\"medium\" (click)=\"showButtonAlert('callNumberTwo')\">\n              <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button expand=\"full\" color=\"wellness\" (click)=\"showOutsideModal()\">\n              Estoy fuera de Argentina\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <!-- <div *ngIf=\"method==null\" style=\"padding: 10px; text-align: justify;\">\n    <div style=\"background: #6096c4;margin: 15px;padding: 15px;border-radius: 5px;color: white;\">\n      <span> Hola! Puedes conectar al Programa a través de las siguientes vías. Nuestros profesionales te ayudarán a resolver las situaciones de la vida cotidiana.</span>\n    </div>\n    <div style=\"width: 100%;height: 15px; clear:both\"></div>\n    <div class=\"block_item\" (click)=\"trigger('wsp')\">\n      <span class=\"title\">WhatsApp</span>\n      <ion-icon name=\"logo-whatsapp\"></ion-icon>\n    </div>\n    <div class=\"block_item\" (click)=\"trigger('form')\">\n      <span class=\"title\">Envíanos tu consulta</span>\n      <ion-icon name=\"mail\"></ion-icon>\n    </div>\n\n    <div class=\"block_item tel\" (click)=\"trigger('call')\">\n      <span class=\"title\"> Número Gratuito <br>\n        <font>\n          0800 266 5243</font>\n      </span>\n      <ion-icon name=\"call\"></ion-icon>\n    </div>\n    <div class=\"block_item tel\" (click)=\"trigger('call2')\">\n      <span class=\"title\"> Teléfono alternativo <br>\n        <font>\n          +54 11 3988 4055</font>\n      </span>\n      <ion-icon name=\"call\"></ion-icon>\n    </div>\n\n    <div class=\"block_separator\" (click)=\"openModal()\">\n      <button class=\"message_send\" (click)=\"openModal()\">Estoy fuera de Argentina</button>\n    </div>\n  </div> -->\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-title>Formulario de Contacto</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"contactForm\" (submit)=\"send()\">\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label class=\"ion-text-center\">\n          <ion-text color=\"wellness\">\n            <strong>Te responderemos a tu correo electrónico.</strong>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n      </ion-item>\n      <app-ion-item-error *ngIf=\"errors.name\" [error]=\"errors.name\"></app-ion-item-error>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Apellido</ion-label>\n        <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n      </ion-item>\n      <app-ion-item-error *ngIf=\"errors.lastName\" [error]=\"errors.lastName\"></app-ion-item-error>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Teléfono</ion-label>\n        <ion-input type=\"tel\" formControlName=\"phoneNumber\"></ion-input>\n      </ion-item>\n      <app-ion-item-error *ngIf=\"errors.phoneNumber\" [error]=\"errors.phoneNumber\"></app-ion-item-error>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Tipo de Consulta</ion-label>\n        <ion-select formControlName=\"subject\" interface=\"action-sheet\" cancelText=\"Cancelar\">\n          <ion-select-option *ngFor=\"let type of consultationTypes\" [value]=\"type\">\n            {{ type }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-ion-item-error *ngIf=\"errors.subject\" [error]=\"errors.subject\"></app-ion-item-error>\n      <ion-item lines=\"full\">\n        <ion-textarea formControlName=\"message\" placeholder=\"Mensaje\"></ion-textarea>\n      </ion-item>\n      <app-ion-item-error *ngIf=\"errors.message\" [error]=\"errors.message\"></app-ion-item-error>\n    </ion-list>\n    <ion-button type=\"submit\" expand=\"block\" color=\"wellness\">\n      Enviar\n      <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button type=\"submit\" expand=\"block\" color=\"dark\" (click)=\"closeModal()\">\n      Cerrar\n      <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-title>Información de Contacto</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item lines=\"full\" *ngFor=\"let country of countries\" button (click)=\"callNumber(country)\">\n      <ion-label>\n        <h3>{{ country.name }}</h3>\n        <p><strong>{{ country.phoneNumber }}</strong></p>\n      </ion-label>\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/contact/contact-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/contact/contact-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/home/contact/contact.page.ts");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/contact/contact.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/home/contact/contact.module.ts ***!
  \******************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/pages/home/contact/contact-routing.module.ts");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/home/contact/contact.page.ts");
/* harmony import */ var _modals_contact_form_modal_contact_form_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/contact-form-modal/contact-form-modal.module */ "./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.module.ts");
/* harmony import */ var _modals_outside_argentina_modal_outside_argentina_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/outside-argentina-modal/outside-argentina-modal.module */ "./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.module.ts");
/* harmony import */ var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/page-title/page-title.module */ "./src/app/components/page-title/page-title.module.ts");










let ContactPageModule = class ContactPageModule {
};
ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"],
            _modals_contact_form_modal_contact_form_modal_module__WEBPACK_IMPORTED_MODULE_7__["ContactFormModalModule"],
            _modals_outside_argentina_modal_outside_argentina_modal_module__WEBPACK_IMPORTED_MODULE_8__["OutsideArgentinaModalModule"],
            src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_9__["PageTitleModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/pages/home/contact/contact.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/contact/contact.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-text {\n  margin-top: 10px;\n  font-weight: bold;\n  font-size: 1.2em;\n  text-align: justify;\n}\n\n.logo-image {\n  margin: 0 auto;\n}\n\n.buttons ion-button {\n  height: 50px;\n}\n\n.buttons p {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC10ZXh0e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmxvZ28taW1hZ2V7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJ1dHRvbnMge1xuICBpb24tYnV0dG9ue1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICBwe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/contact/contact.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/contact/contact.page.ts ***!
  \****************************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modals_contact_form_modal_contact_form_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/contact-form-modal/contact-form-modal.component */ "./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.ts");
/* harmony import */ var _modals_outside_argentina_modal_outside_argentina_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/outside-argentina-modal/outside-argentina-modal.component */ "./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.ts");





let ContactPage = class ContactPage {
    constructor(platform, alertCtrl, modalCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.logoStyle = {};
        this.phoneNumberOne = '1139884055';
        this.phoneNumberTwo = '08002665243';
        this.whatsAppContent = {
            phoneNumber: '5491162661987',
            message: 'Hola, me gustaría me ayuden.'
        };
    }
    ngOnInit() {
        this.logoStyle = {
            width: this.platform.width() * 0.5 + 'px',
            height: 'auto'
        };
    }
    /**
     * Shows alert on clicking one of the buttons
     * @param button
     */
    showButtonAlert(button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Antes de Continuar',
                message: '¿Tienes motivos para creer que tu vida está en riesgo?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.showRiskAlert();
                        })
                    },
                    {
                        text: 'No',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            switch (button) {
                                case 'whatsapp':
                                    this.openWhatsapp();
                                    break;
                                case 'showForm':
                                    this.showFormModal();
                                    break;
                                case 'callNumberOne':
                                    this.callNumber(this.phoneNumberOne);
                                    break;
                                case 'callNumberTwo':
                                    this.callNumber(this.phoneNumberTwo);
                                    break;
                                default:
                                    break;
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
    /**
     * Show an alert when a user select thinks is at risk
     */
    showRiskAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Llamar a numero gratuito',
                message: 'Comunícate en forma inmediata al número gratuito del Programa de Asistencia al Empleado. Un profesional calificado te brindará asistencia.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                        }
                    }
                ]
            });
            return yield alert.present();
        });
    }
    /**
     * Show modal with info from outside Argentina
     */
    showOutsideModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_outside_argentina_modal_outside_argentina_modal_component__WEBPACK_IMPORTED_MODULE_4__["OutsideArgentinaModalComponent"]
            });
            return yield modal.present();
        });
    }
    /**
     * Open whatsapp and send message
     */
    openWhatsapp() {
        const url = `https://wa.me/${this.whatsAppContent.phoneNumber}?text=${this.whatsAppContent.message}`;
        window.open(url, "_system");
    }
    /**
     * Show modal with contact form
     */
    showFormModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_contact_form_modal_contact_form_modal_component__WEBPACK_IMPORTED_MODULE_3__["ContactFormModalComponent"]
            });
            modal.onDidDismiss().then(({ data }) => {
                console.log(data);
            });
            return yield modal.present();
        });
    }
    /**
     * Call a phone number
     * @param number
     */
    callNumber(number) {
        window.open(`tel:${number}`, '_system');
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/contact.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.page.scss */ "./src/app/pages/home/contact/contact.page.scss")).default]
    })
], ContactPage);



/***/ }),

/***/ "./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29udGFjdC9tb2RhbHMvY29udGFjdC1mb3JtLW1vZGFsL2NvbnRhY3QtZm9ybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ContactFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormModalComponent", function() { return ContactFormModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/global.service */ "./src/app/services/global/global.service.ts");






let ContactFormModalComponent = class ContactFormModalComponent {
    constructor(modalCtrl, loadingCtrl, globalSrv, apiSrv, formBuilder) {
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.globalSrv = globalSrv;
        this.apiSrv = apiSrv;
        this.formBuilder = formBuilder;
        this.consultationTypes = [
            'Legal',
            'Financiero Contable',
            'Psicología',
            'Nutricional',
            'Maternidad y Lactancia',
            'Informativa',
            'Gerencial'
        ];
        this.errors = {
            name: null,
            lastName: null,
            phoneNumber: null,
            subject: null,
            message: null
        };
        this.initForm();
    }
    ngOnInit() { }
    /**
     * Send message from contact form
     */
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.contactForm);
            Object.keys(this.errors).forEach(key => this.errors[key] = null);
            if (!this.contactForm.valid) {
                Object.keys(this.contactForm.controls).forEach(key => {
                    let control = this.contactForm.controls[key];
                    if (!control.valid) {
                        this.errors[key] = 'Campo es requerido';
                    }
                });
                return;
            }
            const loading = yield this.loadingCtrl.create({
                message: 'Enviando'
            });
            loading.present();
            let contactForm;
            let buttons = [];
            let message = "";
            try {
                contactForm = yield this.apiSrv.sendMessageContactForm(this.contactForm.value).toPromise();
                message = contactForm.message;
            }
            catch (e) {
                console.error(e);
                message = (e && Object.hasOwnProperty.call('message')) ? e.message : 'Error al enviar formulario';
                buttons = [{
                        text: 'Aceptar',
                        handler: () => {
                            this.closeModal();
                        }
                    }];
                contactForm = null;
            }
            yield loading.dismiss();
            if (contactForm) {
                buttons = [{
                        text: 'Aceptar',
                        handler: () => {
                            this.closeModal();
                        }
                    }];
            }
            this.globalSrv.showAlert('Éxito', message, buttons, false);
        });
    }
    /**
     * Close current modal
     * @param data
     */
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    initForm() {
        this.contactForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subject: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
};
ContactFormModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ContactFormModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-form-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-form-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-form-modal.component.scss */ "./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.scss")).default]
    })
], ContactFormModalComponent);



/***/ }),

/***/ "./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContactFormModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormModalModule", function() { return ContactFormModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contact_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form-modal.component */ "./src/app/pages/home/contact/modals/contact-form-modal/contact-form-modal.component.ts");
/* harmony import */ var src_app_components_ion_item_error_ion_item_error_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/ion-item-error/ion-item-error.module */ "./src/app/components/ion-item-error/ion-item-error.module.ts");







let ContactFormModalModule = class ContactFormModalModule {
};
ContactFormModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormModalComponent"]],
        entryComponents: [_contact_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_components_ion_item_error_ion_item_error_module__WEBPACK_IMPORTED_MODULE_6__["IonItemErrorModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ContactFormModalModule);



/***/ }),

/***/ "./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29udGFjdC9tb2RhbHMvb3V0c2lkZS1hcmdlbnRpbmEtbW9kYWwvb3V0c2lkZS1hcmdlbnRpbmEtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: OutsideArgentinaModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideArgentinaModalComponent", function() { return OutsideArgentinaModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let OutsideArgentinaModalComponent = class OutsideArgentinaModalComponent {
    constructor(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        // countries: any = [
        //   { name: 'Uruguay', phoneNumber: '000 4135 9831 68' },
        //   { name: 'Colombia', phoneNumber: '0180 0518 5202' },
        //   { name: 'Chile', phoneNumber: '800 392658' },
        //   { name: 'Perú', phoneNumber: '0 800 76744' },
        //   { name: 'México', phoneNumber: '01800 993 470' }
        // ];
        this.countries = [
            { name: 'Chile', phoneNumber: '800392658' },
            { name: 'Colombia', phoneNumber: '018005185202' },
            { name: 'México', phoneNumber: '018000993470' },
            { name: 'Panamá', phoneNumber: '5078336291' },
            { name: 'Paraguay', phoneNumber: '0098004910004' },
            { name: 'Perú', phoneNumber: '080076741' },
            { name: 'Uruguay', phoneNumber: '0004135983168' },
            { name: 'Venezuela', phoneNumber: '08001362648' }
        ];
    }
    ngOnInit() { }
    /**
     * Show alert to allow user to call the country phone number
     * @param country
     */
    callNumber(country) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `Llamar - ${country.name}`,
                message: `¿Desear realizar llamada al número <b>${country.phoneNumber}</b>?`,
                buttons: [
                    {
                        text: 'Llamar',
                        handler: () => {
                            window.open(`tel:${country.phoneNumber}`, '_system');
                        }
                    },
                    {
                        text: 'Cerrar'
                    }
                ]
            });
            return yield alert.present();
        });
    }
    /**
     * Close current modal
     * @param data
     */
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
};
OutsideArgentinaModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
OutsideArgentinaModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outside-argentina-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outside-argentina-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./outside-argentina-modal.component.scss */ "./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.scss")).default]
    })
], OutsideArgentinaModalComponent);



/***/ }),

/***/ "./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OutsideArgentinaModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideArgentinaModalModule", function() { return OutsideArgentinaModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _outside_argentina_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outside-argentina-modal.component */ "./src/app/pages/home/contact/modals/outside-argentina-modal/outside-argentina-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let OutsideArgentinaModalModule = class OutsideArgentinaModalModule {
};
OutsideArgentinaModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_outside_argentina_modal_component__WEBPACK_IMPORTED_MODULE_3__["OutsideArgentinaModalComponent"]],
        entryComponents: [_outside_argentina_modal_component__WEBPACK_IMPORTED_MODULE_3__["OutsideArgentinaModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], OutsideArgentinaModalModule);



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es2015.js.map