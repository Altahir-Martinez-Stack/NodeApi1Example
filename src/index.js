const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewarees
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies' ,require('./routes/movies'));
app.use('/api/users' ,require('./routes/users'));

// Starting the server
app.listen(app.set('port'),()=> {
    console.log(`Server un port ${app.set('port')}`);
});