"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellViewModel = void 0;
const n_app_1 = require("@nivinjoseph/n-app");
require("./shell-view.scss");
let ShellViewModel = class ShellViewModel extends n_app_1.ComponentViewModel {
};
ShellViewModel = __decorate([
    n_app_1.template(require("./shell-view.html")),
    n_app_1.element("shell")
], ShellViewModel);
exports.ShellViewModel = ShellViewModel;
//# sourceMappingURL=shell-view-model.js.map