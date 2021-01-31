"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@babel/polyfill");
require("@nivinjoseph/n-ext");
require("./styles/main.scss");
const $ = require("jquery");
window.jQuery = $;
window.$ = $;
require("material-design-icons/iconfont/material-icons.css");
const n_app_1 = require("@nivinjoseph/n-app");
const Routes = require("./pages/routes");
const pages_1 = require("./pages/pages");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const components_1 = require("./components/components");
console.log(n_app_1.Vue);
class Installer {
    install(registry) {
        n_defensive_1.given(registry, "registry").ensureHasValue().ensureIsObject();
    }
}
const client = new n_app_1.ClientApp("#app", "shell")
    .useInstaller(new Installer())
    .useAccentColor("#93C5FC")
    .registerComponents(...components_1.components)
    .registerPages(...pages_1.pages)
    .useAsInitialRoute(Routes.intro)
    .useAsUnknownRoute(Routes.intro)
    .useHistoryModeRouting();
client.bootstrap();
//# sourceMappingURL=client.js.map