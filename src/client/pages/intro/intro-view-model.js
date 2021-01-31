"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroViewModel = void 0;
const n_app_1 = require("@nivinjoseph/n-app");
const Routes = require("../routes");
require("./intro-view.scss");
let IntroViewModel = class IntroViewModel extends n_app_1.PageViewModel {
};
IntroViewModel = __decorate([
    n_app_1.template(require("./intro-view.html")),
    n_app_1.route(Routes.intro)
], IntroViewModel);
exports.IntroViewModel = IntroViewModel;
//# sourceMappingURL=intro-view-model.js.map