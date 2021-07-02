(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen=\"true\">\n  <div class=\"background\">\n    <img class=\"logo-image\" src=\"assets/logo.png\" alt=\"Wellness\">\n    <div class=\"title\">\n      SERVICIOS PROFESIONALES DE BIENESTAR\n    </div>\n    <div class=\"grid-container\">\n      <form [formGroup]=\"loginForm\" (submit)=\"login()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\">\n              <ion-item>\n                <!-- <ion-label position=\"fixed\">Usuario</ion-label> -->\n                <ion-input type=\"text\" placeholder=\"Usuario\" formControlName=\"username\" clearInput></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\">\n              <ion-item>\n                <!-- <ion-label position=\"fixed\">Contraseña</ion-label> -->\n                <ion-input type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\" clearInput></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\">\n              <ion-button type=\"submit\" expand=\"block\" color=\"success\">INGRESAR</ion-button>\n            </ion-col>\n            <ion-col size=\"10\" offset=\"1\">\n              <ion-button expand=\"block\" color=\"wellness\" routerLink=\"/create-account\" routerDirection=\"forward\">CREAR CUENTA</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<app-footer-login></app-footer-login>\n<!-- <ion-footer>\n  <ion-toolbar color=\"wellness\" class=\"ion-text-center\">\n    <a style=\"color: white;\">¿Necesitas ayuda para ingresar?</a>\n  </ion-toolbar>\n</ion-footer> -->";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");
      /* harmony import */


      var src_app_components_footer_login_footer_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/footer-login/footer-login.module */
      "./src/app/components/footer-login/footer-login.module.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], src_app_components_footer_login_footer_login_module__WEBPACK_IMPORTED_MODULE_7__["FooterLoginModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar.header {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.background {\n  background-image: url('background-min.jpg');\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\nimg.logo-image {\n  max-width: 50%;\n}\n\ndiv.title {\n  background: #346699;\n  color: white;\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 15px;\n}\n\ndiv.grid-container {\n  position: absolute;\n  width: 100%;\n  bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUVBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhci5oZWFkZXIge1xuICAvLyAtLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2dpbi9iYWNrZ3JvdW5kLW1pbi5qcGcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5pbWcubG9nby1pbWFnZSB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuZGl2LnRpdGxle1xuICBiYWNrZ3JvdW5kOiAjMzQ2Njk5O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5kaXYuZ3JpZC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMTAlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "./src/app/services/api/api.service.ts");
      /* harmony import */


      var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/global/global.service */
      "./src/app/services/global/global.service.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage;

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(menuCtrl, alertCtrl, formBuilder, globalSrv, navCtrl, router, apiSrv) {
          _classCallCheck(this, LoginPage);

          this.menuCtrl = menuCtrl;
          this.alertCtrl = alertCtrl;
          this.formBuilder = formBuilder;
          this.globalSrv = globalSrv;
          this.navCtrl = navCtrl;
          this.router = router;
          this.apiSrv = apiSrv;
          this.initForm();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
          /**
           * Logs an user in the app
           */

        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var message, alert, value, loginResponse, _alert;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.loginForm.valid) {
                        _context.next = 8;
                        break;
                      }

                      message = this.validateForm(); // console.log(message);

                      _context.next = 4;
                      return this.alertCtrl.create({
                        header: 'Error',
                        message: message,
                        buttons: ['Aceptar']
                      });

                    case 4:
                      alert = _context.sent;
                      _context.next = 7;
                      return alert.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                      this.globalSrv.showLoading();
                      value = {
                        email: this.loginForm.value.username,
                        password: this.loginForm.value.password
                      };
                      console.log(value);
                      _context.prev = 11;
                      _context.next = 14;
                      return this.apiSrv.login(value).toPromise();

                    case 14:
                      loginResponse = _context.sent;
                      _context.next = 21;
                      break;

                    case 17:
                      _context.prev = 17;
                      _context.t0 = _context["catch"](11);
                      console.error(_context.t0);
                      loginResponse = null;

                    case 21:
                      if (loginResponse) {
                        _context.next = 30;
                        break;
                      }

                      this.globalSrv.hideLoading();
                      _context.next = 25;
                      return this.alertCtrl.create({
                        header: 'Error',
                        message: 'Error iniciando sesión',
                        buttons: ['Aceptar']
                      });

                    case 25:
                      _alert = _context.sent;
                      _context.next = 28;
                      return _alert.present();

                    case 28:
                      return _context.abrupt("return", _context.sent);

                    case 30:
                      _context.next = 32;
                      return Storage.set({
                        key: 'token',
                        value: loginResponse.token
                      });

                    case 32:
                      _context.next = 34;
                      return Storage.set({
                        key: 'user',
                        value: JSON.stringify(loginResponse.user)
                      });

                    case 34:
                      this.menuCtrl.enable(true);
                      this.globalSrv.hideLoading();
                      this.navCtrl.setDirection('root');
                      this.router.navigate(['/']);

                    case 38:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[11, 17]]);
            }));
          }
          /**
           * Validate login form
           */

        }, {
          key: "validateForm",
          value: function validateForm() {
            var _this = this;

            var message = '';
            var fields = {
              username: 'Usuario',
              password: 'Contraseña'
            };
            Object.keys(this.loginForm.controls).forEach(function (control) {
              if (_this.loginForm.controls[control].invalid) {
                message += "<p>Campo ".concat(fields[control], " es requerido.</p>");
              }
            });
            return message;
          }
          /**
           * Init login form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.loginForm = this.formBuilder.group({
              username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map