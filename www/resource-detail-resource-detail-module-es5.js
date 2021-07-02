(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource-detail-resource-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/link/link.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/link/link.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeResourcesResourceDetailComponentsLinkLinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item lines=\"none\">\n  <ion-label>\n    <p><strong>Enlace:</strong></p>\n    <a [href]=\"resource?.resource_link?.link\" target=\"_system\">{{ resource?.resource_link?.link }}</a>\n  </ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeResourcesResourceDetailComponentsResourceBookResourceBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item lines=\"none\">\n  <ion-label>\n    <p><strong>Enlace Libro:</strong></p>\n    <a [href]=\"resource?.resource_book?.link\" target=\"_system\">{{ resource?.resource_book?.link }}</a>\n  </ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n  <ion-label>\n    <p><strong>Portada:</strong></p>\n    <ion-thumbnail>\n      <ion-img [src]=\"generateBookUrlImage()\"></ion-img>\n    </ion-thumbnail>\n  </ion-label>\n</ion-item>\n<ion-item lines=\"none\" *ngIf=\"resource.resource_book.review\">\n  <ion-label>\n    <p><strong>Reseña:</strong></p>\n    <div class=\"review\" [innerHtml]=\"resource.resource_book.review \"></div>\n  </ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.html":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeResourcesResourceDetailComponentsResourceVideoResourceVideoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item lines=\"none\">\n  <ion-label>\n    <p><strong>Video:</strong></p>\n    <!-- <a [href]=\"resource?.resource_video?.link\" target=\"_system\">{{ resource?.resource_video?.link }}</a> -->\n    <div [innerHtml]=\"sanitizeHtml()\"></div>\n  </ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/resource-detail.page.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/resource-detail.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeResourcesResourceDetailResourceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ resource?.type?.name }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"loadData()\">\n        <ion-icon name=\"sync\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-text-center grid-title\">\n        <ion-text color=\"wellness\">{{ resource.name }}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list class=\"ion-no-padding\">\n          <ion-item lines=\"none\">\n            <ion-label>\n              <p><strong>Descripción:</strong></p>\n              <div class=\"description\" [innerHtml]=\"resource.description\"></div>\n            </ion-label>\n          </ion-item>\n          <ng-container *ngIf=\"resourceType === 'Enlace'\">\n            <app-resource-link [resource]=\"resource\"></app-resource-link>\n          </ng-container>\n          <ng-container *ngIf=\"resourceType === 'Video'\">\n            <app-resource-video [resource]=\"resource\"></app-resource-video>\n          </ng-container>\n          <ng-container *ngIf=\"resourceType === 'Libro'\">\n            <app-resource-book [resource]=\"resource\"></app-resource-book>\n          </ng-container>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/components/link/link.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/components/link/link.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeResourcesResourceDetailComponentsLinkLinkComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcmVzb3VyY2VzL3Jlc291cmNlLWRldGFpbC9jb21wb25lbnRzL2xpbmsvbGluay5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/components/link/link.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/components/link/link.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: LinkComponent */

    /***/
    function srcAppPagesHomeResourcesResourceDetailComponentsLinkLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkComponent", function () {
        return LinkComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LinkComponent = /*#__PURE__*/function () {
        function LinkComponent() {
          _classCallCheck(this, LinkComponent);
        }

        _createClass(LinkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.resource);
          }
        }]);

        return LinkComponent;
      }();

      LinkComponent.ctorParameters = function () {
        return [];
      };

      LinkComponent.propDecorators = {
        resource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      LinkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource-link',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./link.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/link/link.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./link.component.scss */
        "./src/app/pages/home/resources/resource-detail/components/link/link.component.scss"))["default"]]
      })], LinkComponent);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeResourcesResourceDetailComponentsResourceBookResourceBookComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".review {\n  white-space: normal;\n}\n\nion-thumbnail {\n  --size: 40%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9yZXNvdXJjZXMvcmVzb3VyY2UtZGV0YWlsL2NvbXBvbmVudHMvcmVzb3VyY2UtYm9vay9yZXNvdXJjZS1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL3Jlc291cmNlcy9yZXNvdXJjZS1kZXRhaWwvY29tcG9uZW50cy9yZXNvdXJjZS1ib29rL3Jlc291cmNlLWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3e1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsXG59XG5cbmlvbi10aHVtYm5haWx7XG4gIC0tc2l6ZTogNDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ResourceBookComponent */

    /***/
    function srcAppPagesHomeResourcesResourceDetailComponentsResourceBookResourceBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceBookComponent", function () {
        return ResourceBookComponent;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../environments/environment */
      "./src/environments/environment.ts");

      var ResourceBookComponent = /*#__PURE__*/function () {
        function ResourceBookComponent() {
          _classCallCheck(this, ResourceBookComponent);

          this.resource = {};
        }

        _createClass(ResourceBookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "generateBookUrlImage",
          value: function generateBookUrlImage() {
            var imageUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl).concat(this.resource.resource_book.image);
            return imageUrl;
          }
        }]);

        return ResourceBookComponent;
      }();

      ResourceBookComponent.ctorParameters = function () {
        return [];
      };

      ResourceBookComponent.propDecorators = {
        resource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ResourceBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource-book',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./resource-book.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./resource-book.component.scss */
        "./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.scss"))["default"]]
      })], ResourceBookComponent);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/components/resource-detail-components.module.ts":
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/components/resource-detail-components.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ResourceDetailComponentsModule */

    /***/
    function srcAppPagesHomeResourcesResourceDetailComponentsResourceDetailComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceDetailComponentsModule", function () {
        return ResourceDetailComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./link/link.component */
      "./src/app/pages/home/resources/resource-detail/components/link/link.component.ts");
      /* harmony import */


      var _resource_video_resource_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resource-video/resource-video.component */
      "./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.ts");
      /* harmony import */


      var _resource_book_resource_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./resource-book/resource-book.component */
      "./src/app/pages/home/resources/resource-detail/components/resource-book/resource-book.component.ts");

      var ResourceDetailComponentsModule = function ResourceDetailComponentsModule() {
        _classCallCheck(this, ResourceDetailComponentsModule);
      };

      ResourceDetailComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_link_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"], _resource_video_resource_video_component__WEBPACK_IMPORTED_MODULE_6__["ResourceVideoComponent"], _resource_book_resource_book_component__WEBPACK_IMPORTED_MODULE_7__["ResourceBookComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [_link_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"], _resource_video_resource_video_component__WEBPACK_IMPORTED_MODULE_6__["ResourceVideoComponent"], _resource_book_resource_book_component__WEBPACK_IMPORTED_MODULE_7__["ResourceBookComponent"]]
      })], ResourceDetailComponentsModule);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.scss":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeResourcesResourceDetailComponentsResourceVideoResourceVideoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcmVzb3VyY2VzL3Jlc291cmNlLWRldGFpbC9jb21wb25lbnRzL3Jlc291cmNlLXZpZGVvL3Jlc291cmNlLXZpZGVvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.ts":
    /*!************************************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ResourceVideoComponent */

    /***/
    function srcAppPagesHomeResourcesResourceDetailComponentsResourceVideoResourceVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceVideoComponent", function () {
        return ResourceVideoComponent;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var ResourceVideoComponent = /*#__PURE__*/function () {
        function ResourceVideoComponent(domSanitizer) {
          _classCallCheck(this, ResourceVideoComponent);

          this.domSanitizer = domSanitizer;
          this.resource = {};
        }

        _createClass(ResourceVideoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.resource);
          }
        }, {
          key: "sanitizeHtml",
          value: function sanitizeHtml() {
            try {
              // throw "myException";
              return this.domSanitizer.bypassSecurityTrustHtml(this.resource.resource_video.link);
            } catch (e) {
              return "<ion-text color=\"danger\">Error con el iframe.</ion-text>";
            }
          }
        }]);

        return ResourceVideoComponent;
      }();

      ResourceVideoComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      ResourceVideoComponent.propDecorators = {
        resource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ResourceVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./resource-video.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./resource-video.component.scss */
        "./src/app/pages/home/resources/resource-detail/components/resource-video/resource-video.component.scss"))["default"]]
      })], ResourceVideoComponent);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/resource-detail-routing.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/resource-detail-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: ResourceDetailPageRoutingModule */

    /***/
    function srcAppPagesHomeResourcesResourceDetailResourceDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceDetailPageRoutingModule", function () {
        return ResourceDetailPageRoutingModule;
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


      var _resource_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resource-detail.page */
      "./src/app/pages/home/resources/resource-detail/resource-detail.page.ts");

      var routes = [{
        path: '',
        component: _resource_detail_page__WEBPACK_IMPORTED_MODULE_3__["ResourceDetailPage"]
      }];

      var ResourceDetailPageRoutingModule = function ResourceDetailPageRoutingModule() {
        _classCallCheck(this, ResourceDetailPageRoutingModule);
      };

      ResourceDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResourceDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/resource-detail.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/resource-detail.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ResourceDetailPageModule */

    /***/
    function srcAppPagesHomeResourcesResourceDetailResourceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceDetailPageModule", function () {
        return ResourceDetailPageModule;
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


      var _resource_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resource-detail-routing.module */
      "./src/app/pages/home/resources/resource-detail/resource-detail-routing.module.ts");
      /* harmony import */


      var _resource_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resource-detail.page */
      "./src/app/pages/home/resources/resource-detail/resource-detail.page.ts");
      /* harmony import */


      var _components_resource_detail_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/resource-detail-components.module */
      "./src/app/pages/home/resources/resource-detail/components/resource-detail-components.module.ts");

      var ResourceDetailPageModule = function ResourceDetailPageModule() {
        _classCallCheck(this, ResourceDetailPageModule);
      };

      ResourceDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resource_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourceDetailPageRoutingModule"], _components_resource_detail_components_module__WEBPACK_IMPORTED_MODULE_7__["ResourceDetailComponentsModule"]],
        declarations: [_resource_detail_page__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailPage"]]
      })], ResourceDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/resource-detail.page.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/resource-detail.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeResourcesResourceDetailResourceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".description {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9yZXNvdXJjZXMvcmVzb3VyY2UtZGV0YWlsL3Jlc291cmNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9yZXNvdXJjZXMvcmVzb3VyY2UtZGV0YWlsL3Jlc291cmNlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb257XG4gIHdoaXRlLXNwYWNlOiBub3JtYWxcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/resources/resource-detail/resource-detail.page.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/home/resources/resource-detail/resource-detail.page.ts ***!
      \******************************************************************************/

    /*! exports provided: ResourceDetailPage */

    /***/
    function srcAppPagesHomeResourcesResourceDetailResourceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceDetailPage", function () {
        return ResourceDetailPage;
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

      var ResourceDetailPage = /*#__PURE__*/function () {
        function ResourceDetailPage(apiSrv, router, navCtrl, route) {
          _classCallCheck(this, ResourceDetailPage);

          this.apiSrv = apiSrv;
          this.router = router;
          this.navCtrl = navCtrl;
          this.route = route;
          this.defaultHref = 'tablinks/resources';
          this.resource = {};
        }

        _createClass(ResourceDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('resourceId')) {
                return;
              }

              _this.resourceId = +paramMap.get('resourceId');

              _this.loadData();
            });
          }
          /**
           * Load data for a resource
           */

        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var resource;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return this.apiSrv.getResource(this.resourceId).toPromise();

                    case 3:
                      resource = _context.sent;
                      _context.next = 10;
                      break;

                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context["catch"](0);
                      console.error(_context.t0);
                      resource = null;

                    case 10:
                      console.log(resource);
                      this.resource = Object.assign({}, resource);

                      if (this.resource && Object.hasOwnProperty.call(this.resource, 'type') && Object.hasOwnProperty.call(this.resource.type, 'name')) {
                        this.resourceType = this.resource.type.name;
                      }

                      this.defaultHref = "".concat(this.defaultHref, "/list/").concat(this.resource.topic_id);
                      console.log(this.resource);
                      console.log(this.resourceType);

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 6]]);
            }));
          }
        }]);

        return ResourceDetailPage;
      }();

      ResourceDetailPage.ctorParameters = function () {
        return [{
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      ResourceDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./resource-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/resources/resource-detail/resource-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./resource-detail.page.scss */
        "./src/app/pages/home/resources/resource-detail/resource-detail.page.scss"))["default"]]
      })], ResourceDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=resource-detail-resource-detail-module-es5.js.map