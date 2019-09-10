<template>
  <div>
      <Nav />
      
      <b-container v-if="$route.params.id === 'ABC'"> 
        <h3>{{$route.params.id}}</h3>
        <b-row>
          <b-col>
            <p>Esto es el ABC</p>            
          </b-col>
        </b-row>
      </b-container>

      <b-container v-if="$route.params.id === 'Breathing'"> 
        <h3>{{$route.params.id}}</h3>
        <b-row>
          <b-col>
            <p>Haz una respiracion asi</p>
          </b-col>
        </b-row>
      </b-container>
      
      <b-container v-if="$route.params.id === 'Debate'"> 
        <h3>{{$route.params.id}}</h3>
        <b-row>
          <b-col>
            
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
  }
}
</script>

<style>

</style>