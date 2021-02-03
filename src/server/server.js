"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nivinjoseph/n-ext");
const n_web_1 = require("@nivinjoseph/n-web");
const n_config_1 = require("@nivinjoseph/n-config");
const n_log_1 = require("@nivinjoseph/n-log");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const index_controller_1 = require("./controllers/index-controller");
const logger = new n_log_1.ConsoleLogger(n_log_1.LogDateTimeZone.est);
class Installer {
    install(registry) {
        n_defensive_1.given(registry, "registry").ensureHasValue().ensureIsObject();
        registry
            .registerInstance("Logger", logger);
    }
}
const server = new n_web_1.WebApp(Number.parseInt(n_config_1.ConfigurationManager.getConfig("PORT")), null);
server
    .enableWebPackDevMiddleware()
    .useLogger(logger)
    .useInstaller(new Installer())
    .registerStaticFilePath("src/client/dist", true)
    .registerControllers(index_controller_1.IndexController);
server.bootstrap();
//# sourceMappingURL=server.js.map