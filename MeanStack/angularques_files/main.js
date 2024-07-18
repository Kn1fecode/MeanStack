(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"col-md-12\">\n    <app-navbar></app-navbar>\n  </div>\n  \n  <div class=\"col-md-10 col-md-offset-1\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _components_todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/todo-create/todo-create.component */ "./src/app/components/todo-create/todo-create.component.ts");
/* harmony import */ var _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/todo-edit/todo-edit.component */ "./src/app/components/todo-edit/todo-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'todos', component: _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'create', component: _components_todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_12__["TodoCreateComponent"] },
    { path: 'edit/:id', component: _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__["TodoEditComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"],
                _components_todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_12__["TodoCreateComponent"],
                _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__["TodoEditComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [_services_todos_service__WEBPACK_IMPORTED_MODULE_11__["TodosService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>WOrking wh pipes</h3>\n<strong><p>NAme : {{name|uppercase}}</p></strong><br/>\n<strong><p>Catewgopry : {{category|lowercase}}</p></strong><br/>\n<strong><p>Cost : {{cost|currency}}</p></strong><br/>\n<strong><p>Cost : {{cost|currency:\"Rs.\"}}</p></strong><br/>\n<strong>number,slice,date-done. to do-async,custom pipe:asmt</strong><br/>\n\n<p>{{str}}[0:4]: '{{str | slice:0:4}}'</p>\n\n    <p>Today is {{today | date}}</p>\n    <p>Or if you prefer, {{today | date:'fullDate'}}</p>\n    <p>The time is {{today | date:'h:mm a z'}}</p>\n\n    <p>pi (no formatting): {{pi | number}}</p>\n    <p>e (no formatting): {{e | number}}</p>\n\n    <div><code>observable|async</code>: Time: {{ time | async }}</div>\n\n\n    <!-- <code>promise|async</code>: \n    <button (click)=\"clicked()\">{{ arrived ? 'Reset' : 'Resolve' }}</button>\n    <span>Wait for it... {{ greeting | async }}</span> -->\n\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.name = "Iphone";
        this.cost = 60000;
        this.category = "electronics";
        this.today = Date.now();
        this.pi = 3.14;
        this.e = 2.718281828459045;
        this.str = 'abcdefghij';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'capitalize' }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

// transform(value: string, args: string[]): any {
//   if (!value) return value;
//   return value.replace(/\w\S*/g, function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   }
// 
// greeting:Promise<string>|null = null;
// arrived: boolean = false;
// reset() {
//   this.arrived = false;
//   this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
// }
// clicked() {
//   if (this.arrived) {
//     this.reset();
//   } else {
//     this.resolve !('hi there!');
//     this.arrived = true;
//   }


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n        <h1 class=\"page-header\">Login</h1>\n        <form [formGroup]=\"myForm\" (ngsSubmit)=\"onSubmit(myForm.value)\">\n          <div class=\"form-group\">\n            <label>UserName</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" />\n            <div class=\"alert alert-danger\" \n            *ngIf=\"myForm.controls['username'].hasError('required') && myForm.controls['username'].touched\">\n                Username required!\n            </div>\n          </div>\n          <div class=\"form-group\">\n              \n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\"/>\n            <div class=\"alert alert-danger\" \n            *ngIf=\"myForm.controls['password'].hasError('required') && myForm.controls['password'].touched\">\n            Password required!\n            </div>\n            <div class=\"alert alert-danger\" \n            *ngIf=\"myForm.controls['password'].hasError('maxlength') && myForm.controls['username'].touched\">\n            Password should contain less than 8 characters\n            </div>\n            <div class=\"alert alert-danger\" \n            *ngIf=\"myForm.controls['password'].hasError('minlength') && myForm.controls['username'].touched\">\n            Password should contain greater than 5 characters\n           </div>\n          </div>\n          <div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">SignIn</button>\n          </div>\n        </form>\n      </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.myForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)])
        });
    }
    LoginComponent.prototype.onSubmit = function (myForm) {
        alert("Submiteed succerssfully");
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">TodoApp</a>\n    </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a></li>\n        <li><a routerLink=\"/about\">About us</a></li>\n        <li><a routerLink=\"/todos\">Todos</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/register\">Register</a></li>\n        <li><a routerLink=\"/login\">Login</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-create/todo-create.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/todo-create/todo-create.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/todo-create/todo-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/todo-create/todo-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\n<h1 class=\"page-header\">Add New Task</h1>\n<form>\n<div clas=\"form-group\">\n<label>task Name</label>\n<input type=\"text\" #taskName/>\n</div>\n<div>\n  <button class=\"btn btn-success\" type=\"button\"\n  (click)=\"addTaskToService(taskName.value)\">Save</button>&nbsp;&nbsp;\n  <button (click)=\"goBack()\" type=\"button\" class=\"btn btn-primary\">Back</button>\n</div>\n</form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/todo-create/todo-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/todo-create/todo-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateComponent", function() { return TodoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoCreateComponent = /** @class */ (function () {
    function TodoCreateComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    TodoCreateComponent.prototype.ngOnInit = function () {
    };
    TodoCreateComponent.prototype.addTaskToService = function (taskname) {
        var _this = this;
        var newTask = {
            "name": taskname
        };
        this.todoService.addTodo(newTask).subscribe(function (result) {
            _this.router.navigate(['/todos']);
        });
    };
    TodoCreateComponent.prototype.goBack = function () {
        this.router.navigate(['/todos']);
    };
    TodoCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-create',
            template: __webpack_require__(/*! ./todo-create.component.html */ "./src/app/components/todo-create/todo-create.component.html"),
            styles: [__webpack_require__(/*! ./todo-create.component.css */ "./src/app/components/todo-create/todo-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodoCreateComponent);
    return TodoCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-edit/todo-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-edit/todo-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/todo-edit/todo-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-edit/todo-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\n\n    <h1 class=\"page-header\">Update task</h1>\n    <form>\n  \n      <div class=\"form-group\">\n        <label>Task name</label>\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"task.name\" class=\"form-control\"/>\n        \n      </div>\n      <div class=\"form-group\">\n          <label>Status</label>\n          <input type=\"text\" name=\"status\" [(ngModel)]=\"task.status\" class=\"form-control\"/>\n          \n        </div>\n      <div>\n        <button type=\"button\" (click)=\"save()\"\n        class=\"btn btn-success\">Save</button>\n        &nbsp;&nbsp;\n        <button (click)=\"goBack()\" type=\"button\" class=\"btn btn-primary\">Back</button>\n      </div>\n    </form>\n    </div>"

/***/ }),

/***/ "./src/app/components/todo-edit/todo-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-edit/todo-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEditComponent", function() { return TodoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todos.service */ "./src/app/services/todos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent(todoService, router, route) {
        this.todoService = todoService;
        this.router = router;
        this.route = route;
        this.task = { "_id": "", "name": "", "status": "" };
    }
    TodoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.todoService.getTodoById(id).subscribe(function (result) {
            _this.task = result;
        });
    };
    TodoEditComponent.prototype.save = function () {
        var _this = this;
        this.todoService.updateTodo(this.task._id, this.task).subscribe(function (result) {
            _this.router.navigate(['/todos']);
        });
    };
    TodoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-edit',
            template: __webpack_require__(/*! ./todo-edit.component.html */ "./src/app/components/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__(/*! ./todo-edit.component.css */ "./src/app/components/todo-edit/todo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/components/todos/todos.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/todos/todos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/todos/todos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/todos/todos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Todos</h1>\n\n<table class=\"table table-bordered table-striped\">\n  <thead><tr>\n    <th>Name</th>\n  <th>Status</th>\n  <th></th>\n</tr></thead>\n<tbody>\n  <tr *ngFor=\"let task of tasks\">\n    <td>{{task.name}}</td>\n    <td>{{task.status}}</td>\n    <td>\n    <button (click)=\"loadEditComponent(task._id)\" class=\"btn btn-xs btn-primary\">Edit</button> &nbsp;&nbsp;\n    <button\n    (click)=\"deleteFromService(task._id)\"\n    class=\"btn btn-xs btn-danger\">Delete</button>\n  </td>\n  </tr>\n</tbody>\n</table>\n\n<button (click)=\"loadTodoCreate()\"\nclass=\"btn btn-success\">Add task</button>"

/***/ }),

/***/ "./src/app/components/todos/todos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/todos/todos.component.ts ***!
  \*****************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodosComponent = /** @class */ (function () {
    function TodosComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
        this.tasks = [];
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.getTodosFromService();
    };
    TodosComponent.prototype.getTodosFromService = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (result) {
            console.log(result);
            _this.tasks = result;
        });
    };
    TodosComponent.prototype.deleteFromService = function (id) {
        var _this = this;
        this.todoService.deleteTodo(id).subscribe(function (result) {
            alert('Data deleted!');
            _this.getTodosFromService();
        });
    };
    TodosComponent.prototype.loadEditComponent = function (id) {
        alert(id);
        this.router.navigate(['/edit/' + id]);
    };
    TodosComponent.prototype.loadTodoCreate = function () {
        this.router.navigate(['/create']);
    };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/components/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/components/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/services/todos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/todos.service.ts ***!
  \*******************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosService = /** @class */ (function () {
    function TodosService(http) {
        this.http = http;
    }
    TodosService.prototype.getTodos = function () {
        return this.http.get('http://localhost:3000/api/todos/');
    };
    TodosService.prototype.deleteTodo = function (id) {
        return this.http.delete('http://localhost:3000/api/todos/' + id);
    };
    // getTodoById(id){}
    TodosService.prototype.addTodo = function (todo) {
        return this.http.post('http://localhost:3000/api/todos/', todo);
    };
    TodosService.prototype.getTodoById = function (id) {
        return this.http.get('http://localhost:3000/api/todos/' + id);
    };
    TodosService.prototype.updateTodo = function (id, todo) {
        return this.http.put('http://localhost:3000/api/todos/' + id, todo);
    };
    TodosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\seed\Desktop\MeanStack\Angular\RouterOutlet\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! C:\Users\seed\Desktop\MeanStack\Angular\RouterOutlet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map