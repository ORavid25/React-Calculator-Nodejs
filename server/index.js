const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: `http://localhost:3001`,
    credentials: true,
  })
);


// the POST method accepts 3 arguments : n1,n2,operator and return the result for calculation.
app.post(`/calc`, (req, res) => {
  var n1 = parseInt(req.body.firstNum);
  var n2 = parseInt(req.body.secondNum);
  var operator = req.body.operator;
  var result;

  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "/":
      if (n2 === 0) {
        res.json("cannot divide by zero!");
        return;
      }
      result = n1 / n2;
      break;
    case "*":
      result = n1 * n2;
      break;
  }
  console.log("result for calc is", result);
  res.json(result);
  
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});


