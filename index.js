const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ "id": 11, "name": "Chandan" });
});

app.post('/', (req, res) => {
    res.send("POST API INVOKED");
});

app.put('/', (req, res) => {
    res.send("PUT API INVOKED");
});

app.delete('/', (req, res) => {
    res.send("DELETE API INVOKED");
});

app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000..');
});