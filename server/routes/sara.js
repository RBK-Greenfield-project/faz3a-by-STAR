



app.post('/insert', (req, res) => {
  console.log ("hiii",req.body)
   const Name=req.body.title;
   const Description=req.body.description;
   const Category= req.body.category;
  // var sql = "INSERT INTO items (title) VALUES (?)";
  MyDataBase.query("INSERT INTO sara (name,email,phone) VALUES (?,?,?)", [Name , Description , Category],(err,result)=>{
     console.log(err);

     } )