"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(app) {
    app.use(async (ctx, next) => {
        try {
            await next();
        }
        catch (err) {
            let title = '';
            let message = '';
            title = 'Unexpected error:';
            message = err.stack;
            await ctx.render('error', { title, message });
        }
    });
}
exports.default = errorHandler;
