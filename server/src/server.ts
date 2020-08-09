import express from 'express';

const app = express();

app.post('/users', (request, response) => {
  return response.json({ message: 'Salve' });
});

app.listen(3333);

