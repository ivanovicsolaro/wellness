(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["benefit-detail-benefit-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeBenefitsBenefitDetailBenefitDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button defaultHref=\"tablinks/benefits\"></ion-back-button> -->\n      <ion-button routerLink=\"/tablinks/benefits\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <app-page-title></app-page-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content slot=\"fixed\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row *ngIf=\"isLoading; else loaded\">\n      <ion-col class=\"ion-text-center ion-padding\">\n        <ion-spinner></ion-spinner>\n      </ion-col>\n    </ion-row>\n    <ng-template #loaded>\n      <ion-row>\n        <ion-col class=\"ion-text-center grid-title\">\n          <ion-text color=\"wellness\">{{ benefit?.fullName }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-img [src]=\"benefit.image\"></ion-img>\n          <div class=\"play-video\" (click)=\"goToVideo(benefit)\">\n            <p>Ver Video</p>\n            <ion-icon name=\"play-circle\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-text color=\"wellness\">\n            <p class=\"ion-text-center full-name\">\n              {{ benefit?.description }}\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n  <ion-grid class=\"grid-icons\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col size=\"2\" *ngFor=\"let icon of iconsFiltered\" (click)=\"goToSection(icon)\">\n        <!-- <div class=\"icon-container\" *ngFor=\"let icon of icons\"> -->\n          <ion-img [src]=\"generateIconImageUrl(icon)\"></ion-img>\n          <ion-text [color]=\"icon.selected ? 'wellness' : 'medium'\"><p class=\"ion-text-center label\">{{ icon.label }}</p></ion-text>\n        <!-- </div> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/benefits/benefit-detail/benefit-detail-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/home/benefits/benefit-detail/benefit-detail-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: BenefitDetailPageRoutingModule */

    /***/
    function srcAppPagesHomeBenefitsBenefitDetailBenefitDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BenefitDetailPageRoutingModule", function () {
        return BenefitDetailPageRoutingModule;
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


      var _benefit_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./benefit-detail.page */
      "./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.ts");

      var routes = [{
        path: '',
        component: _benefit_detail_page__WEBPACK_IMPORTED_MODULE_3__["BenefitDetailPage"]
      }];

      var BenefitDetailPageRoutingModule = function BenefitDetailPageRoutingModule() {
        _classCallCheck(this, BenefitDetailPageRoutingModule);
      };

      BenefitDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BenefitDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/benefits/benefit-detail/benefit-detail.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/home/benefits/benefit-detail/benefit-detail.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: BenefitDetailPageModule */

    /***/
    function srcAppPagesHomeBenefitsBenefitDetailBenefitDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BenefitDetailPageModule", function () {
        return BenefitDetailPageModule;
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


      var _benefit_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./benefit-detail-routing.module */
      "./src/app/pages/home/benefits/benefit-detail/benefit-detail-routing.module.ts");
      /* harmony import */


      var _benefit_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./benefit-detail.page */
      "./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.ts");
      /* harmony import */


      var src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/page-title/page-title.module */
      "./src/app/components/page-title/page-title.module.ts");

      var BenefitDetailPageModule = function BenefitDetailPageModule() {
        _classCallCheck(this, BenefitDetailPageModule);
      };

      BenefitDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _benefit_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BenefitDetailPageRoutingModule"], src_app_components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"]],
        declarations: [_benefit_detail_page__WEBPACK_IMPORTED_MODULE_6__["BenefitDetailPage"]]
      })], BenefitDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeBenefitsBenefitDetailBenefitDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".play-video {\n  background-color: #99c566;\n  color: #ffffff;\n  width: 40%;\n  min-height: 50px;\n  padding: 10px;\n  display: block;\n  font-size: 1.5em;\n  position: absolute;\n  z-index: 1000;\n  bottom: 20%;\n}\n.play-video p {\n  float: left;\n  margin: 0 !important;\n  text-transform: uppercase;\n}\n.play-video ion-icon {\n  float: left;\n  margin-left: 5px;\n}\n.full-name {\n  font-weight: bold;\n}\n.grid-icons {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.grid-icons .icon-container {\n  width: 20%;\n  float: left;\n}\n.grid-icons ion-img {\n  margin: 10px;\n}\n.grid-icons p.label {\n  font-size: 0.6em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9iZW5lZml0cy9iZW5lZml0LWRldGFpbC9iZW5lZml0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUVBO0VBQ0UsaUJBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUU7RUFDRSxZQUFBO0FBRUo7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvYmVuZWZpdHMvYmVuZWZpdC1kZXRhaWwvYmVuZWZpdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXktdmlkZW97XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWM1NjY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNDAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBib3R0b206IDIwJTtcbiAgcCB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuLmZ1bGwtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ3JpZC1pY29uc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAuaWNvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgaW9uLWltZyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIHAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.ts ***!
      \***************************************************************************/

    /*! exports provided: BenefitDetailPage */

    /***/
    function srcAppPagesHomeBenefitsBenefitDetailBenefitDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BenefitDetailPage", function () {
        return BenefitDetailPage;
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

      var BenefitDetailPage = /*#__PURE__*/function () {
        function BenefitDetailPage(route, navCtrl, apiSrv, router) {
          _classCallCheck(this, BenefitDetailPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.apiSrv = apiSrv;
          this.router = router;
          this.benefit = {};
          this.benefits = [{
            name: 'Financiero',
            fullName: 'Área Financiero Contable',
            description: 'Contadores locales brindan orientación telefónica',
            image: 'financiero.jpg',
            // videoId: "354015683"
            videoId: "472346801"
          }, {
            name: 'Legal',
            fullName: 'Área Legal',
            description: 'Abogados locales brindan orientación telefónica',
            image: 'legal.jpg',
            videoId: "472346667" // videoId: "354015729"

          }, {
            name: 'Psicológico',
            fullName: 'Área Psicologico',
            description: 'Psicólogos especializados en procesos breves brindan orientación psicológica',
            image: 'psicologico.jpg',
            videoId: "472346176" // videoId: "354015843"

          }, {
            name: 'Maternidad',
            fullName: 'Área Maternidad y lactancia',
            description: 'Especialistas en lactancia y crianza brindan orientación personalizada',
            image: 'maternidad.jpg',
            videoId: "472346513" // videoId: "354015769"

          }, {
            name: 'Nutricional',
            fullName: 'Área Nutricional',
            description: 'Nutricionistas brindan orientación y planes personalizado',
            image: 'nutricional.jpg',
            videoId: "472346255" // videoId: "354015803"

          }];
          this.icons = [{
            imageName: 'nutricional',
            label: 'Nutricional',
            name: 'Nutricional',
            selected: false
          }, {
            imageName: 'maternidad',
            label: 'Maternidad',
            name: 'Maternidad',
            selected: false
          }, {
            imageName: 'psicologico',
            label: 'Psicológica',
            name: 'Psicológico',
            selected: false
          }, {
            imageName: 'legal',
            label: 'Legal',
            name: 'Legal',
            selected: false
          }, {
            imageName: 'financiero',
            label: 'Financiero Contable',
            name: 'Financiero',
            selected: false
          }];
          this.iconsFiltered = [];
          this.imageUrl = 'assets/benefits/big/';
          this.isLoading = true;
        }

        _createClass(BenefitDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (paramMap.has('id')) {
                          _context.next = 4;
                          break;
                        }

                        this.navCtrl.setDirection('root');
                        this.router.navigate(['/tablinks/benefits']);
                        return _context.abrupt("return");

                      case 4:
                        this.benefitId = +paramMap.get('id');
                        _context.next = 7;
                        return this.loadData();

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
          /**
           * Load benefits detail data
           */

        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var benefit, response, found, icon;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // this.globalSrv.showLoading();
                      this.isLoading = true;
                      this.benefit = {};
                      this.iconsFiltered = [];
                      _context2.prev = 3;
                      _context2.next = 6;
                      return this.apiSrv.getBenefit(this.benefitId).toPromise();

                    case 6:
                      benefit = _context2.sent;
                      _context2.next = 13;
                      break;

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2["catch"](3);
                      console.error(_context2.t0);
                      benefit = null;

                    case 13:
                      _context2.prev = 13;
                      _context2.next = 16;
                      return this.apiSrv.getCompanyList().toPromise();

                    case 16:
                      response = _context2.sent;
                      _context2.next = 22;
                      break;

                    case 19:
                      _context2.prev = 19;
                      _context2.t1 = _context2["catch"](13);
                      response = null;

                    case 22:
                      if (response && Object.hasOwnProperty.call(response, 'company') && Object.hasOwnProperty.call(response.company, 'benefits')) {
                        this.icons = this.icons.map(function (icon) {
                          var found = response.company.benefits.find(function (b) {
                            return b.name === icon.name;
                          });

                          if (found) {
                            icon['id'] = found.id;
                          }

                          return icon;
                        });
                        this.iconsFiltered = this.icons.filter(function (icon) {
                          return response.company.benefits.find(function (b) {
                            return b.name === icon.name;
                          }) ? true : false;
                        });
                      }

                      if (benefit) {
                        found = this.benefits.find(function (b) {
                          return b.name === benefit.name;
                        });
                        icon = this.icons.find(function (b) {
                          return b.name === benefit.name;
                        });

                        if (icon) {
                          icon.selected = true;
                        }

                        if (found) {
                          benefit = Object.assign({
                            id: benefit.id
                          }, found);
                          benefit['image'] = "".concat(this.imageUrl).concat(found.image);
                        }

                        this.benefit = Object.assign({}, benefit);
                      }

                      this.isLoading = false;

                    case 25:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[3, 9], [13, 19]]);
            }));
          }
          /**
           * Go to video
           * @param benefit
           */

        }, {
          key: "goToVideo",
          value: function goToVideo(benefit) {
            var queryParams = {
              type: 'benefits',
              benefitId: benefit.id,
              videoId: benefit.videoId
            };
            this.router.navigate(['/video'], {
              queryParams: queryParams
            });
          }
        }, {
          key: "goToSection",
          value: function goToSection(icon) {
            if (!icon.selected) {
              this.navCtrl.setDirection('root');
              this.router.navigate(['/tablinks/benefits/detail/', icon.id]);
            }
          }
          /**
           * Generate image icon url
           * @param icon
           */

        }, {
          key: "generateIconImageUrl",
          value: function generateIconImageUrl(icon) {
            var activado = icon.selected ? 'activado' : 'desactivado';
            var fileName = "".concat(icon.imageName, "-").concat(activado, ".png");
            return "assets/benefits/icons/".concat(fileName);
          }
        }]);

        return BenefitDetailPage;
      }();

      BenefitDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BenefitDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benefit-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./benefit-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./benefit-detail.page.scss */
        "./src/app/pages/home/benefits/benefit-detail/benefit-detail.page.scss"))["default"]]
      })], BenefitDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=benefit-detail-benefit-detail-module-es5.js.map