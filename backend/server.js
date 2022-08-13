const express = require('express');
const createError = require('http-errors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
path = require('path');
mongoose = require( 'mongoose');
cors = require('cors');
bodyParser = require('body-parser');
dbConfig = require('./db/database');

const db = require("./app/models");
const Role = db.role;

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log('Database connected')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

// user login

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

    }
  });
}

// admin login
username="admin"
password="admin"


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
  }




app.post('/admin',(req,res)=> {
    let userData = req.body

    if(!username) {
        res.status(401).send('Invalid Username')
    } else
    if ( password !== userData.password) {
        res.status(401).send('Invalid Password')
    } else {
        let payload = {subject:username+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    }

})

// admin login ends


const userRoute = require('./routes/hotelroutes')
const feedbackRoute = require('./routes/feedback.route')
const guideRoute = require('./routes/guide.routes')

app.use('/endpoint' , userRoute);
app.use('/endpoints' , feedbackRoute);
app.use('/endpointss' , guideRoute);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
console.log('Port connected to: ' + port)
})

app.use((req, res, next) => {
next(createError(404));
});

app.get('/',(req, res)=>{
    res.send('invalid endpoint');
});

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode) .send(err.message);
})






