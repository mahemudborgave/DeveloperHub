const express = require('express');
const connectdatabase = require('./config/database');
const app = express();
const multer = require('multer');
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

//connect the database
const cors = require('cors');
app.use(cors());

connectdatabase();

app.get('/', (req, res) => {
    res.send("API is running");
})

//to get the data into the Req.body when sending it to the database
app.use(express.json({extended:false}));

//Routes
app.use('/api/users', require('./Routes/Api/User'))
app.use('/api/auth', require('./Routes/Api/auth'))
app.use('/api/freelancerprofile', require('./Routes/Api/FreelancersProfile'))
app.use('/api/job', require('./Routes/Api/Job'))
app.use('/api/business', require('./Routes/Api/Business'))
app.use('/api/businessprofile', require('./Routes/Api/BusinessProfile'))
app.use('/api/recommendations', require('./Routes/Api/Recommendation'))

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{console.log(`server started!`)})