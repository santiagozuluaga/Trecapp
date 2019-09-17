<template>
    <div>
        <Nav/>
        <b-container class="profile">
            <b-row class="justify-content-center">
                <b-col class="background-profile" lg="6">
                    <div class="text-center">
                        <img src="@/assets/user.png" width="100px">
                        <h3 class="name-profile">Hola {{user.name}}!</h3>
                    </div>
                    <b-form class="profile-form" @submit="changePassword">
                        <p><br> Correo electrónico:</p>
                        <p class="input-profile">{{user.email}}</p>
                        <p><br> Actual ccontraseña:</p>
                        <input class="input-profile" v-model="form.password" required type="password" placeholder="Actual contraseña">
                        <p><br>Nueva contraseña:</p>
                        <input class="input-profile" v-model="form.repitpassword" required type="password" placeholder="Nueva contraseña">
                        <b-button class="button-profile" block type="submit" variant="primary">Actualizar información</b-button>
                    </b-form>
                    <br>
                    <hr>
                    <h3 class="text-center">Eliminar cuenta</h3>
                    <b-form class="profile-form">
                        <p><br>Ingresa la contraseña para confirmar</p>
                        <input class="input-profile" v-model="deleting.password" required type="password" placeholder="Contraseña">
                        <b-button class="button-profile" block type="submit" variant="danger">Eliminar</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Nav from '@/components/Navbar.vue';
export default {
    data() {
        return {
            user: {
                name: "Santiago Zuluaga",
                email: "santiagozh1998@gmail.com"
            },
            form: {
                password: "",
                repitpassword: ""
            },
            deleting: {
                password: ""
            }
        }
    },
    components: {
        Nav
    },
    methods: {
        changePassword(event) {
            event.preventDefault();

            if(this.form.password === "" || this.form.repitpassword === "" || this.form.password !== this.form.repitpassword){
                console.log("Error")
            }
            else{
                fetch('/user/Change-pass', {
                    method: 'POST',
                    headers:{
                        Accept: "application/json, text/plain, */*",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.user.email,
                        password: this.form.password,
                        repitpassword: this.form.repitpassword
                    })
                })
                .then(res => res.json())
                .then(res => console.log(res.message))
                .catch(err => console.log(err))
            }
        },
        deleteAcount() {
            event.preventDefault();

            if(this.deleting.password === ""){
                console.log("Error")
            }
            else{
                fetch('/user/delete', {
                    method: 'POST',
                    headers:{
                        Accept: "application/json, text/plain, */*",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.user.email,
                        password: this.deleting.password
                    })
                })
                .then(res => res.json())
                .then(res => console.log(res.message))
                .catch(err => console.log(err))
            }
        }
    }
}
</script>

<style>
.background-profile{
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 20px 15px 20px 15px;
    border: 2px solid #ccc;
    border-radius: 10px;
}

.profile{
    margin-bottom: 60px;
}

.profile-form{
    padding: 10px;
}

.button-profile{
    margin-top: 30px;
    padding: 15px;
}

.name-profile{
    margin-top: 20px;
}

.input-profile{
    padding: 10px;
    border-radius: 5px;
    border: #273036 1px solid; 
    width: 100%;
}
</style>