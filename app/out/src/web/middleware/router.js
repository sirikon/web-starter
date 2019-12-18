"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const homeController_1 = __importDefault(require("../controllers/homeController"));
function router(app) {
    const r = new koa_router_1.default();
    r.get('/', homeController_1.default);
    app.use(r.routes()).use(r.allowedMethods());
}
exports.default = router;
