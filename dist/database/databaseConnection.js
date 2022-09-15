"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conpro = void 0;
const mysql = require("mysql");
const dataCon = mysql.createPool({
    host: "avatumble.catfwgqmvd2y.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "avatyetiger",
    port: 3306,
    database: "ava_tumblbug",
    multipleStatements: true,
});
// DB 커넥션 후 Promise 반환
function conpro(query) {
    return new Promise((res, rej) => {
        dataCon.query(query, function (err, rows) {
            if (err) {
                rej(err);
            }
            else {
                //console.log(rows);
                res(rows[0]);
            }
        });
    });
}
exports.conpro = conpro;
