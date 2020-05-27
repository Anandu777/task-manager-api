const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {        //Mongoose connecting to database
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



