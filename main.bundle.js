webpackJsonp(["main"],{

/***/ "../../../../../demo/src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../demo/src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../demo/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <h2>Basic tree</h2>\n    <app-tree-one></app-tree-one>\n  </div>\n  <div class=\"col-sm-6\">\n    <h2>Tree with modified ItemComponent</h2>\n    <app-tree-two></app-tree-two>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../demo/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../demo/src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/app.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../demo/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__treeOne_treeOne_module__ = __webpack_require__("../../../../../demo/src/app/treeOne/treeOne.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treeTwo_treeTwo_module__ = __webpack_require__("../../../../../demo/src/app/treeTwo/treeTwo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = /** @class */ (function () {
    function AppModule(translate) {
        translate.use('en');
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__treeTwo_treeTwo_module__["a" /* TreeTwoModule */],
                __WEBPACK_IMPORTED_MODULE_5__treeOne_treeOne_module__["a" /* TreeOneModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["g" /* StoreModule */].provideStore({ trees: __WEBPACK_IMPORTED_MODULE_8__main__["g" /* treeReducer */] }),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({})
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateService */]) === "function" && _a || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/app.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/localStorage/treeLocalStorage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeLocalStorageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treeLocalStorage_service__ = __webpack_require__("../../../../../demo/src/app/localStorage/treeLocalStorage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TreeLocalStorageModule = /** @class */ (function () {
    function TreeLocalStorageModule() {
    }
    TreeLocalStorageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__main__["f" /* TreeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__treeLocalStorage_service__["a" /* TreeLocalStorageNodeService */]]
        })
    ], TreeLocalStorageModule);
    return TreeLocalStorageModule;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeLocalStorage.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/localStorage/treeLocalStorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeLocalStorageNodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_uuid__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TreeLocalStorageNodeService = /** @class */ (function (_super) {
    __extends(TreeLocalStorageNodeService, _super);
    function TreeLocalStorageNodeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.treeName = 'tree';
        return _this;
    }
    TreeLocalStorageNodeService.prototype.load = function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        if (!this.nodes) {
            this.nodes = this.getAllDataFromLocalStorage();
        }
        var nodes = this.getChildren(nodeId);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(nodes);
    };
    TreeLocalStorageNodeService.prototype.add = function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        node.parentId = parentNodeId;
        node.id = __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__["UUID"].UUID();
        this.nodes.push(node);
        this.saveNodes();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(node);
    };
    TreeLocalStorageNodeService.prototype.move = function (srcNode, targetNode) {
        var srcId = srcNode.id;
        var targetId = targetNode ? targetNode.id : null;
        var index = this.findIndexByNodeId(srcId);
        this.nodes[index].parentId = targetId;
        this.saveNodes();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.nodes[index]);
    };
    TreeLocalStorageNodeService.prototype.update = function (node) {
        var index = this.findIndexByNodeId(node.id);
        this.nodes[index] = node;
        this.saveNodes();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(node);
    };
    TreeLocalStorageNodeService.prototype.remove = function (nodeId) {
        var index = this.findIndexByNodeId(nodeId);
        var node = this.nodes[index];
        var hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            this.nodes.splice(index, 1);
            this.saveNodes();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(node);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Node is not empty');
        }
    };
    TreeLocalStorageNodeService.prototype.findIndexByNodeId = function (nodeId) {
        return this.nodes.findIndex(function (node) {
            return node.id === nodeId;
        });
    };
    TreeLocalStorageNodeService.prototype.getChildren = function (nodeId) {
        return this.nodes.filter(function (node) { return node.parentId === nodeId; });
    };
    TreeLocalStorageNodeService.prototype.getAllDataFromLocalStorage = function () {
        try {
            var data = localStorage.getItem(this.treeName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    TreeLocalStorageNodeService.prototype.saveNodes = function () {
        try {
            localStorage.setItem(this.treeName, JSON.stringify(this.nodes));
        }
        catch (e) {
            console.warn('State not save');
        }
    };
    TreeLocalStorageNodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TreeLocalStorageNodeService);
    return TreeLocalStorageNodeService;
}(__WEBPACK_IMPORTED_MODULE_1__main__["c" /* NodeService */]));

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeLocalStorage.service.js.map

/***/ }),

/***/ "../../../../../demo/src/app/treeOne/treeOne.component.html":
/***/ (function(module, exports) {

module.exports = "<rign-tree\n  [treeModel]=\"treeModel\"\n></rign-tree>\n"

/***/ }),

/***/ "../../../../../demo/src/app/treeOne/treeOne.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treeOneNode_service__ = __webpack_require__("../../../../../demo/src/app/treeOne/treeOneNode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeOneComponent = /** @class */ (function () {
    function TreeOneComponent(store, treeActions, nodeDispatcherService, nodeService) {
        this.store = store;
        this.treeActions = treeActions;
        this.nodeDispatcherService = nodeDispatcherService;
        this.nodeService = nodeService;
        this.contextMenu = [];
        this.treeConfiguration = {
            showAddButton: true,
            disableMoveNodes: false,
            treeId: 'tree3',
            dragZone: 'tree3',
            dropZone: ['tree3'],
            isAnimation: true
        };
    }
    TreeOneComponent.prototype.ngOnInit = function () {
        var treeId = this.treeConfiguration.treeId;
        this.nodeDispatcherService.register(treeId, this.nodeService);
        this.store.dispatch(this.treeActions.registerTree(treeId));
        this.folders = this.store.select('trees')
            .map(function (data) {
            return data[treeId];
        })
            .filter(function (data) { return !!data; });
        this.treeModel = new __WEBPACK_IMPORTED_MODULE_1__main__["e" /* TreeModel */](this.folders, this.treeConfiguration);
    };
    TreeOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tree-one',
            template: __webpack_require__("../../../../../demo/src/app/treeOne/treeOne.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__main__["d" /* TreeActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["d" /* TreeActionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__main__["b" /* NodeDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["b" /* NodeDispatcherService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__treeOneNode_service__["a" /* TreeOneNodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__treeOneNode_service__["a" /* TreeOneNodeService */]) === "function" && _d || Object])
    ], TreeOneComponent);
    return TreeOneComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeOne.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/treeOne/treeOne.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeOneModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__treeOneNode_service__ = __webpack_require__("../../../../../demo/src/app/treeOne/treeOneNode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treeOne_component__ = __webpack_require__("../../../../../demo/src/app/treeOne/treeOne.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TreeOneModule = /** @class */ (function () {
    function TreeOneModule() {
    }
    TreeOneModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__treeOne_component__["a" /* TreeOneComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__treeOne_component__["a" /* TreeOneComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__main__["f" /* TreeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__treeOneNode_service__["a" /* TreeOneNodeService */]]
        })
    ], TreeOneModule);
    return TreeOneModule;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeOne.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/treeOne/treeOneNode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeOneNodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localStorage_treeLocalStorage_service__ = __webpack_require__("../../../../../demo/src/app/localStorage/treeLocalStorage.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TreeOneNodeService = /** @class */ (function (_super) {
    __extends(TreeOneNodeService, _super);
    function TreeOneNodeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.treeName = 'treeOne';
        return _this;
    }
    TreeOneNodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TreeOneNodeService);
    return TreeOneNodeService;
}(__WEBPACK_IMPORTED_MODULE_1__localStorage_treeLocalStorage_service__["a" /* TreeLocalStorageNodeService */]));

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeOneNode.service.js.map

/***/ }),

/***/ "../../../../../demo/src/app/treeTwo/newItem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-item row\"\n     [ngClass]=\"{'tree-item-selected': isSelected}\"\n     ri-droppable\n     ri-draggable\n     [dragZone]=\"treeModel.configuration.dragZone\"\n     [dropConfig]=\"{dropAllowedCssClass: 'drop-enabled', dropZone: treeModel.configuration.dropZone}\"\n     [data]=\"node\"\n>\n  <div class=\"col-sm-8\">\n    <i *ngIf=\"!isExpanded\" (click)=\"expand()\" class=\"fa fa-plus pointer\"></i>\n    <i *ngIf=\"isExpanded\" (click)=\"collapse()\" class=\"fa fa-minus pointer\"></i>\n    <span *ngIf=\"!isEditMode\" class=\"tree-item-name\" (click)=\"onSelect()\">{{node.name}}</span>\n    <form name=\"form\">\n      <input #inputElement type=\"text\" class=\"form-control\" *ngIf=\"isEditMode\" [formControl]=\"nameField\"\n             name=\"name\" (keydown)=\"onChange($event)\" (blur)=\"onBlur($event)\"/>\n    </form>\n  </div>\n  <div class=\"col-sm-4 text-right\">\n      <span class=\"btn-group btn-group-sm\">\n        <button class=\"btn btn-primary\" (click)=\"onEdit($event)\" [disabled]=\"isEditMode\">\n          <i class=\"fa fa-edit\"></i>\n        </button>\n        <button class=\"btn btn-danger\" (click)=\"onDelete()\" [disabled]=\"isEditMode\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </span>\n  </div>\n</div>\n<div class=\"tree\" *ngIf=\"isExpanded\">\n  <new-tree-item  *ngFor=\"let child of children$ | async\" [node]=\"child\" [treeModel]=\"treeModel\" [contextMenu]=\"contextMenu\"></new-tree-item>\n</div>\n"

/***/ }),

/***/ "../../../../../demo/src/app/treeTwo/newItem.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tree-item {\n  display: block;\n  margin: 10px 0;\n  padding: 10px 5px;\n  line-height: 30px;\n  border: 1px solid black;\n  border-radius: 3px;\n  background-color: #eee;\n}\n.tree-item.drop-enabled {\n  background-color: red;\n}\n.tree-item.tree-item-selected {\n  background-color: orange;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/treeTwo/newItem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__("../../../../../main.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NewItemComponent = /** @class */ (function (_super) {
    __extends(NewItemComponent, _super);
    function NewItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewItemComponent.prototype.onDelete = function ($event) {
        this.store.dispatch(this.treeActionsService.deleteNode(this.treeModel.treeId, this.node));
    };
    NewItemComponent.prototype.onEdit = function ($event) {
        this.store.dispatch(this.treeActionsService.editNodeStart(this.node));
    };
    NewItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'new-tree-item',
            template: __webpack_require__("../../../../../demo/src/app/treeTwo/newItem.component.html"),
            styles: [__webpack_require__("../../../../../demo/src/app/treeTwo/newItem.component.less")]
        })
    ], NewItemComponent);
    return NewItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1__main__["a" /* ItemComponent */]));

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/newItem.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/treeTwo/treeTwo.component.html":
/***/ (function(module, exports) {

module.exports = "<rign-tree [treeModel]=\"treeModel\">\n  <new-tree-item *ngFor=\"let node of treeModel.getRootNodes() | async\" [node]=\"node\" [treeModel]=\"treeModel\" [contextMenu]=\"contextMenu\"></new-tree-item>\n</rign-tree>\n"

/***/ }),

/***/ "../../../../../demo/src/app/treeTwo/treeTwo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treeTwoNode_service__ = __webpack_require__("../../../../../demo/src/app/treeTwo/treeTwoNode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeTwoComponent = /** @class */ (function () {
    function TreeTwoComponent(store, treeActions, nodeDispatcherService, treeTwoNodeService) {
        this.store = store;
        this.treeActions = treeActions;
        this.nodeDispatcherService = nodeDispatcherService;
        this.treeTwoNodeService = treeTwoNodeService;
        this.contextMenu = [];
        this.treeConfiguration = {
            showAddButton: true,
            disableMoveNodes: false,
            treeId: 'tree2',
            dragZone: 'tree2',
            dropZone: ['tree2']
        };
    }
    TreeTwoComponent.prototype.ngOnInit = function () {
        var treeId = this.treeConfiguration.treeId;
        this.nodeDispatcherService.register(treeId, this.treeTwoNodeService);
        this.store.dispatch(this.treeActions.registerTree(treeId));
        this.folders = this.store.select('trees')
            .map(function (data) {
            return data[treeId];
        })
            .filter(function (data) { return !!data; });
        this.treeModel = new __WEBPACK_IMPORTED_MODULE_1__main__["e" /* TreeModel */](this.folders, this.treeConfiguration);
    };
    TreeTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tree-two',
            template: __webpack_require__("../../../../../demo/src/app/treeTwo/treeTwo.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__main__["d" /* TreeActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["d" /* TreeActionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__main__["b" /* NodeDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["b" /* NodeDispatcherService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__treeTwoNode_service__["a" /* TreeTwoNodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__treeTwoNode_service__["a" /* TreeTwoNodeService */]) === "function" && _d || Object])
    ], TreeTwoComponent);
    return TreeTwoComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeTwo.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/treeTwo/treeTwo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTwoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__treeTwo_component__ = __webpack_require__("../../../../../demo/src/app/treeTwo/treeTwo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__newItem_component__ = __webpack_require__("../../../../../demo/src/app/treeTwo/newItem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__treeTwoNode_service__ = __webpack_require__("../../../../../demo/src/app/treeTwo/treeTwoNode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localStorage_treeLocalStorage_module__ = __webpack_require__("../../../../../demo/src/app/localStorage/treeLocalStorage.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TreeTwoModule = /** @class */ (function () {
    function TreeTwoModule() {
    }
    TreeTwoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__treeTwo_component__["a" /* TreeTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__newItem_component__["a" /* NewItemComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__treeTwo_component__["a" /* TreeTwoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__localStorage_treeLocalStorage_module__["a" /* TreeLocalStorageModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__main__["f" /* TreeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__treeTwoNode_service__["a" /* TreeTwoNodeService */]]
        })
    ], TreeTwoModule);
    return TreeTwoModule;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeTwo.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/treeTwo/treeTwoNode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTwoNodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localStorage_treeLocalStorage_service__ = __webpack_require__("../../../../../demo/src/app/localStorage/treeLocalStorage.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TreeTwoNodeService = /** @class */ (function (_super) {
    __extends(TreeTwoNodeService, _super);
    function TreeTwoNodeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.treeName = 'treeTwo';
        return _this;
    }
    TreeTwoNodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TreeTwoNodeService);
    return TreeTwoNodeService;
}(__WEBPACK_IMPORTED_MODULE_1__localStorage_treeLocalStorage_service__["a" /* TreeLocalStorageNodeService */]));

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeTwoNode.service.js.map

/***/ }),

/***/ "../../../../../demo/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../demo/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/main.js.map

/***/ }),

/***/ "../../../../../environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/environment.js.map

/***/ }),

/***/ "../../../../../main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_tree_module__ = __webpack_require__("../../../../../src/tree.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_tree_component__ = __webpack_require__("../../../../../src/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_item_item_component__ = __webpack_require__("../../../../../src/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_models_TreeModel__ = __webpack_require__("../../../../../src/models/TreeModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_interfaces_IAppConfig__ = __webpack_require__("../../../../../src/interfaces/IAppConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_interfaces_IAppConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_interfaces_IAppConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_interfaces_IConfiguration__ = __webpack_require__("../../../../../src/interfaces/IConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_interfaces_IConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_interfaces_IConfiguration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_interfaces_IContextMenu__ = __webpack_require__("../../../../../src/interfaces/IContextMenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_interfaces_IContextMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__src_interfaces_IContextMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_interfaces_IOuterNode__ = __webpack_require__("../../../../../src/interfaces/IOuterNode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_interfaces_IOuterNode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__src_interfaces_IOuterNode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_service_node_service__ = __webpack_require__("../../../../../src/service/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_IApiConfig_service__ = __webpack_require__("../../../../../src/IApiConfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_IApiConfig_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__src_IApiConfig_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_store_treeActions_service__ = __webpack_require__("../../../../../src/store/treeActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_service_nodesDispatcher_service__ = __webpack_require__("../../../../../src/service/nodesDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_store_treeEffects_service__ = __webpack_require__("../../../../../src/store/treeEffects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_store_ITreeState__ = __webpack_require__("../../../../../src/store/ITreeState.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_store_ITreeState___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__src_store_ITreeState__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_store_treeReducer__ = __webpack_require__("../../../../../src/store/treeReducer.ts");
/* unused harmony reexport IApiConfig */
/* unused harmony reexport IAppConfig */
/* unused harmony reexport IConfiguration */
/* unused harmony reexport IContextMenu */
/* unused harmony reexport IOuterNode */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_item_item_component__["a"]; });
/* unused harmony reexport ITreeAction */
/* unused harmony reexport ITreeData */
/* unused harmony reexport ITreeState */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__src_service_node_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service_nodesDispatcher_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__src_store_treeActions_service__["a"]; });
/* unused harmony reexport TreeComponent */
/* unused harmony reexport TreeEffectsService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_14__src_store_treeReducer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__src_models_TreeModel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_tree_module__["a"]; });
















//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/main.js.map

/***/ }),

/***/ "../../../../../src/IApiConfig.service.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/IApiConfig.service.js.map

/***/ }),

/***/ "../../../../../src/dragAndDrop/dragAndDrop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDrop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragAndDrop = /** @class */ (function () {
    function DragAndDrop() {
        this.dropStream$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.dragStream$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.drop$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]();
        this.drop$ = this.dropStream$.withLatestFrom(this.dragStream$, function (dropNode, dragNode) {
            return { dragNode: dragNode, dropNode: dropNode, type: dragNode.type };
        });
    }
    DragAndDrop.prototype.dragStart = function (dragElement) {
        this.dragStream$.next(dragElement);
    };
    DragAndDrop.prototype.dragEnd = function (dropElement) {
        this.dropStream$.next(dropElement);
    };
    DragAndDrop.prototype.getDragStream = function () {
        return this.dragStream$;
    };
    DragAndDrop.prototype.getLastDragElement = function () {
        return this.dragStream$.getValue();
    };
    DragAndDrop.DROP_DATA_TYPE = 'TREE_NODE';
    DragAndDrop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DragAndDrop);
    return DragAndDrop;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/dragAndDrop.service.js.map

/***/ }),

/***/ "../../../../../src/dragAndDrop/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dragAndDrop_service__ = __webpack_require__("../../../../../src/dragAndDrop/dragAndDrop.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dragZone = null;
        this.sourceType = __WEBPACK_IMPORTED_MODULE_1__dragAndDrop_service__["a" /* DragAndDrop */].DROP_DATA_TYPE;
        this.dragEnabled = true;
        renderer.listen(el.nativeElement, 'dragstart', function ($event) {
            if (_this.dragEnabled) {
                _this.onDragStart($event);
            }
        });
        renderer.listen(el.nativeElement, 'dragend', function () {
            // on drag end we reset last drag element (this event is fired after drop)
            _this.dragAndDrop.dragStart(null);
        });
    }
    DraggableDirective.prototype.onDragStart = function ($event) {
        this.dragAndDrop.dragStart({ zoneId: this.dragZone, data: this.data, type: this.sourceType });
        $event.dataTransfer.effectAllowed = 'copy';
        $event.dataTransfer.dropEffect = 'copy';
    };
    DraggableDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.draggable = this.dragEnabled;
        if (!this.data) {
            throw 'DraggableDirective needs data';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragZone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DraggableDirective.prototype, "sourceType", void 0);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ri-draggable]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__dragAndDrop_service__["a" /* DragAndDrop */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dragAndDrop_service__["a" /* DragAndDrop */]) === "function" && _c || Object])
    ], DraggableDirective);
    return DraggableDirective;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/draggable.directive.js.map

/***/ }),

/***/ "../../../../../src/dragAndDrop/droppable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dragAndDrop_service__ = __webpack_require__("../../../../../src/dragAndDrop/dragAndDrop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_IOuterNode__ = __webpack_require__("../../../../../src/interfaces/IOuterNode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_IOuterNode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces_IOuterNode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dropConfig = {};
        this.isDropAllowed = function () {
            var lastDragElement = this.dragAndDrop.getLastDragElement();
            var source = lastDragElement.data;
            var target = this.data;
            var dropZone = this.dropConfig.dropZone;
            if (dropZone && dropZone.length > 0 && dropZone.indexOf(lastDragElement.zoneId) === -1) {
                return false;
            }
            // todo: check drag and drop zones
            return !(source === target || target.id === source.parentId || target.parents.indexOf(source.id) > -1);
        };
        renderer.listen(el.nativeElement, 'dragover', function ($event) {
            $event.preventDefault();
            var dropAllowed = _this.isDropAllowed();
            _this.changeTargetCursor($event, dropAllowed);
            _this.toggleDropClass(dropAllowed);
        });
        renderer.listen(el.nativeElement, 'dragleave', function ($event) {
            $event.preventDefault();
            _this.toggleDropClass(false);
        });
        renderer.listen(el.nativeElement, 'drop', function () {
            _this.toggleDropClass(false);
            if (_this.isDropAllowed()) {
                _this.dragAndDrop.dragEnd({ zones: _this.dropConfig.dropZone, data: _this.data });
            }
        });
    }
    DroppableDirective.prototype.ngOnInit = function () {
        this.initConfig();
        if (!this.data) {
            throw 'DroppableDirective needs data';
        }
    };
    /**
     * Add or remove additional class when drop allowed
     * @param dropAllowed
     */
    DroppableDirective.prototype.toggleDropClass = function (dropAllowed) {
        if (dropAllowed === void 0) { dropAllowed = false; }
        this.renderer.setElementClass(this.el.nativeElement, this.dropConfig.dropAllowedCssClass, dropAllowed);
    };
    /**
     * Change drag event cursor
     * @param $event
     * @param add
     */
    DroppableDirective.prototype.changeTargetCursor = function ($event, add) {
        if (add === void 0) { add = false; }
        var cursorType = add ? 'copy' : 'none';
        $event.dataTransfer.effectAllowed = cursorType;
        $event.dataTransfer.dropEffect = cursorType;
    };
    /**
     * initialize configuration options, use default or passed
     */
    DroppableDirective.prototype.initConfig = function () {
        var defaultConfig = {
            dropAllowedCssClass: 'drop-allowed'
        };
        for (var key in defaultConfig) {
            this.dropConfig[key] = this.dropConfig[key] || defaultConfig[key];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_IOuterNode__["IOuterNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces_IOuterNode__["IOuterNode"]) === "function" && _a || Object)
    ], DroppableDirective.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "dropConfig", void 0);
    DroppableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ri-droppable]'
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__dragAndDrop_service__["a" /* DragAndDrop */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dragAndDrop_service__["a" /* DragAndDrop */]) === "function" && _d || Object])
    ], DroppableDirective);
    return DroppableDirective;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/droppable.directive.js.map

/***/ }),

/***/ "../../../../../src/dragAndDrop/dropzone/dropzone.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isOpen$ | async\" (drop)=\"onDrop($event)\" (dragover)=\"onDragOver($event)\" class=\"dropzone\">\n  {{'RI_TREE_LBL_DROP_ZONE' | translate}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/dragAndDrop/dropzone/dropzone.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropzone {\n  display: inline-block;\n  border: 1px dotted red;\n  padding: 10px;\n  background-color: rgba(255, 0, 0, 0.3);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/dragAndDrop/dropzone/dropzone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_TreeModel__ = __webpack_require__("../../../../../src/models/TreeModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dragAndDrop_service__ = __webpack_require__("../../../../../src/dragAndDrop/dragAndDrop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DropzoneComponent = /** @class */ (function () {
    function DropzoneComponent(dragAndDrop) {
        var _this = this;
        this.dragAndDrop = dragAndDrop;
        this.dropZone = [];
        var isDragStart$ = this.dragAndDrop.getDragStream()
            .map(function (dragElement) {
            var isDragElement = !!dragElement && !!dragElement.data;
            if (isDragElement) {
                if (dragElement.type === __WEBPACK_IMPORTED_MODULE_2__dragAndDrop_service__["a" /* DragAndDrop */].DROP_DATA_TYPE) {
                    var isNotRootElement = dragElement.data.parentId;
                    var isFromCurrentTree = dragElement.data.treeId === _this.treeModel.treeId;
                    return (isNotRootElement && isFromCurrentTree) ? true : false;
                }
                else {
                    return true;
                }
            }
            return false;
        });
        var isDragEnd$ = this.dragAndDrop.drop$
            .map(function (data) {
            return false;
        });
        this.isOpen$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge(isDragStart$, isDragEnd$);
    }
    DropzoneComponent.prototype.onDrop = function () {
        this.dragAndDrop.dragEnd(null);
    };
    DropzoneComponent.prototype.onDragOver = function ($event) {
        $event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_TreeModel__["a" /* TreeModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_TreeModel__["a" /* TreeModel */]) === "function" && _a || Object)
    ], DropzoneComponent.prototype, "treeModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DropzoneComponent.prototype, "dropZone", void 0);
    DropzoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-dropzone',
            template: __webpack_require__("../../../../../src/dragAndDrop/dropzone/dropzone.component.html"),
            styles: [__webpack_require__("../../../../../src/dragAndDrop/dropzone/dropzone.component.less")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dragAndDrop_service__["a" /* DragAndDrop */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dragAndDrop_service__["a" /* DragAndDrop */]) === "function" && _b || Object])
    ], DropzoneComponent);
    return DropzoneComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/dropzone.component.js.map

/***/ }),

/***/ "../../../../../src/interfaces/IAppConfig.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/IAppConfig.js.map

/***/ }),

/***/ "../../../../../src/interfaces/IConfiguration.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/IConfiguration.js.map

/***/ }),

/***/ "../../../../../src/interfaces/IContextMenu.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/IContextMenu.js.map

/***/ }),

/***/ "../../../../../src/interfaces/IOuterNode.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/IOuterNode.js.map

/***/ }),

/***/ "../../../../../src/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-item\"\n     [ngClass]=\"{'tree-item-selected': isSelected}\"\n     (contextmenu)=\"onContextMenu($event)\"\n     ri-droppable\n     ri-draggable\n     [dragZone]=\"treeModel.configuration.dragZone\"\n     [dropConfig]=\"{dropAllowedCssClass: 'drop-allowed', dropZone: treeModel.configuration.dropZone}\"\n     [data]=\"node\"\n>\n  <i *ngIf=\"!isExpanded\" (click)=\"expand()\" class=\"fa fa-caret-right pointer\"></i>\n  <i *ngIf=\"isExpanded\" (click)=\"collapse()\" class=\"fa fa-caret-down pointer\"></i>\n  <span *ngIf=\"!isEditMode\" class=\"tree-item-name\" (click)=\"onSelect()\">{{node.name}}</span>\n  <form name=\"form\">\n    <input #inputElement type=\"text\" class=\"form-control\" *ngIf=\"isEditMode\" [formControl]=\"nameField\"\n           name=\"name\" (keydown)=\"onChange($event)\" (blur)=\"onBlur($event)\"/>\n  </form>\n</div>\n<div class=\"tree\" [@isExpanded]=\"animationState\" (@isExpanded.done)=\"onAnimationDone($event)\">\n  <div *ngIf=\"isExpanded\">\n    <rign-tree-item *ngFor=\"let child of children$ | async\" [node]=\"child\" [treeModel]=\"treeModel\"\n                    [contextMenu]=\"contextMenu\"></rign-tree-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/item/item.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drop-allowed .tree-item-name {\n  background-color: rgba(255, 0, 0, 0.3);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__ = __webpack_require__("../../../../angular2-contextmenu/angular2-contextmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_IOuterNode__ = __webpack_require__("../../../../../src/interfaces/IOuterNode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_IOuterNode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_IOuterNode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__ = __webpack_require__("../../../../../src/store/treeActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_TreeModel__ = __webpack_require__("../../../../../src/models/TreeModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ItemComponent = /** @class */ (function () {
    /**
     * @param contextMenuService
     */
    function ItemComponent(store, treeActionsService, contextMenuService, actions$) {
        var _this = this;
        this.store = store;
        this.treeActionsService = treeActionsService;
        this.contextMenuService = contextMenuService;
        this.actions$ = actions$;
        /**
         * Form field to change data name
         * @type {FormControl}
         */
        this.nameField = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.isEditMode = false;
        this.isSelected = false;
        this.isExpanded = false;
        this.animationState = null;
        this.insert$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__["a" /* TreeActionsService */].TREE_INSERT_NODE)
            .filter(function (action) {
            return action.payload && action.payload.id === _this.node.id;
        });
        this.isStartSave = false;
        this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__["a" /* TreeActionsService */].TREE_EXPAND_NODE)
            .filter(function (action) {
            return !_this.isExpanded && action.payload.node && _this.node.id === action.payload.node.id;
        })
            .subscribe(function () {
            _this.expand();
        });
    }
    ItemComponent.prototype.ngAfterViewInit = function () {
        if (this.isEditMode) {
            this.setFocus();
        }
    };
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.treeModel.configuration.isAnimation) {
            this.animationState = 'inactive';
        }
        this.isEditMode = this.node.id === null;
        this.children$ = this.treeModel.getChildren(this.node.id);
        this.insert$
            .subscribe(function () {
            _this.expand();
        });
        this.treeModel.currentSelectedNode$
            .subscribe(function (node) {
            _this.isSelected = (node && node.id === _this.node.id) ? true : false;
        });
        this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__["a" /* TreeActionsService */].TREE_EDIT_NODE_START)
            .filter(function (action) { return action.payload.node === _this.node; })
            .subscribe(function (action) {
            _this.nameField.setValue(_this.node.name);
            _this.isEditMode = true;
            _this.setFocus();
        });
    };
    ItemComponent.prototype.collapse = function () {
        if (this.treeModel.configuration.isAnimation) {
            this.animationState = 'inactive';
        }
        else {
            this.isExpanded = false;
        }
    };
    ItemComponent.prototype.expand = function () {
        if (this.treeModel.configuration.isAnimation) {
            this.animationState = 'active';
        }
        this.isExpanded = true;
        this.store.dispatch(this.treeActionsService.loadTree(this.treeModel.treeId, this.node.id));
    };
    ItemComponent.prototype.onAnimationDone = function ($event) {
        if ($event.toState === 'inactive') {
            this.isExpanded = false;
        }
    };
    ItemComponent.prototype.onBlur = function () {
        if (this.isStartSave) {
            this.isStartSave = false;
        }
        else {
            this.undoChanges();
        }
    };
    ItemComponent.prototype.onChange = function (event) {
        event.stopPropagation();
        if (event.keyCode === 27) {
            this.undoChanges();
        }
        else if (event.keyCode === 13) {
            this.isStartSave = true;
            var node = {
                id: this.node.id,
                treeId: this.node.treeId,
                name: this.nameField.value,
                parentId: this.node.parentId,
                children: this.node.children,
                parents: this.node.parents
            };
            this.store.dispatch(this.treeActionsService.saveNode(this.treeModel.treeId, node));
            this.isEditMode = false;
        }
    };
    ItemComponent.prototype.onContextMenu = function ($event) {
        if (!this.treeModel.configuration.disableContextMenu) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: $event,
                item: this.node
            });
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    ItemComponent.prototype.onSelect = function () {
        this.treeModel.currentSelectedNode$.next(this.isSelected ? null : this.node);
    };
    ItemComponent.prototype.isNewNode = function () {
        return this.node.id === null;
    };
    ItemComponent.prototype.setFocus = function () {
        var _this = this;
        setTimeout(function () { return _this.input.nativeElement.focus(); });
    };
    ItemComponent.prototype.undoChanges = function () {
        this.isEditMode = false;
        if (this.isNewNode()) {
            this.store.dispatch(this.treeActionsService.deleteNode(this.treeModel.treeId, this.node));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputElement'),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_IOuterNode__["IOuterNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_IOuterNode__["IOuterNode"]) === "function" && _a || Object)
    ], ItemComponent.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__models_TreeModel__["a" /* TreeModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__models_TreeModel__["a" /* TreeModel */]) === "function" && _b || Object)
    ], ItemComponent.prototype, "treeModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__["ContextMenuComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__["ContextMenuComponent"]) === "function" && _c || Object)
    ], ItemComponent.prototype, "contextMenu", void 0);
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'rign-tree-item',
            template: __webpack_require__("../../../../../src/item/item.component.html"),
            styles: [__webpack_require__("../../../../../src/item/item.component.less")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["j" /* trigger */])('isExpanded', [
                    Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["h" /* style */])({
                        height: 0,
                        opacity: 0,
                        transform: 'scaleY(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["h" /* style */])({
                        transform: 'scaleY(1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('300ms')),
                    Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('300ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__["a" /* TreeActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__["a" /* TreeActionsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__["ContextMenuService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__["ContextMenuService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _g || Object])
    ], ItemComponent);
    return ItemComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/item.component.js.map

/***/ }),

/***/ "../../../../../src/models/TreeModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);

var TreeModel = /** @class */ (function () {
    function TreeModel(nodes$, configuration) {
        this.nodes$ = nodes$;
        this.configuration = configuration;
        this.currentSelectedNode$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.initConfiguration();
    }
    Object.defineProperty(TreeModel.prototype, "treeId", {
        get: function () {
            return this.configuration.treeId;
        },
        enumerable: true,
        configurable: true
    });
    TreeModel.prototype.getRootNodes = function () {
        return this.getChildren(null);
    };
    TreeModel.prototype.getChildren = function (nodeId) {
        var _this = this;
        return this.nodes$
            .map(function (state) { return _this.getNodesByParentId(state, nodeId); })
            .map(function (nodes) {
            return nodes.sort(_this.sortNodes);
        });
    };
    TreeModel.prototype.initConfiguration = function () {
        var defaultConfiguration = {
            disableMoveNodes: false,
            dragZone: null,
            dropZone: null,
            treeId: 'tree',
            showAddButton: true,
            isAnimation: false,
        };
        for (var key in defaultConfiguration) {
            if (this.configuration[key] === undefined) {
                this.configuration[key] = defaultConfiguration[key];
            }
        }
    };
    TreeModel.prototype.getNodesByParentId = function (state, id) {
        return Object.keys(state)
            .filter(function (key) { return state[key].parentId === id; })
            .map(function (key) { return state[key]; });
    };
    TreeModel.prototype.sortNodes = function (first, second) {
        if (second.id === null) {
            return 1;
        }
        return first.name > second.name ? 1 : -1;
    };
    return TreeModel;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/TreeModel.js.map

/***/ }),

/***/ "../../../../../src/service/node.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
        this.apiConfig = {
            addUrl: '/api/nodes',
            getUrl: '/api/nodes',
            moveUrl: '/api/nodes/move',
            updateUrl: '/api/nodes',
            removeUrl: '/api/nodes',
        };
    }
    NodeService.prototype.load = function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('nodeId', nodeId);
        var options = {
            search: params
        };
        return this.http.get(this.getPath('GET', nodeId), options)
            .map(function (res) {
            var body = res.json();
            return body || [];
        });
    };
    NodeService.prototype.add = function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        var data = {
            node: node,
            parentNodeId: parentNodeId
        };
        return this.http.post(this.getPath('CREATE', parentNodeId), data)
            .map(function (res) {
            var body = res.json();
            return body || [];
        });
    };
    NodeService.prototype.move = function (srcNode, targetNode) {
        var srcId = srcNode.id;
        var targetId = targetNode ? targetNode.id : null;
        return this.http.put(this.getPath('MOVE', srcId, targetId), { source: srcId, target: targetId })
            .map(function (res) {
            var body = res.json();
            return body || [];
        });
    };
    NodeService.prototype.update = function (node) {
        return this.http.put(this.getPath('UPDATE', node.id), node)
            .map(function (res) {
            var body = res.json();
            return body || [];
        });
    };
    NodeService.prototype.remove = function (nodeId) {
        return this.http.delete(this.getPath('REMOVE', nodeId), { body: { nodeId: nodeId } })
            .map(function (res) {
            var body = res.json();
            return body || [];
        });
    };
    /**
     *
     * Replace in url nodeIds
     *
     * @param type
     * @param nodeId
     * @param destNodeId
     * @returns {void|string|any}
     */
    NodeService.prototype.getPath = function (type, nodeId, destNodeId) {
        if (destNodeId === void 0) { destNodeId = null; }
        if (!this.apiConfig) {
            throw 'No API configuration for Tree';
        }
        var urlMap = {
            'GET': this.apiConfig.getUrl,
            'CREATE': this.apiConfig.addUrl,
            'REMOVE': this.apiConfig.removeUrl,
            'UPDATE': this.apiConfig.updateUrl,
            'MOVE': this.apiConfig.moveUrl
        };
        var path = this.replaceNodeId(urlMap[type], nodeId);
        if (destNodeId) {
            path = this.replaceDestNodeId(path, destNodeId);
        }
        return path;
    };
    NodeService.prototype.replaceNodeId = function (url, nodeId) {
        return url.replace('{nodeId}', nodeId);
    };
    NodeService.prototype.replaceDestNodeId = function (url, nodeId) {
        return url.replace('{destNodeId}', nodeId);
    };
    NodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], NodeService);
    return NodeService;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/node.service.js.map

/***/ }),

/***/ "../../../../../src/service/nodesDispatcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeDispatcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_service__ = __webpack_require__("../../../../../src/service/node.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeDispatcherService = /** @class */ (function () {
    function NodeDispatcherService(nodeService) {
        this.nodeService = nodeService;
        this.services = {};
        this.services['tree'] = nodeService;
    }
    NodeDispatcherService.prototype.register = function (key, service) {
        this.services[key] = service;
        return this;
    };
    NodeDispatcherService.prototype.unregister = function (key) {
        if (this.services[key]) {
            delete this.services[key];
        }
        else {
            console.warn('[NodeDispatcherService] No service for key ' + key);
        }
        return this;
    };
    NodeDispatcherService.prototype.get = function (key) {
        if (this.services[key]) {
            return this.services[key];
        }
        else {
            throw '[NodeDispatcherService] No service for key ' + key;
        }
    };
    NodeDispatcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__node_service__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__node_service__["a" /* NodeService */]) === "function" && _a || Object])
    ], NodeDispatcherService);
    return NodeDispatcherService;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/nodesDispatcher.service.js.map

/***/ }),

/***/ "../../../../../src/store/ITreeState.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/ITreeState.js.map

/***/ }),

/***/ "../../../../../src/store/treeActions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TreeActionsService = /** @class */ (function () {
    function TreeActionsService() {
    }
    TreeActionsService_1 = TreeActionsService;
    TreeActionsService.prototype.registerTree = function (treeId) {
        return {
            type: TreeActionsService_1.TREE_REGISTER,
            payload: {
                treeId: treeId
            }
        };
    };
    TreeActionsService.prototype.editNodeStart = function (node) {
        return {
            type: TreeActionsService_1.TREE_EDIT_NODE_START,
            payload: {
                node: node,
                treeId: node.treeId
            }
        };
    };
    TreeActionsService.prototype.saveNode = function (treeId, node) {
        return {
            type: TreeActionsService_1.TREE_SAVE_NODE,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    TreeActionsService.prototype.saveNodeSuccess = function (treeId, oldNode, node) {
        return {
            type: TreeActionsService_1.TREE_SAVE_NODE_SUCCESS,
            payload: {
                treeId: treeId,
                oldNode: oldNode,
                node: node
            }
        };
    };
    TreeActionsService.prototype.saveNodeError = function (treeId, node) {
        return {
            type: TreeActionsService_1.TREE_SAVE_NODE_ERROR,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    TreeActionsService.prototype.deleteNode = function (treeId, node) {
        return {
            type: TreeActionsService_1.TREE_DELETE_NODE,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    TreeActionsService.prototype.expandNode = function (treeId, node) {
        return {
            type: TreeActionsService_1.TREE_EXPAND_NODE,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    TreeActionsService.prototype.deleteNodeSuccess = function (treeId, node) {
        return {
            type: TreeActionsService_1.TREE_DELETE_NODE_SUCCESS,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    TreeActionsService.prototype.deleteNodeError = function (treeId, node) {
        return {
            type: TreeActionsService_1.TREE_DELETE_NODE_ERROR,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    TreeActionsService.prototype.insertNode = function (treeId, parentId) {
        return {
            type: TreeActionsService_1.TREE_INSERT_NODE,
            payload: {
                treeId: treeId,
                id: parentId
            }
        };
    };
    TreeActionsService.prototype.loadTree = function (treeId, id) {
        return {
            type: TreeActionsService_1.TREE_LOAD,
            payload: {
                treeId: treeId,
                id: id
            }
        };
    };
    TreeActionsService.prototype.loadTreeSuccess = function (treeId, id, nodes) {
        return {
            type: TreeActionsService_1.TREE_LOAD_SUCCESS,
            payload: {
                treeId: treeId,
                id: id,
                nodes: nodes
            }
        };
    };
    TreeActionsService.prototype.loadTreeError = function (treeId, id) {
        return {
            type: TreeActionsService_1.TREE_LOAD_ERROR,
            payload: {
                treeId: treeId,
                id: id
            }
        };
    };
    TreeActionsService.prototype.moveNode = function (type, treeId, source, target) {
        return {
            type: TreeActionsService_1.TREE_MOVE_NODE,
            payload: {
                sourceOfDroppedData: type,
                treeId: treeId,
                oldNode: source,
                node: target
            }
        };
    };
    TreeActionsService.prototype.moveNodeSuccess = function (treeId, source, target) {
        return {
            type: TreeActionsService_1.TREE_MOVE_NODE_SUCCESS,
            payload: {
                treeId: treeId,
                source: source,
                target: target
            }
        };
    };
    TreeActionsService.prototype.moveNodeError = function (treeId, source, target) {
        return {
            type: TreeActionsService_1.TREE_MOVE_NODE_ERROR,
            payload: {
                treeId: treeId,
                source: source,
                target: target
            }
        };
    };
    TreeActionsService.TREE_SAVE_NODE = 'TREE_SAVE_NODE';
    TreeActionsService.TREE_SAVE_NODE_SUCCESS = 'TREE_SAVE_NODE_SUCCESS';
    TreeActionsService.TREE_SAVE_NODE_ERROR = 'TREE_SAVE_NODE_ERROR';
    TreeActionsService.TREE_DELETE_NODE = 'TREE_DELETE_NODE';
    TreeActionsService.TREE_DELETE_NODE_SUCCESS = 'TREE_DELETE_NODE_SUCCESS';
    TreeActionsService.TREE_DELETE_NODE_ERROR = 'TREE_DELETE_NODE_ERROR';
    TreeActionsService.TREE_EDIT_NODE_START = 'TREE_EDIT_NODE_START';
    TreeActionsService.TREE_EXPAND_NODE = 'TREE_EXPAND_NODE';
    TreeActionsService.TREE_INSERT_NODE = 'TREE_INSERT_NODE';
    TreeActionsService.TREE_LOAD = 'TREE_LOAD';
    TreeActionsService.TREE_LOAD_SUCCESS = 'TREE_LOAD_SUCCESS';
    TreeActionsService.TREE_LOAD_ERROR = 'TREE_LOAD_ERROR';
    TreeActionsService.TREE_MOVE_NODE = 'TREE_MOVE_NODE';
    TreeActionsService.TREE_MOVE_NODE_SUCCESS = 'TREE_MOVE_NODE_SUCCESS';
    TreeActionsService.TREE_MOVE_NODE_ERROR = 'TREE_MOVE_NODE_ERROR';
    TreeActionsService.TREE_REGISTER = 'TREE_REGISTER';
    TreeActionsService = TreeActionsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TreeActionsService);
    return TreeActionsService;
    var TreeActionsService_1;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeActions.service.js.map

/***/ }),

/***/ "../../../../../src/store/treeEffects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeEffectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treeActions_service__ = __webpack_require__("../../../../../src/store/treeActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_nodesDispatcher_service__ = __webpack_require__("../../../../../src/service/nodesDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dragAndDrop_dragAndDrop_service__ = __webpack_require__("../../../../../src/dragAndDrop/dragAndDrop.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeEffectsService = /** @class */ (function () {
    function TreeEffectsService(actions$, treeActions, nodeDispatcherService) {
        var _this = this;
        this.actions$ = actions$;
        this.treeActions = treeActions;
        this.nodeDispatcherService = nodeDispatcherService;
        this.register$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__treeActions_service__["a" /* TreeActionsService */].TREE_REGISTER)
            .map(function (action) { return _this.treeActions.loadTree(action.payload.treeId, null); });
        this.load$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__treeActions_service__["a" /* TreeActionsService */].TREE_LOAD)
            .mergeMap(function (action) { return _this.loadNodes(action.payload.treeId, action.payload.id)
            .map(function (nodesData) { return _this.treeActions.loadTreeSuccess(action.payload.treeId, action.payload.id, nodesData); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.treeActions.loadTreeError(action.payload.treeId, action.payload.id)); }); });
        this.delete$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__treeActions_service__["a" /* TreeActionsService */].TREE_DELETE_NODE)
            .switchMap(function (action) { return _this.deleteNode(action.payload.treeId, action.payload.node)
            .map(function () { return _this.treeActions.deleteNodeSuccess(action.payload.treeId, action.payload.node); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.treeActions.deleteNodeError(action.payload.treeId, action.payload.node)); }); });
        this.save$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__treeActions_service__["a" /* TreeActionsService */].TREE_SAVE_NODE)
            .switchMap(function (action) { return _this.saveNode(action.payload.treeId, action.payload.node)
            .map(function (node) { return _this.treeActions.saveNodeSuccess(action.payload.treeId, action.payload.node, node); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.treeActions.saveNodeError(action.payload.treeId, action.payload.node)); }); });
        this.move$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__treeActions_service__["a" /* TreeActionsService */].TREE_MOVE_NODE)
            .filter(function (action) {
            return action.payload.sourceOfDroppedData === __WEBPACK_IMPORTED_MODULE_5__dragAndDrop_dragAndDrop_service__["a" /* DragAndDrop */].DROP_DATA_TYPE;
        })
            .switchMap(function (action) { return _this.moveNode(action.payload.treeId, action.payload.oldNode, action.payload.node)
            .map(function (node) {
            return {
                treeId: action.payload.treeId,
                oldNode: action.payload.oldNode,
                node: node
            };
        })
            .catch(function () {
            _this.treeActions.moveNodeError(action.payload.treeId, action.payload.oldNode, action.payload.node);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(action.payload);
        }); })
            .mergeMap(function (data) {
            return [
                _this.treeActions.moveNodeSuccess(data.treeId, data.oldNode, data.node),
                _this.treeActions.loadTree(data.treeId, data.node.parentId)
            ];
        });
    }
    TreeEffectsService.prototype.deleteNode = function (treeId, node) {
        var nodeService = this.nodeDispatcherService.get(treeId);
        return node.id ? nodeService.remove(node.id) : __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(node);
    };
    TreeEffectsService.prototype.loadNodes = function (treeId, id) {
        var nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.load(id);
    };
    TreeEffectsService.prototype.saveNode = function (treeId, node) {
        var nodeService = this.nodeDispatcherService.get(treeId);
        if (node.id) {
            return nodeService.update(node);
        }
        else {
            return nodeService.add(node, node.parentId);
        }
    };
    TreeEffectsService.prototype.moveNode = function (treeId, source, target) {
        var nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.move(source, target);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "register$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "delete$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "save$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "move$", void 0);
    TreeEffectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__treeActions_service__["a" /* TreeActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__treeActions_service__["a" /* TreeActionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_nodesDispatcher_service__["a" /* NodeDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_nodesDispatcher_service__["a" /* NodeDispatcherService */]) === "function" && _c || Object])
    ], TreeEffectsService);
    return TreeEffectsService;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeEffects.service.js.map

/***/ }),

/***/ "../../../../../src/store/treeReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = treeReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__treeActions_service__ = __webpack_require__("../../../../../src/store/treeActions.service.ts");

function copyState(state, treeId) {
    if (treeId === void 0) { treeId = null; }
    var newState = {};
    // todo: find better way to clone object
    if (treeId) {
        Object.keys(state)
            .filter(function (key) { return key !== treeId; })
            .forEach(function (key) { return newState[key] = state[key]; });
        newState[treeId] = {};
        Object.keys(state[treeId])
            .forEach(function (key) { return newState[treeId][key] = state[treeId][key]; });
    }
    else {
        newState = state;
    }
    return newState;
}
function removeNode(state, action) {
    var newState = copyState(state, action.payload.treeId);
    var parentId = action.payload.parentId;
    var treeId = action.payload.treeId;
    var treeState = newState[treeId];
    var node = action.payload.node;
    delete treeState[node.id];
    if (parentId) {
        var parent = treeState[node.parentId];
        parent.children.splice(parent.children.indexOf(node.parentId), 1);
    }
    return newState;
}
function loadNodes(state, action) {
    var newState = copyState(state, action.payload.treeId);
    var parent = null;
    var treeId = action.payload.treeId;
    var parentId = action.payload.id;
    if (parentId) {
        parent = newState[treeId][parentId];
        parent.children = [];
    }
    else {
        newState[treeId] = {};
    }
    action.payload.nodes.forEach(function (nodeData) {
        nodeData.treeId = treeId;
        if (parent) {
            parent.children.push(nodeData.id);
            nodeData.parents = parent.parents.concat([parent.id]);
        }
        else {
            nodeData.parents = [];
        }
        newState[treeId][nodeData.id] = nodeData;
    });
    return newState;
}
function insertNode(state, action) {
    var newState = copyState(state, action.payload.treeId);
    var newNode = {
        id: null,
        treeId: action.payload.treeId,
        name: 'New data',
        parentId: action.payload.id,
        children: [],
        parents: []
    };
    newState[action.payload.treeId][0] = newNode;
    return newState;
}
function saveNode(state, action) {
    var newState = copyState(state, action.payload.treeId);
    var old = action.payload.oldNode;
    var newNode = action.payload.node;
    var treeId = action.payload.treeId;
    var treeState = newState[treeId];
    if (treeState[0]) {
        delete treeState[0];
    }
    else {
        delete treeState[old.id];
    }
    var nodeId = newNode.id;
    treeState[nodeId] = newNode;
    var parentId = newNode.parentId;
    if (parentId) {
        if (treeState[parentId]) {
            if (!treeState[parentId].children) {
                treeState[parentId].children = [];
            }
            treeState[parentId].children.push(nodeId);
        }
        newNode.children = Object.keys(state[treeId])
            .filter(function (key) { return key === nodeId; });
    }
    return newState;
}
function moveNode(state, action) {
    var newState = copyState(state, action.payload.treeId);
    var oldNode = action.payload.source;
    var newNode = action.payload.target;
    var treeId = action.payload.treeId;
    var treeState = newState[treeId];
    // remove old nodes
    delete treeState[oldNode.id];
    // remove info about removed child
    if (oldNode.parentId) {
        var parent = treeState[oldNode.parentId];
        parent.children.splice(parent.children.indexOf(oldNode.id), 1);
    }
    // add data
    treeState[newNode.id] = newNode;
    if (newNode.parentId) {
        var newParent = treeState[newNode.parentId];
        if (newParent.children) {
            newParent.children.push(newNode.id);
        }
        newNode.parents = newParent.parents.concat([newParent.id]);
    }
    else {
        newNode.parents = [];
    }
    return newState;
}
function registerTree(state, action) {
    var newState = copyState(state);
    newState[action.payload.treeId] = {};
    return newState;
}
function treeReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_REGISTER:
            return registerTree(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_SAVE_NODE_SUCCESS:
            return saveNode(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_DELETE_NODE_SUCCESS:
            return removeNode(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_INSERT_NODE:
            return insertNode(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_LOAD_SUCCESS:
            return loadNodes(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_MOVE_NODE_SUCCESS:
            return moveNode(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_DELETE_NODE:
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_EDIT_NODE_START:
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_EXPAND_NODE:
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_LOAD:
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_MOVE_NODE:
        case __WEBPACK_IMPORTED_MODULE_0__treeActions_service__["a" /* TreeActionsService */].TREE_SAVE_NODE:
            return state;
        default:
            return state;
    }
}
//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/treeReducer.js.map

/***/ }),

/***/ "../../../../../src/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tree\">\n  <button *ngIf=\"treeModel.configuration.showAddButton\" class=\"btn btn-default\" (click)=\"onAdd()\">\n    <i class=\"fa fa-plus\"></i> {{'RI_TREE_LBL_ADD_NODE' | translate}}\n  </button>\n  <div #customTemplate><!-- no space --><ng-content></ng-content><!-- no space --></div>\n  <div *ngIf=\"customTemplate.childNodes.length === 0\"><rign-tree-item *ngFor=\"let node of treeModel.getRootNodes() | async\" [node]=\"node\" [treeModel]=\"treeModel\"\n                    [contextMenu]=\"contextMenu\"></rign-tree-item>\n  </div>\n  <ri-dropzone [treeModel]=\"treeModel\"></ri-dropzone>\n  <context-menu #contextMenu>\n    <template *ngFor=\"let menuItem of menuList\" contextMenuItem let-item\n              (execute)=\"onContextMenuClick(menuItem.name, $event.item)\">\n      <span class=\"{{menuItem.iconCls}}\" style=\"width: 20px; display: inline-block;\"></span>\n      {{menuItem.text | translate}}\n    </template>\n  </context-menu>\n</div>\n"

/***/ }),

/***/ "../../../../../src/tree.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tree {\n  list-style-type: none;\n  margin: 0;\n  padding-left: 0;\n  position: relative;\n}\n.tree .dropdown {\n  position: inherit;\n}\n.tree .dropdown-menu {\n  position: absolute !important;\n}\n.tree .pointer {\n  cursor: pointer;\n}\n.tree .tree {\n  margin-left: 20px;\n}\n.tree .tree-edit-btn,\n.tree .tree-remove-btn {\n  display: none;\n}\n.tree .tree-item {\n  padding: 2px 0;\n}\n.tree .tree-item.tree-item-selected > .tree-item-name {\n  padding: 0 1px;\n  border: 1px solid #4684ee;\n  background-color: #549dee;\n}\n.tree .tree-item i {\n  width: 8px !important;\n  text-align: center;\n}\n.tree .tree-item .no-children {\n  display: inline-block;\n  width: 8px;\n}\n.tree .tree-item .tree-item-name {\n  display: inline-block;\n  line-height: 22px;\n  height: 22px;\n  padding: 0 2px;\n  cursor: pointer;\n}\n.tree .tree-item .tree-item-name:hover {\n  background-color: rgba(161, 197, 238, 0.2);\n}\n.tree .tree-item .tree-item-name:hover .tree-edit-btn,\n.tree .tree-item .tree-item-name:hover .tree-remove-btn {\n  display: inline-block;\n}\n.tree .tree-item form {\n  display: inline-block;\n}\n.tree .tree-item form input {\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_TreeModel__ = __webpack_require__("../../../../../src/models/TreeModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__ = __webpack_require__("../../../../angular2-contextmenu/angular2-contextmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dragAndDrop_dragAndDrop_service__ = __webpack_require__("../../../../../src/dragAndDrop/dragAndDrop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__ = __webpack_require__("../../../../../src/store/treeActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeComponent = /** @class */ (function () {
    function TreeComponent(store, treeActions, dragAndDrop) {
        this.store = store;
        this.treeActions = treeActions;
        this.dragAndDrop = dragAndDrop;
        /**
         * List of default options for context menu
         *
         * @type {{name: string; text: string; iconCls: string}[]}
         */
        this.defaultOptions = [
            {
                name: 'onEdit',
                text: 'RI_TREE_LBL_EDIT_NODE',
                iconCls: 'fa fa-edit'
            },
            {
                name: 'onDelete',
                text: 'RI_TREE_LBL_REMOVE_NODE',
                iconCls: 'fa fa-trash'
            }
        ];
        /**
         * List of context menu items
         *
         * @type {Array}
         */
        this.menuList = [];
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.registerMove();
    };
    TreeComponent.prototype.ngOnChanges = function (data) {
        var _this = this;
        this.menuList = [];
        this.defaultOptions.forEach(function (item) { return _this.menuList.push(item); });
    };
    TreeComponent.prototype.onAdd = function () {
        var parent = this.treeModel.currentSelectedNode$.getValue();
        var parentId = parent ? parent.id : null;
        this.store.dispatch(this.treeActions.expandNode(this.treeModel.treeId, parent));
        this.store.dispatch(this.treeActions.insertNode(this.treeModel.treeId, parentId));
    };
    /**
     * On select item from context menu
     *
     * @param name - name of the event
     * @param node - data item
     */
    TreeComponent.prototype.onContextMenuClick = function (name, node) {
        switch (name) {
            case 'onEdit':
                event.stopPropagation();
                this.store.dispatch(this.treeActions.editNodeStart(node));
                break;
            case 'onDelete':
                this.store.dispatch(this.treeActions.deleteNode(this.treeModel.treeId, node));
                break;
            default:
                console.warn('Unknown context menu action: ' + name);
        }
    };
    /**
     * Register data "move event"
     */
    TreeComponent.prototype.registerMove = function () {
        var _this = this;
        if (this.treeModel.configuration.disableMoveNodes) {
            return;
        }
        this.dragAndDrop.drop$
            .filter(function (data) {
            if (data.type === __WEBPACK_IMPORTED_MODULE_3__dragAndDrop_dragAndDrop_service__["a" /* DragAndDrop */].DROP_DATA_TYPE) {
                if (data.dropNode) {
                    return data.dropNode.data.treeId === _this.treeModel.treeId;
                }
                else {
                    return data.dragNode.data.treeId === _this.treeModel.treeId;
                }
            }
            else {
                if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
                    return false;
                }
                return true;
            }
        })
            .subscribe(function (data) {
            var dropNode = data.dropNode ? data.dropNode.data : null;
            _this.store.dispatch(_this.treeActions.moveNode(data.type, _this.treeModel.treeId, data.dragNode.data, dropNode));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_TreeModel__["a" /* TreeModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_TreeModel__["a" /* TreeModel */]) === "function" && _a || Object)
    ], TreeComponent.prototype, "treeModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contextMenu'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__["ContextMenuComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_contextmenu__["ContextMenuComponent"]) === "function" && _b || Object)
    ], TreeComponent.prototype, "contextMenu", void 0);
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'rign-tree',
            template: __webpack_require__("../../../../../src/tree.component.html"),
            styles: [__webpack_require__("../../../../../src/tree.component.less")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__["a" /* TreeActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__store_treeActions_service__["a" /* TreeActionsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__dragAndDrop_dragAndDrop_service__["a" /* DragAndDrop */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dragAndDrop_dragAndDrop_service__["a" /* DragAndDrop */]) === "function" && _e || Object])
    ], TreeComponent);
    return TreeComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/tree.component.js.map

/***/ }),

/***/ "../../../../../src/tree.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item_component__ = __webpack_require__("../../../../../src/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_node_service__ = __webpack_require__("../../../../../src/service/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_contextmenu__ = __webpack_require__("../../../../angular2-contextmenu/angular2-contextmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_contextmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_contextmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tree_component__ = __webpack_require__("../../../../../src/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dragAndDrop_dragAndDrop_service__ = __webpack_require__("../../../../../src/dragAndDrop/dragAndDrop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dragAndDrop_draggable_directive__ = __webpack_require__("../../../../../src/dragAndDrop/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dragAndDrop_droppable_directive__ = __webpack_require__("../../../../../src/dragAndDrop/droppable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragAndDrop_dropzone_dropzone_component__ = __webpack_require__("../../../../../src/dragAndDrop/dropzone/dropzone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_treeActions_service__ = __webpack_require__("../../../../../src/store/treeActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_treeEffects_service__ = __webpack_require__("../../../../../src/store/treeEffects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_nodesDispatcher_service__ = __webpack_require__("../../../../../src/service/nodesDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var TreeModule = /** @class */ (function () {
    function TreeModule(translate) {
        this.translate = translate;
        this.setTranslationForEN();
        this.setTranslationForPL();
        this.translate.use('en');
    }
    TreeModule.prototype.setTranslationForPL = function () {
        this.translate.setTranslation('pl', {
            RI_TREE_LBL_ADD_NODE: 'Dodaj',
            RI_TREE_LBL_EDIT_NODE: 'Edytuj',
            RI_TREE_LBL_REMOVE_NODE: 'Usuń',
            RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj'
        });
    };
    TreeModule.prototype.setTranslationForEN = function () {
        this.translate.setTranslation('en', {
            RI_TREE_LBL_ADD_NODE: 'Add data',
            RI_TREE_LBL_EDIT_NODE: 'Edit data',
            RI_TREE_LBL_REMOVE_NODE: 'Delete data',
            RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level'
        });
    };
    TreeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_contextmenu__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_16__store_treeEffects_service__["a" /* TreeEffectsService */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["g" /* StoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__tree_component__["a" /* TreeComponent */], __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */], __WEBPACK_IMPORTED_MODULE_10__dragAndDrop_draggable_directive__["a" /* DraggableDirective */], __WEBPACK_IMPORTED_MODULE_11__dragAndDrop_droppable_directive__["a" /* DroppableDirective */], __WEBPACK_IMPORTED_MODULE_12__dragAndDrop_dropzone_dropzone_component__["a" /* DropzoneComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_7__tree_component__["a" /* TreeComponent */], __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */], __WEBPACK_IMPORTED_MODULE_10__dragAndDrop_draggable_directive__["a" /* DraggableDirective */], __WEBPACK_IMPORTED_MODULE_11__dragAndDrop_droppable_directive__["a" /* DroppableDirective */], __WEBPACK_IMPORTED_MODULE_12__dragAndDrop_dropzone_dropzone_component__["a" /* DropzoneComponent */], __WEBPACK_IMPORTED_MODULE_8_ng2_dnd__["b" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["g" /* StoreModule */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectsModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__dragAndDrop_dragAndDrop_service__["a" /* DragAndDrop */], __WEBPACK_IMPORTED_MODULE_3__service_node_service__["a" /* NodeService */], __WEBPACK_IMPORTED_MODULE_13__store_treeActions_service__["a" /* TreeActionsService */], __WEBPACK_IMPORTED_MODULE_16__store_treeEffects_service__["a" /* TreeEffectsService */], __WEBPACK_IMPORTED_MODULE_17__service_nodesDispatcher_service__["a" /* NodeDispatcherService */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateService */]) === "function" && _a || Object])
    ], TreeModule);
    return TreeModule;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-tree/demo/src/tree.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../demo/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map