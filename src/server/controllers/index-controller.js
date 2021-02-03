"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const n_web_1 = require("@nivinjoseph/n-web");
const n_config_1 = require("@nivinjoseph/n-config");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
let IndexController = class IndexController extends n_web_1.Controller {
    constructor(callContext, logger) {
        super();
        n_defensive_1.given(callContext, "callContext").ensureHasValue().ensureIsObject();
        this._callContext = callContext;
        n_defensive_1.given(logger, "logger").ensureHasValue().ensureIsObject();
        this._logger = logger;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const env = n_config_1.ConfigurationManager.getConfig("env");
            if (env !== "dev") {
                const protocol = this._callContext.getRequestHeader("X-Forwarded-Proto");
                if (protocol !== "https")
                    this.redirect("https" + this._callContext.href.substr(4));
            }
            return {
                config: {}
            };
        });
    }
};
IndexController = __decorate([
    n_web_1.route("/*"),
    n_web_1.httpGet,
    n_web_1.view("~/src/client/dist/index-view.html"),
    n_ject_1.inject("CallContext", "Logger"),
    __metadata("design:paramtypes", [Object, Object])
], IndexController);
exports.IndexController = IndexController;
//# sourceMappingURL=index-controller.js.map