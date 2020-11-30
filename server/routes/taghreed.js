app.put("/update", function(req, res) {
  // console.log("hi from server");
  const title = req.body.title;
  const description = req.body.description;
  const category = req.body.category;
  // const sqlInsert = "INSERT INTO Items( title) VALUES ('${title}')";
  MyDataBase.query(
    "UPDATE sara SET  name = (?),email = (?), phone = (?) ",
    [title, description, category],
    (err, result) => {
      if (err) console.log(err);
      // console.log("1 record inserted");
    }
  );
  res.send("result");
  // res.end();
});