var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var path = require('path')
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const saltRounds = 10;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/../react-client/dist'));
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + "/../react-client/dist"));

var MyDataBase = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'faz3etak'

});
app.put("/update1", function(req, res) {
    // console.log("hi from server");
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    // const sqlInsert = "INSERT INTO Items( title) VALUES ('${title}')";
    MyDataBase.query(
      "UPDATE items SET  title = (?),description = (?), category = (?) ",
      [title, description, category],
      (err, result) => {
        if (err) console.log(err);
        // console.log("1 record inserted");
      }
    );
    res.send("result");
    // res.end();
  });

  app.post('/insert', (req, res) => {
    console.log ("hiii",req.body)
     const Title=req.body.title;
     const Description=req.body.description;
     const Category= req.body.category;
    // var sql = "INSERT INTO items (title) VALUES (?)";
    MyDataBase.query("INSERT INTO items (title,description,category) VALUES (?,?,?)", [Title , Description , Category],(err,result)=>{
       console.log(err);

       } ) })

       app.get("/search2", (req, res) => {
  var newData=[]
  MyDataBase.query("SELECT * FROM sara", function (err, result, fields) {
    if (err) throw err
    else
    res.send(result)
});  })

app.get("/Items1", (req, res) => {

  MyDataBase.query("SELECT * FROM items", function (err, result, fields) {
    if (err) throw err
    else
    res.send(result)
});  })

app.post("/SignUp1", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    MyDataBase.query(
      "INSERT INTO users (email, password) VALUES (?,?)",
      [email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});
app.delete('/delete1',(req,res) => {
    console.log(req.body.id);
    MyDataBase.query('DELETE FROM `items` WHERE `id`=?', [req.body.id], function (error, results, fields) {
      console.log("deeeeleeted from database")
      if (error) throw error;
      res.end('Record has been deleted!');
    });
   });
  app.delete('/api/delete1/:id',(req,res) => {
   const name =req.params.id;
   const sqlDelete="Delete FROM items where id=?";
   MyDataBase.query(sqlDelete,name,(err,resulte)=>{
     if(err)console.log(err)
   }) })





app.get("/signIN1", (req, res) => {

  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
}
);

app.post("/signIN1", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  MyDataBase.query(
    "SELECT * FROM users WHERE email = ?;",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong email/password combination!" });
            console.log("Wrong email/password combination!")

          }

        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
