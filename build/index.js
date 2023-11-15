"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ar_1 = tslib_1.__importDefault(require("./ar"));
const fa_1 = tslib_1.__importDefault(require("./fa"));
function enNumber(text) {
    const langs = [fa_1.default, ar_1.default];
    langs.forEach(lang => {
        text = lang(text);
    });
    return text;
}
exports.default = enNumber;
