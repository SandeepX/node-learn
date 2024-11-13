const express = require('express');
const path = require('path');
const app = express();
const pageRoutes = require('./routes/pageRoutes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

app.use('/', pageRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
