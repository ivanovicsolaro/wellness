(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/news/news.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/news/news.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"wellness\">\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n    <!-- <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"loadData()\">\n        <ion-icon name=\"sync\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-text-center grid-title\">\n        <ion-text color=\"wellness\">Novedades</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item lines=\"full\" *ngIf=\"isLoading; else loaded\">\n            <ion-label class=\"ion-text-center\">\n              <ion-spinner></ion-spinner>\n            </ion-label>\n          </ion-item>\n          <ng-template #loaded>\n            <ion-item lines=\"full\" *ngIf=\"communications.length <= 0\">\n              <ion-label class=\"ion-text-center\">\n                No hay novedades disponibles.\n              </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\" *ngFor=\"let com of communications\" detail (click)=\"goToDetail(com)\">\n              <ion-label>\n                <h3>{{ com.title }}</h3>\n                <p>{{ com.user.name }}</p>\n              </ion-label>\n            </ion-item>\n          </ng-template>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/news/news-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/home/news/news-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: NewsPageRoutingModule */

    /***/
    function srcAppPagesHomeNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function () {
        return NewsPageRoutingModule;
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


      var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./news.page */
      "./src/app/pages/home/news/news.page.ts");

      var routes = [{
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"]
      }, {
        path: 'detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | new-detail-new-detail-module */
          "new-detail-new-detail-module").then(__webpack_require__.bind(null,
          /*! ./new-detail/new-detail.module */
          "./src/app/pages/home/news/new-detail/new-detail.module.ts")).then(function (m) {
            return m.NewDetailPageModule;
          });
        }
      }];

      var NewsPageRoutingModule = function NewsPageRoutingModule() {
        _classCallCheck(this, NewsPageRoutingModule);
      };

      NewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/news/news.module.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/home/news/news.module.ts ***!
      \************************************************/

    /*! exports provided: NewsPageModule */

    /***/
    function srcAppPagesHomeNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
        return NewsPageModule;
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


      var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./news-routing.module */
      "./src/app/pages/home/news/news-routing.module.ts");
      /* harmony import */


      var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./news.page */
      "./src/app/pages/home/news/news.page.ts");
      /* harmony import */


      var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/page-title/page-title.module */
      "./src/app/components/page-title/page-title.module.ts");

      var NewsPageModule = function NewsPageModule() {
        _classCallCheck(this, NewsPageModule);
      };

      NewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"], src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"]],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
      })], NewsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/news/news.page.scss":
    /*!************************************************!*\
      !*** ./src/app/pages/home/news/news.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/home/news/news.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/news/news.page.ts ***!
      \**********************************************/

    /*! exports provided: NewsPage */

    /***/
    function srcAppPagesHomeNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
        return NewsPage;
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

      var NewsPage = /*#__PURE__*/function () {
        function NewsPage(apiSrv, router) {
          _classCallCheck(this, NewsPage);

          this.apiSrv = apiSrv;
          this.router = router;
          this.isLoading = true;
          this.communications = [];
        }

        _createClass(NewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.loadData();
          }
          /**
           * Load communications
           */

        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var communications;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      this.communications = [];
                      communications = [];
                      _context.prev = 3;
                      _context.next = 6;
                      return this.apiSrv.getCommunications().toPromise();

                    case 6:
                      communications = _context.sent;
                      _context.next = 13;
                      break;

                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context["catch"](3);
                      console.error(_context.t0);
                      communications = [];

                    case 13:
                      console.log(communications);
                      this.communications = _toConsumableArray(communications);
                      this.isLoading = false;

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 9]]);
            }));
          }
        }, {
          key: "goToDetail",
          value: function goToDetail(com) {
            console.log(com);
            this.router.navigate(['/tablinks/news/detail', com.id]);
          }
        }]);

        return NewsPage;
      }();

      NewsPage.ctorParameters = function () {
        return [{
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./news.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/news/news.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./news.page.scss */
        "./src/app/pages/home/news/news.page.scss"))["default"]]
      })], NewsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=news-news-module-es5.js.map