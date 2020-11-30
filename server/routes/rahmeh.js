// var express = require('express');
// var bodyParser = require('body-parser');
// // UNCOMMENT THE DATABASE YOU'D LIKE TO USE
//  //var items = require('../database-mysql/index.js');
//  const path = require('path');
//  var mysql = require('mysql');
//  var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '0000',
//    database: 'faz3etak'
//  });
// var app = express();
// // UNCOMMENT FOR REACT
//  app.use(express.static(__dirname + '/../react-client/dist'));
//  app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({ extended:false }));
// //  if (context.url) {
// //   return res.redirect(301, context.url);
// // }
// app.get('*', (req,res) =>{
//   console.log('doneeee');
// });
//  app.delete('/delete',(req,res) => {
//   console.log(req.body.id);
//   connection.query('DELETE FROM `items` WHERE `id`=?', [req.body.id], function (error, results, fields) {
//     console.log("deeeeleeted from database")
//     if (error) throw error;
//     res.end('Record has been deleted!');
//   });
//  });
// app.delete('/api/delete/:id',(req,res) => {
//  const name =req.params.id;
//  const sqlDelete="Delete FROM items where id=?";
//  db.query(sqlDelete,name,(err,resulte)=>{
//    if(err)console.log(err)
//  })
//  console.log('donnnne!!')
// });
// app.listen(3000, function() {
//   console.log('listening on port 3000!');
// });