const express = require("express");
const app = express();

app.get('/:num2', (req, res) => {
    const { name, age, num1 } = req.query; // from query string
    const { num2 } = req.params; // from URL path

    const sum = Number(num1) + Number(num2);

    res.send(`Name: ${name}, Age: ${age} <br> Sum of numbers: ${sum}`);
    console.log(`num2 from params: ${num2}`);
});

app.listen(3000, () => {
    console.log(`🚀 Server running at http://localhost:3000`);
});
