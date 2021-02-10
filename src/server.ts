import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());

app.use('/appointments', routes);

app.get('/', (request, response) => {
   return response.json({ message : 'Hello world!' });
});

app.listen(3333, () => {
    console.log('Back-end on!')
});
