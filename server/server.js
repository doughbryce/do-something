const express = require('express')
const app = express();

app.use(express.json());

let baseURL = `http://127.0.0.1:5500/public/index.html`

app.get(`${baseURL}`, (req, res) => {
    res.status(200).send(`hello world`)
})

app.listen(3005, () => {
    console.log('listening on 3005')
});