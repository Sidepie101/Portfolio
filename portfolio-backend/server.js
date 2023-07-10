import express from 'express';

import bodyParser from 'body-parser';

import cors from 'cors';

import helmet from 'helmet';

import compression from 'compression';




import { testimonyList, addTestimony, updateTestimony, deleteTestimony, getTestimonyByEmail } from './controllers/testimonies.js';




import testimonyRules from './validations/testimonyValidations.js';




const app = express();

const PORT = 3000;




app.use(helmet());

app.use(compression());

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));




app.get('/', (req, res) => {

    res.send('Welcome, dear user');

});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




app.get('/testimonies', testimonyList);

app.post('/testimonies', testimonyRules, addTestimony);

app.put('/testimonies/:email', updateTestimony);

app.delete('/testimonies/:email', deleteTestimony);

app.get('/testimonies/:email', getTestimonyByEmail);