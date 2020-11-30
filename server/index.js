var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/../react-client/dist'));

var MyDataBase = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'faz3etak'

});

app.get('*', (req,res) =>{
    console.log('doneeee');
  });
  // //Insert an items
  app.post('/insert', (req, res) => {
    console.log ("hiii",req.body)
     const Title=req.body.title;
    // var sql = "INSERT INTO items (title) VALUES (?)";
    MyDataBase.query("INSERT INTO sara (name) VALUES (?)", [Title],(err,result)=>{
       console.log(err);
      //  res.send(result);
      // console.log(err)
       } )
  // res.send("posted")
  //  res.end();
  });
  // app.get('/get', (req, res) => {
  //  var sqlSelect = "SELECT * FROM items ";
  //  MyDataBase.query(sqlSelect,(err,result)=>{
  //    res.send (result );    } )
  // });



app.listen(3000, function() {
  console.log('listening on port 3000!');
});
