<template>
  <div class="container-TREC">
    <div>
      <div id="TREC" class="TREC">
        <h3 class="title-main">T R E C</h3>
        <p class="text-main"> 
        La Terapia Ralacional Emotiva Conductual o por sus siglas TREC, se centra en mejorar tres ámbitos en nuestras vidas: el racional, el emotivo y el conductual. Esto se logra enseñando a las personas a examinar sus propios pensamientos, creencias y acciones auto-derrotistas y cambiarlas por alternativas más productivas para su vida. <br>
        </p>
        <p class="text-main"> 
          La TREC se desarrolló a partir de la idea de que las emociones y conductas son producto de las creencias de una persona o de la interpretación que haga de la realidad. De esta compresión se desprende el ABC de la TREC.
        </p>
      </div>
      <div id="Neuro" class="Neuro">
        <h3 class="title-main">Neurófilos</h3>
        <p class="text-main"> 
          Neurófilos es un proyecto de filosofía,psicología y literatura de la Normal Superior Santiago de Cali que fomenta la gestión de las emociones, la lectura critica, la escritura creativa y el debate filosófico
        </p>
        <p class="text-main"> 
          Una defensa de los ideales de la Ilustración producto de la razón humana, que siempre están en pugna contra el pensamiento mágico, las creencias irracionales, la lealtad a la tribu y la deferencia hacia la autoridad política, moral o religiosa.
        </p>
      </div>
      <img class="cerebro" id="cerebro-left" v-on:mouseout="HiddeContent('cerebro-left')" v-on:mouseover="ShowContent('cerebro-left')" src="@/assets/cerebro-left.png" width="300px">
      <img class="cerebro" id="cerebro-right" v-on:mouseout="HiddeContent('cerebro-right')" v-on:mouseover="ShowContent('cerebro-right')" src="@/assets/cerebro-right.png" width="300px">
    </div>
  </div>
</template>


<script>

export default {
  methods: {
    ShowContent(image){
      var cerebro = document.getElementById(image);
      cerebro.style.opacity = 0; 

      if(image === "cerebro-left"){
        var TREC = document.getElementById("TREC");
        TREC.style.opacity = 1;
      }
      else {
        var Neuro = document.getElementById("Neuro");
        Neuro.style.opacity = 1;
      }

    },
    HiddeContent(image){
      var cerebro = document.getElementById(image);
      cerebro.style.opacity = 1; 

      if(image === "cerebro-left"){
        var TREC = document.getElementById("TREC");
        TREC.style.opacity = 0;
      }
      else {
        var Neuro = document.getElementById("Neuro");
        Neuro.style.opacity = 0;
      }
    }
  }
}
</script>


<style>
.Main-info{
  width: 80%;
  margin: 50px auto;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.text-main{
  margin: 30px 0px;
  text-align: left;
  font-size: 15px;
}

.title-main{
  font-size: 35px;
  color:#2F89FC;
}

.column-abc-1, .column-abc-2{
  display: inline-block;
  width: 40%;
  margin: 20px auto;
  font-size: 25px;
  color: #2F89FC;
}

.column-abc-2{
  text-align: left;
}

.container-TREC{
  width: 80%;
  margin: 10px auto;
  text-align: center;
}

.TREC{
  opacity: 0;
  position: absolute;
  left: 120px;
  width: 35%;
  margin: 60px 0px;
}


.Neuro{
  opacity: 0;
  position: absolute;
  right: 120px;
  width: 35%;
  margin: 60px 0px;
}
</style>
