const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

//initializing the server
var app = express()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Parse requests of content-type -application/ x-www-form-urlencoded
// app.use() which helps me to use other set of dependencies into express app
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
// Parse requests of content-type application/json
//app.use(bodyParser.json());
app.use(express.json());

//Acessing environment variables
const PORT = process.env.PORT || 3012
dotenv.config()
mongoose.Promise = global.Promise

//connecting to the database
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('successfully connected to the databse') }
).catch(err=>{
    console.log('Cannot connect to the database')
    console.log(err)
    process.exit()
})

require('./app/routes/login.route')(app)
require('./app/routes/sales.route')(app)
require('./app/routes/inventory.route')(app)
require('./app/routes/customer.route')(app)


app.get('/', (req, res) => {
    res.json({
        "message": "Server started"
    })
})
// app.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`)
// })
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`,'127.0.0')
})


