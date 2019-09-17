<template>
  <div>
      <Nav />
      
      <b-container class="margin-top" v-if="$route.params.id === 'Debate'"> 
          <b-row class="justify-content-center">
          <b-col lg="10">
            <h3 class="text-center">¿Cómo funciona el Neuro-Debate?</h3>
            <h4>A</h4>
            <p>La "A" se refiere a los eventos activadores o situaciones desagradables.</p>
            <ul>
              <li>Los eventos activadores despiertan y estimulan nuestro pensamiento, creencias y lo mentalmente nos decimos a nosotros mismos.</li>
              <li>Pueden pertencer al pasado, al presente o al futuro.</li>
              <li>Pueden ser reales o imaginarios.</li>
              <li>Puede ser algo negativo que ocurrió o algo positivo que no ocurrió</li>
            </ul>
            <h4>B</h4>
            <p>La “B” se relaciona con nuestras creencias y lo que nos decimos a nosotros mismos o lo que silenciosamente comentamos sobre los acontecimientos activadores.</p>
            <h4>C</h4>
            <p>La “C” alude a las consecuencias tanto emocionales como de conductas que se derivan de las creencias y conversaciones mentales que se tuvieron.</p>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col lg="10">
            <h4>D</h4>
            <p>La "D" es la disputa de nuestras creencias irracionales y lo que nos decimos. Detecte e identifique cuáles creencias y conversaciones son las principales responsables de su emoción malsana.</p>
            <h4>E</h4>
            <p>La "E" es el efecto de la disputa, son las nuevas emociones y conductas que se orginan al afrontar nuestras creencias irracionales y conversaciones mentales, y cambiarlas por unas más racionales.</p>
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
.margin-top{
  margin-top: 40px;
}
</style>