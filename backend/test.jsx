// const express = require("express");

// const cors = require("cors");

// const mysql = require("mysql2");

// const app = express();
// app.use(express.json());
// app.use(cors());
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "crud",
// });
// // app.get("/", (req, res) => {
// //   const sql = "SELECT * FROM employee";
// //   db.query(sql, (err, data) => {
// //     if (err) {
// //       console.error(err);
// //       return res.status(500).json("Internal Server Error");
// //     }
// //     return res.json(data);
// //   });
// // });
// // app.listen(8081, () => {
// //   console.log("Come on work dude !! ");
// // });

// db.connect((err) => {
//     if (err) {
//       console.error("Error connecting to MySQL:", err);
//       return;
//     }
//     console.log("Connected to MySQL database!");
//   });
  
//   // Close the database connection (optional)
//   db.end();