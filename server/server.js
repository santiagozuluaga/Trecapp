//Dependencias
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const user = require('./models/Users');

//Middlewares
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../dist/')));

//Database conection
mongoose.connect("mongodb+srv://NeuroApp:neurofilos@cluster0-9sz2p.mongodb.net/test?retryWrites=true&w=majority",
{ 
    useNewUrlParser: true 
})
.then(db => console.log('db conectada'))
.catch(err => console.error(err));

//Routes
app.get('/*/', (req, res, error) => {

    res.sendFile(path.join(__dirname,'../dist/index.html'));
})

//Signup    
app.post('/signup/user', async(req,res)=>{

    const {name, email, password, confirmpassword} = req.body;
    const userFind = await user.find( {email: email} );
    
    if(userFind[0]){
        res.json({
            message: 'Usuario ya registrado'
        });
    }
    else {
        const newUser = new user({name,email,password});
        await newUser.save();
        res.json({
            message: 'Registro de sesión correcto'
        });
    }    
});

//Signin
app.post('/signin/user', async(req,res)=>{

    const {email, password} = req.body;
    const userFind = await user.find( {email: email, password: password} );

    if(userFind[0]){
        res.json({
            message: 'Inicio de sesión correcto'
        });
    }
    else {
        res.json({
            message: 'Usuario no encontrado'
        });
    }
});


//Start
app.listen(app.get('port'), () => {
    console.log("Stating server " + app.get('port'));
})