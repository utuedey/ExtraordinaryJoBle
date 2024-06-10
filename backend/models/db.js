const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/extraordinary-joble',
    { useNewUrlParser: true, useUnifiedTopology: true });