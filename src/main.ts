import express from 'express';
import dotenv from 'dotenv';

import authRouter from './routes/auth';
import invitationRoute from "./routes/invitation.route";

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', authRouter);
app.use('/api', invitationRoute);

require('./database/mongoose');
app.listen(process.env.PORT ?? 9000, () => {
    console.log(`Server started on port ${process.env.PORT ?? 9000}`);
});
