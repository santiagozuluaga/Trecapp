<template>
  <b-navbar sticky type="dark" variant="primary" toggleable="lg">
    <div class="container">
      <router-link class="Logo" to="/">Neuro App</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link v-if="!auth" class="text-nav" to="/signup">Comienza</router-link>
          <router-link v-if="!auth" class="text-nav" to="/signin">Acceder</router-link>
          <b-navbar-item v-on:click="logout()" v-if="auth" class="text-nav">Salir</b-navbar-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
    data() {
      return {
        auth: false
      }
    },
    created() {

      if(localStorage.getItem('Logged')){
        this.auth = localStorage.getItem('Logged'); 
      }
    },
    methods: {
      logout() {
        localStorage.removeItem("Logged");
        this.$router.push('/');
      },
      prueba() {
        console.log(this.auth)
      }
    }
}
</script>

<style>
.navbar{
  background: #2F89FC;
}

.Logo, .text-nav{
  padding: 5px;
  color: white;
  font-family: 'Roboto', sans-serif;
}

.text-nav{
  font-size: 17px;
  margin-right: 10px;
}

.Logo{
  font-size: 25px;
}

.text-nav:hover{
  text-decoration: none;
  color: white;
}

.Logo:hover{
  text-decoration: none;
  color: white;
}
</style>
