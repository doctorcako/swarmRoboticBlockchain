const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json())
const port = 3000;


app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

app.post("/registerEvent",(req,res)=>{
  console.log(req.body)
})
