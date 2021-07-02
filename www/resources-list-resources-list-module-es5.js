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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-list-resources-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resources-list/resources-list.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resources-list/resources-list.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeResourcesResourcesListResourcesListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tablinks/resources\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Recursos Por Tema</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"loadData()\">\n        <ion-icon name=\"sync\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-text-center grid-title\">\n        <ion-text color=\"wellness\">Tema: {{ topic?.name }}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-padding\" *ngIf=\"isLoading; else loaded\">\n        <ion-spinner></ion-spinner>\n      </ion-col>\n      <ng-template #loaded>\n        <ion-col size=\"12\">\n          <ion-list>\n            <ion-item lines=\"full\" *ngIf=\"resources.length <= 0\">\n              <ion-label class=\"ion-text-center\">\n                <ion-text color=\"wellness\">No hay registros.</ion-text>\n              </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" *ngFor=\"let resource of resources\" detail (click)=\"detail(resource)\" color=\"wellness\">\n              <ion-label>\n                <p class=\"type\"><strong>{{ resource.type.name }}</strong></p>\n                <p class=\"name\">{{ resource.name }}</p>\n              </ion-label>\n              <ion-icon [name]=\"resource.icon\" slot=\"start\"></ion-icon>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ng-template>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resources-list/resources-list-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resources-list/resources-list-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ResourcesListPageRoutingModule */

    /***/
    function srcAppPagesHomeResourcesResourcesListResourcesListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourcesListPageRoutingModule", function () {
        return ResourcesListPageRoutingModule;
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


      var _resources_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resources-list.page */
      "./src/app/pages/home/resources/resources-list/resources-list.page.ts");

      var routes = [{
        path: '',
        component: _resources_list_page__WEBPACK_IMPORTED_MODULE_3__["ResourcesListPage"]
      }];

      var ResourcesListPageRoutingModule = function ResourcesListPageRoutingModule() {
        _classCallCheck(this, ResourcesListPageRoutingModule);
      };

      ResourcesListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResourcesListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resources-list/resources-list.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/home/resources/resources-list/resources-list.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ResourcesListPageModule */

    /***/
    function srcAppPagesHomeResourcesResourcesListResourcesListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourcesListPageModule", function () {
        return ResourcesListPageModule;
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


      var _resources_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resources-list-routing.module */
      "./src/app/pages/home/resources/resources-list/resources-list-routing.module.ts");
      /* harmony import */


      var _resources_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resources-list.page */
      "./src/app/pages/home/resources/resources-list/resources-list.page.ts");

      var ResourcesListPageModule = function ResourcesListPageModule() {
        _classCallCheck(this, ResourcesListPageModule);
      };

      ResourcesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resources_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourcesListPageRoutingModule"]],
        declarations: [_resources_list_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesListPage"]]
      })], ResourcesListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resources-list/resources-list.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/home/resources/resources-list/resources-list.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeResourcesResourcesListResourcesListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  margin: 10px;\n}\n\nion-icon {\n  color: #99c566;\n}\n\np.type {\n  color: #99c566 !important;\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9yZXNvdXJjZXMvcmVzb3VyY2VzLWxpc3QvcmVzb3VyY2VzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9yZXNvdXJjZXMvcmVzb3VyY2VzLWxpc3QvcmVzb3VyY2VzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gIG1hcmdpbjogMTBweDtcbn1cblxuaW9uLWljb257XG4gIGNvbG9yOiAjOTljNTY2O1xufVxuXG5wLnR5cGUge1xuICBjb2xvcjogIzk5YzU2NiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6MS4xZW07XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resources-list/resources-list.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/home/resources/resources-list/resources-list.page.ts ***!
      \****************************************************************************/

    /*! exports provided: ResourcesListPage */

    /***/
    function srcAppPagesHomeResourcesResourcesListResourcesListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourcesListPage", function () {
        return ResourcesListPage;
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
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "./src/app/services/api/api.service.ts");
      /* harmony import */


      var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/global/global.service */
      "./src/app/services/global/global.service.ts");

      var ResourcesListPage = /*#__PURE__*/function () {
        function ResourcesListPage(route, router, navCtrl, apiSrv, globalSrv) {
          _classCallCheck(this, ResourcesListPage);

          this.route = route;
          this.router = router;
          this.navCtrl = navCtrl;
          this.apiSrv = apiSrv;
          this.globalSrv = globalSrv;
          this.resources = [];
          this.topic = {};
          this.isLoading = true;
          this.icons = {
            'Enlace': 'link',
            'Libro': 'book',
            'Nota': 'clipboard',
            'Video': 'videocam',
            'Audio': 'musical-note'
          };
        }

        _createClass(ResourcesListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('topicId')) {
                _this.navCtrl.setDirection('root');

                _this.router.navigate(['/tablinks/resources']);

                return;
              }

              _this.topicId = paramMap.get('topicId');

              _this.loadData();
            });
          }
          /**
           * Load data
           */

        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var topic, resources;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // this.globalSrv.showLoading();
                      this.isLoading = true;
                      this.resources = [];
                      _context.prev = 2;
                      _context.next = 5;
                      return this.apiSrv.getTopic(this.topicId).toPromise();

                    case 5:
                      topic = _context.sent;
                      _context.next = 12;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](2);
                      console.error(_context.t0);
                      topic = null;

                    case 12:
                      if (topic) {
                        _context.next = 16;
                        break;
                      }

                      this.globalSrv.hideLoading();
                      this.globalSrv.showAlert('Error', 'No se puede obtener el tema ni recursos.', ['Aceptar']);
                      return _context.abrupt("return");

                    case 16:
                      this.topic = Object.assign({}, topic);
                      this.resources = Object.hasOwnProperty.call(this.topic, 'resources') ? _toConsumableArray(this.topic.resources) : [];
                      this.resources = this.resources.map(function (r) {
                        r['icon'] = Object.hasOwnProperty.call(_this2.icons, r.type.name) ? _this2.icons[r.type.name] : 'help';
                        return r;
                      }); // this.globalSrv.hideLoading();

                      this.isLoading = false;

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 8]]);
            }));
          }
        }, {
          key: "detail",
          value: function detail(resource) {
            console.log(resource);
            this.router.navigate(['tablinks/resources/detail', resource.id]);
          }
        }]);

        return ResourcesListPage;
      }();

      ResourcesListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }];
      };

      ResourcesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resources-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./resources-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resources-list/resources-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./resources-list.page.scss */
        "./src/app/pages/home/resources/resources-list/resources-list.page.scss"))["default"]]
      })], ResourcesListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=resources-list-resources-list-module-es5.js.map