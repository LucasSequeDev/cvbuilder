const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const routes = require('./routes');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server is running!');
})