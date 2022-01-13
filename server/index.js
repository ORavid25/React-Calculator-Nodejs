const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Calculator NodeJS API ",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
  cors({
    origin: `http://localhost:3001`,
    credentials: true,
  })
);


/**
 * @swagger
 * components:
 *      schemas:
 *          calc: 
 *             type: object
 *             properties:
 *                       n1: 
 *                         type: integer
 *                       n2: 
 *                         type: integer
 *                       operator: 
 *                         type: string
 * 
 */





/**
 * @swagger
 * /api:
 *    get:
 *        summary: used to check if get method is working or not
 *        description: sending message from nodejs server
 *        responses:
 *            200:
 *                description: this api is used to fetch data from nodejs server
 *
 */
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

/**
 * @swagger
 * /calc:
 *      post:
 *         summary: used to insert data to make calculation between 2 numbers
 *         description: 'the POST method accepts 3 arguments : n1,n2,operator and  the result for calculation.'
 *         responses:
 *             200:
 *                 description: returns the sum of 2 numbers
 *         requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                     schema:
 *                        $ref: '#components/schemas/calc'
 */

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
  // console.log("result for calc is", result);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
