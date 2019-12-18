"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function homeController(ctx) {
    await ctx.render('home');
}
exports.default = homeController;
