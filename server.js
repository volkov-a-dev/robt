'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const news = require('./api/news');

const app = express();

let nextId = 4;

app.set('port', (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/news', (req, res) => {
    res.send(news);
});

app.post('/api/news', (req, res) => {
    const item = {
        id: nextId++,
        title: req.body.title,
        completed: false
    };

    news.push(item);

    res.send(item);
});

app.put('/api/news/:id', (req, res) => {
    const item = news.find(item => item.id == req.params.id);

    if (!item) return res.sendStatus(404);

    item.title = req.body.title || item.title;

    res.json(item);
});

app.patch('/api/news/:id', (req, res) => {
    const item = news.find(item => item.id == req.params.id);

    if (!item) return res.sendStatus(404);

    item.completed = !item.completed;

    res.json(item);
});

app.delete('/api/news/:id', (req, res) => {
    const index = news.findIndex(item => item.id == req.params.id);
    
    if (index === -1) return res.sendStatus(404);

    news.splice(index, 1);

    res.sendStatus(204);
});

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));