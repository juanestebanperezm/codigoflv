const express = require('express');
const morgan = require('morgan');
const app = express();
const {initializeApp, applicationDefault}=require("firebase-admin/app")
const cors=require("cors")



// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({ origin: true }));

// routes
app.use(require('../routes/routes'));


//Firebase

initializeApp({
    credential:applicationDefault(),
    //Esta es la base de datos, pero creo que eso no va aguantar tantas operaciones jajajajajaja
    //Vamos a tener que hablar sobre esa chambonada despues y ver que tapado hacemos para que eso no mantenga caido
    databaseURL:"https://web-cat-test-default-rtdb.firebaseio.com/"
})


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});