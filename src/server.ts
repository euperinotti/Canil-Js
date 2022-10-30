import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use(mainRoutes);

app.use((req, res) => {
    res.render('pages/404');

    // res.status(404).send('Página não encontrada');
})

app.listen(process.env.PORT, () => {
    `Server is running at port: ${process.env.PORT}`;
});