(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeMainMainPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content slot=\"fixed\">\n  <ion-grid class=\"main-page-grid\">\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"action('benefits')\">\n        <ion-img src=\"assets/main/benefits.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"12\" (click)=\"action('resources')\">\n        <ion-img src=\"assets/main/resources.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/main/main-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/home/main/main-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: MainPageRoutingModule */

    /***/
    function srcAppPagesHomeMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function () {
        return MainPageRoutingModule;
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


      var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main.page */
      "./src/app/pages/home/main/main.page.ts");

      var routes = [{
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
      }];

      var MainPageRoutingModule = function MainPageRoutingModule() {
        _classCallCheck(this, MainPageRoutingModule);
      };

      MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MainPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/main/main.module.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/home/main/main.module.ts ***!
      \************************************************/

    /*! exports provided: MainPageModule */

    /***/
    function srcAppPagesHomeMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
        return MainPageModule;
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


      var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./main-routing.module */
      "./src/app/pages/home/main/main-routing.module.ts");
      /* harmony import */


      var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./main.page */
      "./src/app/pages/home/main/main.page.ts");
      /* harmony import */


      var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/page-title/page-title.module */
      "./src/app/components/page-title/page-title.module.ts");

      var MainPageModule = function MainPageModule() {
        _classCallCheck(this, MainPageModule);
      };

      MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"], src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"]],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
      })], MainPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/main/main.page.scss":
    /*!************************************************!*\
      !*** ./src/app/pages/home/main/main.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeMainMainPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main-page-grid {\n  height: 100%;\n}\n.main-page-grid ion-row {\n  height: 100%;\n}\n.main-page-grid ion-row ion-col {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUo7QUFESTtFQUNFLFdBQUE7QUFHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWFpbi9tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2UtZ3JpZHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBpb24tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW9uLWNvbCB7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/main/main.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/main/main.page.ts ***!
      \**********************************************/

    /*! exports provided: MainPage */

    /***/
    function srcAppPagesHomeMainMainPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPage", function () {
        return MainPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var MainPage = /*#__PURE__*/function () {
        function MainPage(alertCtrl, router) {
          _classCallCheck(this, MainPage);

          this.alertCtrl = alertCtrl;
          this.router = router;
        }

        _createClass(MainPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Action that show options to the user
           * @param type
           */

        }, {
          key: "action",
          value: function action(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: '¿Donde desea ir?',
                        message: 'Seleccione la accion que desea realizar.',
                        buttons: [{
                          text: type === 'benefits' ? 'Ir a Sección Programa de asistencia al empleado' : 'Ir a Sección Recursos',
                          handler: function handler() {
                            var route = 'tablinks/' + type;

                            _this.router.navigate([route]);
                          }
                        }, {
                          text: 'Ver video',
                          handler: function handler() {
                            // let videoId = type === 'benefits' ? 472346173 : 375651446;
                            var videoId = type === 'benefits' ? 472346173 : 476598362; // this.router.navigate(['/tablinks/main/video', videoId]);

                            // this.router.navigate(['/tablinks/main/video', videoId]);
                            var queryParams = {
                              type: 'main',
                              videoId: videoId
                            };

                            _this.router.navigate(['/video'], {
                              queryParams: queryParams
                            });
                          }
                        }, {
                          text: 'Cancelar'
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MainPage;
      }();

      MainPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./main.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./main.page.scss */
        "./src/app/pages/home/main/main.page.scss"))["default"]]
      })], MainPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=main-main-module-es5.js.map