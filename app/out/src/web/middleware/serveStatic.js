"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_static_1 = __importDefault(require("koa-static"));
function serveStatic(app) {
    app.use(koa_static_1.default('./resources/web/generated/style'));
    app.use(koa_static_1.default('./resources/web/generated/favicons/files'));
}
exports.default = serveStatic;
