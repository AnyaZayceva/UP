const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('diskdb');

db.connect('private', ['articles', 'userbase']);

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), () => {
  console.log('localhost:', app.get('port'));
});

app.get('/articles', (request, response) => {
  response.json(db.articles.find());
});

app.get('/articles/:id', (request, response) => {
  response.json(db.articles.findOne(
        { id: request.params.id }
    ));
});

app.post('/articles', (request, response) => {
  response.json(db.articles.save(request.body));
});

app.put('/articles/:id', (request, response) => {
  db.articles.remove({ id: request.body.id });
  response.json(db.articles.save(request.body));
});

app.delete('/articles/:id', (request, response) => {
  response.json(db.articles.remove({ id: request.params.id }));
});
