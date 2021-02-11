import express from 'express';
import routes from './routes/index';
import 'reflect-metadata';
import './database';

const app = express();
app.use(express.json());

app.use('/appointments', routes);

app.listen(3333, () => {
    console.log('Back-end on!')
});
