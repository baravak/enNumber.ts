"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lib_1 = tslib_1.__importDefault(require("./lib"));
function arToEnNumber(text) {
    return (0, lib_1.default)('٠١٢٣٤٥٦٧٨٩'.split(''), text);
}
exports.default = arToEnNumber;
