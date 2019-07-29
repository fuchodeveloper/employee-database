import express from 'express';
import bodyParser from 'body-parser';

import users from '../src/routes/users';

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', users);

app.listen(port)
