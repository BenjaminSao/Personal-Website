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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroViewModel = void 0;
const n_app_1 = require("@nivinjoseph/n-app");
const Routes = require("../routes");
require("./intro-view.scss");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const animejs_1 = require("animejs");
let IntroViewModel = class IntroViewModel extends n_app_1.PageViewModel {
    constructor(navigationService) {
        super();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    onMount(element) {
        super.onMount(element);
        const textWrapperName = document.querySelector(".ml2");
        if (textWrapperName && textWrapperName.textContent) {
            textWrapperName.innerHTML = textWrapperName.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        const textWrapperDescription = document.querySelector(".ml7 .letters");
        if (textWrapperDescription && textWrapperDescription.textContent) {
            textWrapperDescription.innerHTML = textWrapperDescription.textContent
                .replace(/\S/g, "<span class='letter'>$&</span>");
        }
        animejs_1.default.timeline({ loop: false })
            .add({
            targets: ".ml2 .letter",
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            delay: (el, i) => 70 * i
        }).add({
            targets: ".ml2",
            easing: "easeOutExpo",
        });
        animejs_1.default.timeline({})
            .add({
            targets: ".ml7 .letter",
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 750,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i
        }, 1000).add({
            targets: ".ml7",
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }
};
IntroViewModel = __decorate([
    n_app_1.template(require("./intro-view.html")),
    n_app_1.route(Routes.intro),
    n_ject_1.inject("NavigationService"),
    __metadata("design:paramtypes", [Object])
], IntroViewModel);
exports.IntroViewModel = IntroViewModel;
//# sourceMappingURL=intro-view-model.js.map