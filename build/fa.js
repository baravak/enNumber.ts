"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lib_1 = tslib_1.__importDefault(require("./lib"));
function faToEnNumber(text) {
    return (0, lib_1.default)('۰۱۲۳۴۵۶۷۸۹'.split(''), text);
}
exports.default = faToEnNumber;
