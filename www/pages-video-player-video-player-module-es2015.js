(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-player-video-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-player/video-player.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-player/video-player.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"wellness\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Video</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row *ngIf=\"isLoading; else loaded\">\n      <ion-col size=\"12\" class=\"ion-text-center ion-padding\">\n          <ion-spinner></ion-spinner>\n      </ion-col>\n    </ion-row>\n    <ng-template #loaded>\n      <ion-row>\n        <ion-col size=\"12\">\n          <iframe [src]=\"videoUrl\" [width]=\"width\" [height]=\"height\" frameborder=\"0\" allow=\"autoplay; fullscreen\"></iframe>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/video-player/video-player-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/video-player/video-player-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VideoPlayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPageRoutingModule", function() { return VideoPlayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-player.page */ "./src/app/pages/video-player/video-player.page.ts");




const routes = [
    {
        path: '',
        component: _video_player_page__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerPage"]
    }
];
let VideoPlayerPageRoutingModule = class VideoPlayerPageRoutingModule {
};
VideoPlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoPlayerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/video-player/video-player.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.module.ts ***!
  \***********************************************************/
/*! exports provided: VideoPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPageModule", function() { return VideoPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _video_player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-player-routing.module */ "./src/app/pages/video-player/video-player-routing.module.ts");
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-player.page */ "./src/app/pages/video-player/video-player.page.ts");







let VideoPlayerPageModule = class VideoPlayerPageModule {
};
VideoPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_player_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPlayerPageRoutingModule"]
        ],
        declarations: [_video_player_page__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerPage"]]
    })
], VideoPlayerPageModule);



/***/ }),

/***/ "./src/app/pages/video-player/video-player.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/video-player/video-player.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.page.ts ***!
  \*********************************************************/
/*! exports provided: VideoPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPage", function() { return VideoPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let VideoPlayerPage = class VideoPlayerPage {
    constructor(route, router, platform, domSanitizer, navCtrl) {
        this.route = route;
        this.router = router;
        this.platform = platform;
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.isLoading = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            if (!Object.hasOwnProperty.call(params, 'type')) {
                this.navCtrl.setDirection('root');
                this.router.navigate(['/tablinks/main']);
                return;
            }
            this.videoId = params.videoId;
            this.defaultHref = this.setDefaultHref(Object.assign({}, params));
            // console.log(this.defaultHref);
            this.loadData();
        });
    }
    /**
     * Cargar data to load video
     */
    loadData() {
        this.isLoading = true;
        this.videoUrl = this.sanitizeVideoUrl(`https://player.vimeo.com/video/${this.videoId}`);
        this.height = this.platform.height() * 0.9;
        this.width = this.platform.width();
        this.isLoading = false;
    }
    /**
     * Sanitize video url
     * @param url
     */
    sanitizeVideoUrl(url) {
        const sanitizeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        return sanitizeUrl;
    }
    /**
     * Set url for back button
     * @param queryParams
     */
    setDefaultHref(queryParams = {}) {
        let defaultHref = 'tablinks/main';
        switch (queryParams.type) {
            case 'benefits':
                defaultHref = `tablinks/benefits/detail/${queryParams.benefitId}`;
                break;
            case 'main':
                defaultHref = `tablinks/main`;
                break;
            default:
                break;
        }
        return defaultHref;
    }
};
VideoPlayerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
VideoPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./video-player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-player/video-player.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./video-player.page.scss */ "./src/app/pages/video-player/video-player.page.scss")).default]
    })
], VideoPlayerPage);



/***/ })

}]);
//# sourceMappingURL=pages-video-player-video-player-module-es2015.js.map