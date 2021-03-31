const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/bmicalculator', function(req, res)
{
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res)
{
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height * height);
  res.send("BMI je: " + result);
});



app.listen(3000, function()
{
  console.log('Example app listening on port ${port}!');
});
