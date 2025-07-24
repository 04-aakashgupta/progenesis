const express = require('express');
const body_parser = require('body-parser');
const app = express();
app.use(body_parser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/source/html/math_operation.html")
})


app.post('/math-operation', (req, res) => {
    const num1 = Number(req.body.first_number);
    const num2 = Number(req.body.second_number);


    if (req.body.sub !== undefined) res.send(`Sub Of ${num1} & ${num2} = ${num1 - num2}`)
    else if (req.body.sum !== undefined) res.send(`Sum Of ${num1} & ${num2} = ${num1 + num2}`)
    else if (req.body.mul !== undefined) res.send(`Multiplication Of ${num1} & ${num2} = ${num1 * num2}`)
    else if (req.body.div !== undefined) res.send(`Division Of ${num1} & ${num2} = ${num1 / num2}`)


})

app.listen(3000);