const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const article = require('./data/article.json');

app.use(cors());

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(c => c._id === id);
    res.send(selectedChef)
})

app.get('/article', (req, res) => {
    res.send(article);
})


app.listen(port, () => {
    console.log(`Recipe Point API is running on port: ${port}`)
})
