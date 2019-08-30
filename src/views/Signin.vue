<template>
    <div>
        <Nav />
        <b-container>
            <div>
                <b-alert fade dismissible v-bind:show="alertData" @dismissed="alertData=false" variant="danger">
                    Ingrese datos validos
                </b-alert>
            </div>
            <b-row class="justify-content-center">
                <b-col cols="10" sm="8" md="6" lg="4">
                   
                    <b-form class="container-forms" @submit="onSubmit">
                        <h3 class="title-form">Inicia sesión</h3>
                        <input v-model="email" required class="input-signup" type="email" placeholder="Correo electrónico">
                        <input v-model="password" required class="input-signup" type="password" placeholder="Contraseña"> 
                        <b-button type="submit" block variant="primary" class="button-form">Iniciar sesión</b-button>
                        <hr />
                        <p class="text-form">¿No tienes cuenta?</p>
                        <router-link to="/signup"><b-button block variant="primary" class="button-form">Registrarse</b-button></router-link>
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
            email: "",
            password: "",
            alertData: false
        }
    },
    methods: {
        checkAuth(res) {
            console.log("verificando");
            var message = res.message;
            console.log(message);
            if(message === "Usuario no encontrado"){
                this.alertData = true;
            }
            else {
                //localStorage.setItem("Usuario", res.user);
                localStorage.setItem("Logged", true);
                this.$router.replace('/dashboard');
            }
        },
        onSubmit(event) {
            event.preventDefault();

            if(this.email === "" || this.password === ""){
                this.alertData = true;
            }
            else{
                fetch('/signin/user', {
                    method: 'POST',
                    headers:{
                        Accept: "application/json, text/plain, */*",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
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
