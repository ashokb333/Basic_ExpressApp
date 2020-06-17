const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/index');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000
app.use(mainRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`My app listening at http://localhost:${port}`))