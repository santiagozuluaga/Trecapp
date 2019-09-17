//Dependencias
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const user = require('./models/Users');
const bcrypt = require('bcrypt-nodejs');
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
app.get('/*/', (req, res) => {
    res.sendFile(path.join(__dirname,'../dist/index.html'));
})

//Signup    
app.post('/signup/user', async(req,res)=>{

    var {name, email, password, confirmpassword} = req.body;
    var userFind = await user.find( {email: email} );
    
    if(name === " " || email === " " || password === " "){
        res.json({
            message: 'Debes llenar todos los campos'
        });
        
    }
    
    else if(password !== confirmpassword){
        res.json({
            message: 'Las contraseñas deben coincidir '
        });
    }

    else if(userFind[0]){
        res.json({
            message: 'Usuario ya registrado'
        });
    }
    else {
        
        
        password = bcrypt.hashSync(password);
        var newUser = new user({name, email, password});
        await newUser.save();
        res.json({
            message: 'Registro de sesión correcto',
            name,
            email
        });
        
    }    
});



//Signin
app.post('/signin/user', async(req,res)=>{

    var {email, password} = req.body;
    var userFind = await user.findOne( {email: email} );

    if(userFind){
        console.log(bcrypt.compareSync(password, userFind.password))
        if(bcrypt.compareSync(password, userFind.password)){

            res.json({
                message: 'Inicio de sesión correcto',
                name: userFind.name,
                email: userFind.email
            });
        }
        else{

            res.json({
                message: 'Contraseña incorrecta'
            })
        }
    }
    else {

        res.json({
            message: 'Usuario no encontrado'
        });
    }
});


//ChangePassword
app.post('/user/Change-pass', async (req,res)=>{

    var {email, password, newpassword, repitpassword} = req.body;
    var userFind = await user.findOne( {email: email} );

    if(newpassword != repitpassword){
        res.json({
            message:'Las contraseñas deben coincidir'
        })
    }
    else if (bcrypt.compareSync(password, userFind.password)){

        if (bcrypt.compareSync(newpassword, userFind.password)){
            res.json({
                message:'La contraseña nueva no debe ser igual a la anterior'
            });
        }
        else {
            res.json({
                message:'Se actualizo con exito'
            });
            newpassword = bcrypt.hashSync(newpassword);
            user.updateOne( {email: email}, {password: newpassword}, (err, res) => {
                if(err) {
                    throw err
                }
                else {
                    console.log("1 document updated");
                }
            });
        }

    }
    else{
        res.json({
            message:'La contraseña no coincide'
        });
    }
  
});

app.post('/user/delete', async (req,res)=>{

    var {email, password} = req.body;
    var userFind = await user.findOne( {email: email} );
    
    if (bcrypt.compareSync(password, userFind.password)){
        res.json({
            message:'Borrando usuario'
        });
        var userdelete = user.remove({email: email});
        console.log(userdelete);
    }
    else
    {
        res.json({
            message:'La contraseña es incorrecta'
        });
    }

});


//Start
app.listen(app.get('port'), () => {
    console.log("Stating server " + app.get('port'));
})