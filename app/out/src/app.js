"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const errorHandler_1 = __importDefault(require("./web/middleware/errorHandler"));
const router_1 = __importDefault(require("./web/middleware/router"));
const serveStatic_1 = __importDefault(require("./web/middleware/serveStatic"));
const views_1 = __importDefault(require("./web/middleware/views"));
exports.default = () => {
    const port = getPort();
    const app = new koa_1.default();
    views_1.default(app);
    errorHandler_1.default(app);
    router_1.default(app);
    serveStatic_1.default(app);
    app.listen(port, '0.0.0.0', () => {
        // tslint:disable-next-line: no-console
        console.log(`Listening on port ${port}`);
    });
};
function getPort() {
    if (process.env.PORT) {
        return parseInt(process.env.PORT, 10);
    }
    return 3000;
}
