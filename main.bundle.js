webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./posts/posts.module": [
		"./src/app/posts/posts.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n  <app-navber></app-navber>\n  <router-outlet></router-outlet>\n  ",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__posts_posts_module__ = __webpack_require__("./src/app/posts/posts.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: '', loadChildren: './posts/posts.module#PostsModule' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyCll4IheBCJQg7p5ZoUHhyMWX-HgcDZBJI",
                    authDomain: "blog-919c1.firebaseapp.com",
                    databaseURL: "https://blog-919c1.firebaseio.com",
                    projectId: "blog-919c1",
                    storageBucket: "blog-919c1.appspot.com",
                    messagingSenderId: "552958781849"
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__posts_posts_module__["PostsModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.authState = null;
        this.afAuth.authState.subscribe(function (data) { return _this.authState = data; });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.authenticated ? this.authState.uid : null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__["a" /* MatProgressBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__["a" /* MatProgressBarModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/posts/post-dashbord/post-dashbord.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/posts/post-dashbord/post-dashbord.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <input type=\"file\" name=\"file\" id=\"file\" (change)=\"uploadImage($event)\" >\n  <div [hidden]=\"!uploadePercent\">\n    <mat-progress-bar mode=\"determinate\" value=\"{{uploadePercent | async}}\"></mat-progress-bar>\n  </div>\n  <div [hidden]=\"!image\">\n    <img [src]=\"image || '//:0'\" style=\"width: 100%\">\n  </div>\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" matInput placeholder=\"title\" [(ngModel)]=\"title\" name=\"title\">\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <textarea type=\"text\" matInput placeholder=\"Leave a comment\" [(ngModel)]=\"content\" name=\"content\" rows=\"10\"></textarea>\n  </mat-form-field>\n  <br>\n\n  <button mat-raised-button color=\"primary\" (click)=\"createPost()\" [disabled]=\"!title || !content\">{{textButtom}}</button>\n</form>"

/***/ }),

/***/ "./src/app/posts/post-dashbord/post-dashbord.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDashbordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("./src/app/posts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostDashbordComponent = /** @class */ (function () {
    function PostDashbordComponent(auth, PostService, storage) {
        this.auth = auth;
        this.PostService = PostService;
        this.storage = storage;
        this.image = null;
        this.textButtom = "Create Post";
    }
    PostDashbordComponent.prototype.ngOnInit = function () {
    };
    PostDashbordComponent.prototype.createPost = function () {
        var _this = this;
        var data = {
            title: this.title,
            author: this.auth.authState.dislplayName || this.auth.authState.email,
            authorid: this.auth.currentUserId,
            content: this.content,
            image: this.image,
            published: new Date()
        };
        this.PostService.create(data);
        this.title = null;
        this.content = null;
        this.textButtom = 'Done';
        setTimeout(function () { return (_this.textButtom = "Create Post"); }, 1000);
    };
    PostDashbordComponent.prototype.uploadImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var path = "posts/Frost-" + file.name;
        if (file.type.split('/')[0] !== "image") {
            return alert("not image file\nplease import image file");
        }
        else {
            var task = this.storage.upload(path, file);
            this.dowloadURL = task.downloadURL();
            this.uploadePercent = task.percentageChanges();
            console.log("dsfa");
            this.dowloadURL.subscribe(function (url) { return _this.image = url; });
        }
    };
    PostDashbordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-dashbord',
            template: __webpack_require__("./src/app/posts/post-dashbord/post-dashbord.component.html"),
            styles: [__webpack_require__("./src/app/posts/post-dashbord/post-dashbord.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], PostDashbordComponent);
    return PostDashbordComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-detail/post-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/post-detail/post-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <h3>{{ post.title }}</h3>\n  <p> post by {{ post.author }} &bull; {{ post.published | date: 'fullDate'}}</p>\n  <p> {{ post.content }}</p>\n</div>"

/***/ }),

/***/ "./src/app/posts/post-detail/post-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("./src/app/posts/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(route, postService) {
        this.route = route;
        this.postService = postService;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    PostDetailComponent.prototype.getPost = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        return this.postService.getPostData(id).subscribe(function (data) { return _this.post = data; });
    };
    PostDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-detail',
            template: __webpack_require__("./src/app/posts/post-detail/post-detail.component.html"),
            styles: [__webpack_require__("./src/app/posts/post-detail/post-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/***/ (function(module, exports) {

module.exports = ".example-card{\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"max-width: 600px;margin: auto;\">\n  <mat-card class=\"example-card\" *ngFor=\"let post of posts | async\">\n      <mat-card-header>\n        <mat-card-title routerLink=\"{{post.id}}\">{{post.title}}</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image routerLink=\"{{post.id}}\" src=\"{{ post.image }}\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n        <p>\n          {{post.content}}\n        </p>\n      </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n<!-- \n<div *ngFor=\"let post of posts | async\">\n  <h2 routerLink=\"{{post.id}}\">{{ post.title }}</h2>\n  <p>{{ post.content }}</p>\n</div> -->"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_service__ = __webpack_require__("./src/app/posts/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        this.postService = postService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.posts = this.postService.getPosts();
        // console.log(this);
    };
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-list',
            template: __webpack_require__("./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__("./src/app/posts/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__post_service__["a" /* PostService */]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(afs) {
        this.afs = afs;
        this.postCollection = this.afs.collection("posts", function (ref) { return ref.orderBy('published', 'desc'); });
    }
    PostService.prototype.getPosts = function () {
        return this.postCollection.snapshotChanges().map(function (action) {
            return action.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    PostService.prototype.getPostData = function (id) {
        this.postDoc = this.afs.doc("posts/" + id);
        return this.postDoc.valueChanges();
    };
    PostService.prototype.create = function (data) {
        this.postCollection.add(data);
    };
    PostService.prototype.getPost = function (id) {
        return this.afs.doc("posts/" + id);
    };
    PostService.prototype.delete = function (id) {
        return this.getPost(id).delete();
    };
    PostService.prototype.update = function (id, formData) {
        return this.getPost(id).update(formData);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_dashbord_post_dashbord_component__ = __webpack_require__("./src/app/posts/post-dashbord/post-dashbord.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_detail_post_detail_component__ = __webpack_require__("./src/app/posts/post-detail/post-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__ = __webpack_require__("./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_service__ = __webpack_require__("./src/app/posts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routers = [
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__["a" /* PostListComponent */] },
    { path: 'blog/:id', component: __WEBPACK_IMPORTED_MODULE_3__post_detail_post_detail_component__["a" /* PostDetailComponent */] },
    { path: 'dashbord', component: __WEBPACK_IMPORTED_MODULE_2__post_dashbord_post_dashbord_component__["a" /* PostDashbordComponent */] }
];
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routers)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__post_dashbord_post_dashbord_component__["a" /* PostDashbordComponent */], __WEBPACK_IMPORTED_MODULE_3__post_detail_post_detail_component__["a" /* PostDetailComponent */], __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__["a" /* PostListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__post_service__["a" /* PostService */]]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/shared/navber/navber.component.css":
/***/ (function(module, exports) {

module.exports = "nav{\r\n    width:100%;\r\n    /* height:50px; */\r\n    background-color: black;\r\n    color: antiquewhite;\r\n}\r\n.right{\r\n    position: absolute;\r\n    right: 1px;\r\n}"

/***/ }),

/***/ "./src/app/shared/navber/navber.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <mat-toolbar-row>\n    <span routerLink=\"/\">BLOG</span>\n    <div class=\"right\">\n      <div *ngIf=\"auth.afAuth.authState | async as user; else showLogin\">\n        <span>{{user.displayName}}</span>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item routerLink=\"dashbord\">\n            <mat-icon>border_color</mat-icon>\n            <span>Write</span>\n          </button>\n          <button mat-menu-item (click)=\"auth.logout()\">\n            <mat-icon>cancel</mat-icon>\n            <span>Logout</span>\n          </button>\n          <button mat-menu-item>\n            <mat-icon>notifications_off</mat-icon>\n            <span>Disable alerts</span>\n          </button>\n        </mat-menu>\n      </div>\n      <ng-template #showLogin>\n        <button mat-raised-button color=\"primary\" (click)=\"auth.login()\">Login</button>\n      </ng-template>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/navber/navber.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavberComponent = /** @class */ (function () {
    function NavberComponent(auth) {
        this.auth = auth;
    }
    NavberComponent.prototype.ngOnInit = function () {
    };
    NavberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navber',
            template: __webpack_require__("./src/app/shared/navber/navber.component.html"),
            styles: [__webpack_require__("./src/app/shared/navber/navber.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], NavberComponent);
    return NavberComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navber_navber_component__ = __webpack_require__("./src/app/shared/navber/navber.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__navber_navber_component__["a" /* NavberComponent */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__navber_navber_component__["a" /* NavberComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    Firebase: {
        apiKey: "AIzaSyCll4IheBCJQg7p5ZoUHhyMWX-HgcDZBJI",
        authDomain: "blog-919c1.firebaseapp.com",
        databaseURL: "https://blog-919c1.firebaseio.com",
        projectId: "blog-919c1",
        storageBucket: "blog-919c1.appspot.com",
        messagingSenderId: "552958781849"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map