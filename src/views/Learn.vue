<template>
  <div>
      <Nav />
      
      <b-container class="margin-top" v-if="$route.params.id === 'Debate'"> 
          <b-row class="justify-content-center">
          <b-col lg="10">
            <h3 class="text-center">¿Cómo funciona el Neuro-Debate?</h3>
            <p class="text-center">Si te has fijado, cada interacción con el debate tiene una letra asignada. Pero, ¿qué es cada una?</p>
            <p class="text-center">¿Por qué se escogió ese orden, en vez de ABC? Se utiliza este orden de las partes del debate, para facilitar a las personas que no están
              acostumbradas con la TREC, entiendan de una manera más sencilla y con lo que ellas mismas ingresan que nuestras conductas y emociones son consecuencias de nuestras creencias y lo que nos decimos despues de un evento.
            </p>
            <hr>
            <h4>¿Qué es la C?</h4>
            <p>La “C” alude a las consecuencias tanto emocionales como de conductas que se derivan de las creencias y conversaciones mentales que se tuvieron.</p>
            <p>Aquí debes seleccionar una emoción que se ajuste al como te sientes para iniciar el debate, claro, algunas emociones son sanas comparadas con otras.</p>
            <img src="@/assets/DailyC.png" width="100%">
            <hr>
            <h4>¿Qué es la A?</h4>
            <p>La "A" se refiere a los eventos activadores o situaciones desagradables.</p>
            <p>Debes ingresar que fue lo que te pasó que hizo despues de las creencias y conversaciones internas llegar a esa emoción.</p>
            <img src="@/assets/DailyA.png" width="100%">
            <hr>
            <h4>¿Qué es la B?</h4>
            <p>La “B” se relaciona con nuestras creencias y lo que nos decimos a nosotros mismos o lo que silenciosamente comentamos sobre los acontecimientos activadores.</p>
            <p>Debes ingrensar que fue lo que pensaste y te dijiste cuando ocurrió ese evento.</p>
            <img src="@/assets/DailyB.png" width="100%">
            <hr>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col lg="10">
            <h4>D</h4>
            <p>La "D" es la disputa de nuestras creencias irracionales y lo que nos decimos. Detecte e identifique cuáles creencias y conversaciones son las principales responsables de su emoción malsana.</p>
            <img src="@/assets/DailyD.png" width="100%">
            <h4>Final</h4>
            <p>La ultima parte del debate es el registro de la emoción para que tengas el seguimiento de tus emociones.</p>
            <p>(Esta parte aún no está implementada)</p>
            <img src="@/assets/DailyFinal.png" width="100%">
            <br>
            <br>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="margin-top" v-if="$route.params.id === 'Breathing'"> 
        <b-row class="justify-content-center">
          <b-col lg="10">
            <h3 class="text-center">¿Cómo funciona la Neuro-Respiración?</h3>
            <p>Cuando ingresas a la aplicación aparece esta interfaz. Al lado izquierdo está el botón para volver al inicio y en el centro está el temporizador para que puedas colocar el tiempo que quieras al ejercicio de respiración.</p>
            <br>
            <img src="@/assets/Breathing1.png" width="100%">
            <br>
            <br>
            <p class="text-center">Los botones de + y - del lado izquierdo permiten ajustar los minutos y los de la derecha los segundos para configurar según el tiempo que quieras hacer el ejercicio de respiración.</p>
            <img src="@/assets/Breathing3.png" width="100%">
            <br>
            <br>
            <p class="text-center">Cuando el circulo más oscuro se comienza a hacer grande, indica el momento de inhalar.</p>
            <img src="@/assets/Breathing5.png" width="100%">
            <br>
            <br>
            <p class="text-center">Cuando el circulo más oscuro se comienza a hacer pequeño, indica el momento de exhalar.</p>
            <br>
            <br>
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