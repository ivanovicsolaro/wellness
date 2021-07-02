(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-detail-new-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/news/new-detail/new-detail.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/news/new-detail/new-detail.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeNewsNewDetailNewDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"wellness\">\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <ion-back-button defaultHref=\"tablinks/news\"></ion-back-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row *ngIf=\"isLoading; else loaded\">\n      <ion-col class=\"ion-text-center ion-padding\">\n        <ion-spinner></ion-spinner>\n      </ion-col>\n    </ion-row>\n    <ng-template #loaded>\n      <ion-row>\n        <ion-col class=\"ion-text-center grid-title\">\n          <ion-text color=\"wellness\">{{ com?.title }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-padding\">\n          <div [innerHtml]=\"com.content\"></div>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/news/new-detail/new-detail-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/home/news/new-detail/new-detail-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: NewDetailPageRoutingModule */

    /***/
    function srcAppPagesHomeNewsNewDetailNewDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDetailPageRoutingModule", function () {
        return NewDetailPageRoutingModule;
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


      var _new_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-detail.page */
      "./src/app/pages/home/news/new-detail/new-detail.page.ts");

      var routes = [{
        path: '',
        component: _new_detail_page__WEBPACK_IMPORTED_MODULE_3__["NewDetailPage"]
      }];

      var NewDetailPageRoutingModule = function NewDetailPageRoutingModule() {
        _classCallCheck(this, NewDetailPageRoutingModule);
      };

      NewDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/news/new-detail/new-detail.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/home/news/new-detail/new-detail.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NewDetailPageModule */

    /***/
    function srcAppPagesHomeNewsNewDetailNewDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDetailPageModule", function () {
        return NewDetailPageModule;
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


      var _new_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-detail-routing.module */
      "./src/app/pages/home/news/new-detail/new-detail-routing.module.ts");
      /* harmony import */


      var _new_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-detail.page */
      "./src/app/pages/home/news/new-detail/new-detail.page.ts");
      /* harmony import */


      var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/page-title/page-title.module */
      "./src/app/components/page-title/page-title.module.ts");

      var NewDetailPageModule = function NewDetailPageModule() {
        _classCallCheck(this, NewDetailPageModule);
      };

      NewDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewDetailPageRoutingModule"], src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"]],
        declarations: [_new_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewDetailPage"]]
      })], NewDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/news/new-detail/new-detail.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/home/news/new-detail/new-detail.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeNewsNewDetailNewDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbmV3cy9uZXctZGV0YWlsL25ldy1kZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/news/new-detail/new-detail.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/home/news/new-detail/new-detail.page.ts ***!
      \***************************************************************/

    /*! exports provided: NewDetailPage */

    /***/
    function srcAppPagesHomeNewsNewDetailNewDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDetailPage", function () {
        return NewDetailPage;
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


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "./src/app/services/api/api.service.ts");

      var NewDetailPage = /*#__PURE__*/function () {
        function NewDetailPage(route, apiSrv) {
          _classCallCheck(this, NewDetailPage);

          this.route = route;
          this.apiSrv = apiSrv;
          this.com = {};
          this.isLoading = true;
        }

        _createClass(NewDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              _this.comId = +paramMap.get('id');

              _this.loadData();
            });
          }
          /**
           * Load data detail of communication
           */

        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var com;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.prev = 1;
                      _context.next = 4;
                      return this.apiSrv.getCommunicationDetail(this.comId).toPromise();

                    case 4:
                      com = _context.sent;
                      _context.next = 11;
                      break;

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](1);
                      console.error(_context.t0);
                      com = null;

                    case 11:
                      if (com) {
                        this.com = Object.assign({}, com);
                      }

                      this.isLoading = false;

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 7]]);
            }));
          }
        }]);

        return NewDetailPage;
      }();

      NewDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      NewDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/news/new-detail/new-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new-detail.page.scss */
        "./src/app/pages/home/news/new-detail/new-detail.page.scss"))["default"]]
      })], NewDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-detail-new-detail-module-es5.js.map