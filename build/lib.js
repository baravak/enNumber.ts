"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertPatterns(nonEglish, text) {
    const regExp = new RegExp(`[${nonEglish.join('')}]`, 'gi');
    return text.replace(regExp, (char) => {
        const index = nonEglish.indexOf(char);
        return index.toString();
    });
}
exports.default = convertPatterns;
