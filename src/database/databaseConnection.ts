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
export function conpro(query: string) {
  return new Promise<any>((res, rej) => {
    dataCon.query(query, function (err: any, rows: any) {
      if (err) {
          rej(err);
      } else {
        //console.log(rows);
        res(rows[0]);
      }
    });
  });
}