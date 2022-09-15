"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cateAll = void 0;
const databaseConnection_1 = require("./databaseConnection");
function cateAll() {
    const query = `call cateAll();`;
    return (0, databaseConnection_1.conpro)(query);
}
exports.cateAll = cateAll;
