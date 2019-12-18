"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const koa_views_1 = __importDefault(require("koa-views"));
const faviconsHeaders = getFaviconsHeaders();
function views(app) {
    app.use(koa_views_1.default('./resources/web/views', {
        extension: 'pug',
        map: {
            pug: 'pug',
        },
        options: {
            filters: {
                'inject-favicons-headers': () => faviconsHeaders,
            },
            cache: isProductionEnvironment(),
        },
    }));
}
exports.default = views;
const isProductionEnvironment = () => process.env.NODE_ENV !== 'development';
function getFaviconsHeaders() {
    const headersPath = path_1.default.join('.', 'src', 'web', 'favicons', 'headers.html');
    if (fs_1.default.existsSync(headersPath)) {
        return fs_1.default.readFileSync(headersPath, { encoding: 'utf8' });
    }
    return '';
}
