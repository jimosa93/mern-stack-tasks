const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const URI = 'mongodb://localhost/mern-task';


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose; 