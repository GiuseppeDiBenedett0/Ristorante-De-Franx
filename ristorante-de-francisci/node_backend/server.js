import express from 'express';
import cors from 'cors';
import ResturantDatabase from './config/system.js';
import router from './routes/routes.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

ResturantDatabase.sync()
.then(() => {
    console.log('Database sincronizzato');
})
.catch(err => {
    console.error('Errore di sinconizzazione del database', err);
});

app.use(express.json());

app.use(router);

app.get('/api', (req, res) => {
    res.json({ message: 'Backend online'});
});

app.listen(port, () => {
    console.log(`Server in funzione sulla porta ${port}`)
});