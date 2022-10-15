const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app 
const app = express();

const dbURI = 'mongodb+srv://nodeblog2272:blogs2272@myowncluster.ubm66.mongodb.net/nodeblog?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


//register view engine
app.set('view engine', 'ejs');


// middleware & static files (public files)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //handle POST request in webform data
app.use(morgan('dev'));



//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.use('/blogs', blogRoutes);


// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'});
});