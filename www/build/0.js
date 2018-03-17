webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarProfessorPageModule", function() { return CadastrarProfessorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarProfessorPageModule = (function () {
    function CadastrarProfessorPageModule() {
    }
    CadastrarProfessorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__["a" /* CadastrarProfessorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__["a" /* CadastrarProfessorPage */]),
            ],
        })
    ], CadastrarProfessorPageModule);
    return CadastrarProfessorPageModule;
}());

//# sourceMappingURL=cadastrar-professor.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastrarProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarProfessorPage = (function () {
    function CadastrarProfessorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrarProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarProfessorPage');
    };
    CadastrarProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar-professor',template:/*ion-inline-start:"C:\Users\User\Documents\ESTAGIO\Front-end_ClinicaFisio\src\pages\cadastrar-professor\cadastrar-professor.html"*/'<!--\n  Generated template for the CadastrarProfessorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastrar Professor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label floating>Nome Completo</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label floating>Matricula</ion-label>\n                <ion-input type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        <ion-col>\n            <ion-item>\n                <ion-label floating>CREFITO</ion-label>\n                <ion-input type="text"></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="email"></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label floating>Telefone</ion-label>\n                <ion-input type="email"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Área de Especialidade</ion-label>\n                <ion-select [(ngModel)]="especialidade">\n                  <ion-option value="Dermatofuncional">Dermatofuncional</ion-option>\n                  <ion-option value="Ortopediatraumatologia">Ortopedia/Traumatologia</ion-option>\n                  <ion-option value="Multidisciplinar">Multidisciplinar</ion-option>             \n                  <ion-option value="FisioterapiaAquatica">Fisioterapia Aquática</ion-option>             \n                  <ion-option value="Neurologia">Neurologia</ion-option>             \n                  <ion-option value="ESF">ESF</ion-option>             \n                  <ion-option value="Cardiorrespiratoria">Cardiorrespiratória</ion-option>    \n                </ion-select>\n            </ion-item>\n          </ion-col>\n      </ion-row>      \n  </ion-grid>\n  <button ion-button color="danger" justify-content: center>Cancelar</button>      \n  <button ion-button color="secondary" justify-content: center>Confirmar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\ESTAGIO\Front-end_ClinicaFisio\src\pages\cadastrar-professor\cadastrar-professor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CadastrarProfessorPage);
    return CadastrarProfessorPage;
}());

//# sourceMappingURL=cadastrar-professor.js.map

/***/ })

});
//# sourceMappingURL=0.js.map