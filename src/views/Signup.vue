<template>
    <div>
        <Nav />
        <b-container>
            <div>
                <b-alert fade dismissible v-bind:show="alertData" @dismissed="alertData=false" variant="danger">
                    Ingrese datos validos
                </b-alert>
                <b-alert fade dismissible v-bind:show="alertPassword" @dismissed="alertPassword=false" variant="danger">
                    Las contraseñas no coinciden
                </b-alert>
            </div>
            <b-row class="justify-content-center">
                <b-col cols="10" sm="8" md="6" lg="4">
                    <b-form class="container-forms" @submit="onSubmit">
                        <h3 class="title-form">Registrate</h3>
                        <input v-model="name" required class="input-signup" type="text" placeholder="Nombre completo">
                        <input v-model="email" required class="input-signup" type="email" placeholder="Correo electrónico">
                        <input v-model="password" required class="input-signup" type="password" placeholder="Contraseña"> 
                        <input v-model="confirmpassword" required class="input-signup" type="password" placeholder="Confirmar contraseña">
                        <b-button type="submit" block variant="primary" class="button-form">Crear mi cuenta</b-button>
                        <hr />
                        <p class="text-form">¿Ya tienes cuenta?</p>
                        <router-link to="/signin"><b-button block variant="primary" class="button-form">Iniciar sesión</b-button></router-link>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>    
</template>

<script>
import Nav from '@/components/Navbar.vue';

export default {
    components: {
        Nav
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            alertData: false,
            alertPassword: false
        }
    },
    methods: {
        checkAuth(res) {
            var message = res.message;
            if(message === "Usuario ya registrado"){
                this.alertData = true;
            }
            else {
                //localStorage.setItem("Usuario", res.user);
                localStorage.setItem("Logged", true);
                this.$router.replace('/dashboard');
            }

        },
        onSubmit() {
            event.preventDefault();

            if(this.name === "" || this.email === "" || this.password === "" || this.confirmpassword === ""){
                this.alertData = true;
                
            }
            else if(this.password !== this.confirmpassword){
                this.alertPassword = true;
            }
            else{
                fetch('/signup/user', {
                    method: 'POST',
                    headers:{
                        Accept: "application/json, text/plain, */*",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        confirmpassword: this.confirmpassword
                    })
                })
                .then(res => res.json())
                .then(res => this.checkAuth(res))
                .catch(err => console.log(err))
            }

        }
    }
}
</script>

<style>
.container-forms{
    margin: 40px auto;
}

.input-signup{
    padding: 18px;
    border-radius: 5px;
    border: #273036 1px solid; 
    width: 100%;
    margin: 10px 0px;
}

.button-form{
    padding: 15px;
    font-size: 15px;
    margin: 20px 0px;
}

.text-form{ 
    text-align: center;
    font-size: 15px;
}

.title-form{
    text-align: center;
    margin: 10px 0px;
}
</style>
