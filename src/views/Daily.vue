<template>
    <div class="Daily">
        <Nav />
        <b-container>
            <!--MODALS-->
            <b-modal ref="close-component" hide-header hide-footer>
                <div class="text-center">
                    <h3>Cuidado</h3>
                    <hr />
                    <p>¿Estas seguro de querer salir?</p>
                    <b-button variant="primary" block v-on:click="() => {
                        this.resetDaily();
                        this.$router.push('/dashboard');
                        }">Aceptar</b-button>
                    <b-button variant="danger" block v-on:click="hideModal('close-component')">Cancelar</b-button>
                </div>
            </b-modal>

            <!--MODALS-->
            <b-modal ref="alert-emotions" hide-header hide-footer>
                    <div class="text-center">
                        <h3 v-if="level[0] === 1">Selecciona una emoción</h3>
                        <h3 v-if="level[1] === 1">Escribe el evento activador</h3>
                        <h3 v-if="level[2] === 1">Selecciona una opción</h3>
                        <hr />
                        <p v-if="level[0] === 1">Debes seleccionar alguna emoción para poder seguir</p>
                        <p v-if="level[1] === 1">Cuentanos que te pasó hoy para hacer el debate</p>
                        <p v-if="level[2] === 1">Selecciona alguna idea irracional para seguir</p>
                        <b-button variant="primary" block @click="hideModal('alert-emotions')">Aceptar</b-button>
                    </div>
            </b-modal>

            <!--BUTTON CLOSE-->
            <b-button variant="danger" v-on:click="showModal('close-component')" class="close-component">X</b-button>



        </b-container>
        <!--EMOCIONES-->
        <b-container v-if="level[0] === 1" class="text-center">
            <h3 class="title-emotions">¿Tu emoción es ...?</h3>
            <hr />

            <b-row>
                <b-col sm>
                    <div v-if="emotions !== 'Happy'" id="Happy" v-on:click="chooseEmotions('Happy')" class="background-emotions">
                        <img src="@/assets/emotions/Recurso 1.svg" width="130px">       
                        <h4>Felicidad</h4>
                    </div>
                    <div v-if="emotions === 'Happy'" id="Happy" v-on:click="chooseEmotions('Happy')" class="emotions-choose">
                        <img src="@/assets/emotions/Recurso 1.svg" width="130px">       
                        <h4>Felicidad</h4>
                    </div>
                </b-col>
                <b-col sm>
                    <div v-if="emotions !== 'Sad'" id="Sad" v-on:click="chooseEmotions('Sad')" class="background-emotions">
                        <img src="@/assets/emotions/Recurso 3.svg" width="100px">
                        <h4>Depresión</h4>
                    </div>
                    <div v-if="emotions === 'Sad'" id="Sad" v-on:click="chooseEmotions('Sad')" class="emotions-choose">
                        <img src="@/assets/emotions/Recurso 3.svg" width="100px">
                        <h4>Depresión</h4>
                    </div>
                </b-col>
                <b-col sm>
                    <div v-if="emotions !== 'Bored'" id="Bored" v-on:click="chooseEmotions('Bored')" class="background-emotions">
                        <img src="@/assets/emotions/Recurso 5.svg" width="105px">
                        <h4>Aburrimiento</h4>
                    </div>
                    <div v-if="emotions === 'Bored'" id="Bored" v-on:click="chooseEmotions('Bored')" class="emotions-choose">
                        <img src="@/assets/emotions/Recurso 5.svg" width="105px">
                        <h4>Aburrimiento</h4>
                    </div>
                </b-col>
                <b-col sm>
                    <div v-if="emotions !== 'Anxiety'" id="Anxiety" v-on:click="chooseEmotions('Anxiety')" class="background-emotions">
                        <img src="@/assets/emotions/Recurso 6.svg" width="100px">
                        <h4>Ansiedad</h4>   
                    </div>
                    <div v-if="emotions === 'Anxiety'" id="Anxiety" v-on:click="chooseEmotions('Anxiety')" class="emotions-choose">
                        <img src="@/assets/emotions/Recurso 6.svg" width="100px">
                        <h4>Ansiedad</h4>   
                    </div>
                </b-col>
                <b-col sm>
                    <div v-if="emotions !== 'Angry'" id="Angry" v-on:click="chooseEmotions('Angry')" class="background-emotions">
                        <img src="@/assets/emotions/Recurso 4.svg" width="130px">
                        <h4>Ira</h4>
                    </div>
                    <div v-if="emotions === 'Angry'" id="Angry" v-on:click="chooseEmotions('Angry')" class="emotions-choose">
                        <img src="@/assets/emotions/Recurso 4.svg" width="130px">
                        <h4>Ira</h4>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <!--TEXTAREA-->
        <b-container v-if="level[1] === 1" class="text-center">
            <h3 class="title-emotions">¿Qué fue lo que te pasó hoy?</h3>
            <hr />

            <b-row class="justify-content-sm-center">
                <b-col sm="8">
                    <b-form-textarea
                        id="textarea"
                        placeholder="Describe brevemente el evento activador"
                        rows="5"
                        no-resize
                        v-model="event"
                        maxlength="250">
                    </b-form-textarea>
                </b-col>
            </b-row>
        </b-container>

        <!--PREGUNTAS IRRACIONALES-->
        <b-container v-if="level[2] === 1" class="text-center">
            <b-row class="justify-content-center">
                <b-col sm="12" md="10" lg="8">
                    <h3 class="title-emotions">¿Qué pensaste?</h3>
                    <hr />

                    <b-button v-if="irrational[0] === 0" v-on:click="selectIrrational('irrational-1')" id="irrational-1" variant="outline-primary" class="irrational" block>
                        ¡YO DEBERÍA...! /¡ESA PERSONA DEBERÍA...! /¡EL MUNDO DEBERÍA...!</b-button>
                    <b-button v-if="irrational[0] === 1" v-on:click="selectIrrational('irrational-1')" id="irrational-1" variant="outline-primary" class="irrational-choose" block>
                        ¡YO DEBERÍA...! /¡ESA PERSONA DEBERÍA...! /¡EL MUNDO DEBERÍA...!</b-button>

                    <b-button v-if="irrational[1] === 0" v-on:click="selectIrrational('irrational-2')" id="irrational-2" variant="outline-primary" class="irrational" block>
                        ¡ESTO QUE PASÓ ES TERRIBLE!</b-button>
                    <b-button v-if="irrational[1] === 1" v-on:click="selectIrrational('irrational-2')" id="irrational-2" variant="outline-primary" class="irrational-choose" block>
                        ¡ESTO QUE PASÓ ES TERRIBLE!</b-button>

                    <b-button v-if="irrational[2] === 0" v-on:click="selectIrrational('irrational-3')" id="irrational-3" variant="outline-primary" class="irrational" block>
                        ¡NO PUEDO SOPORTAR ESTO!</b-button>
                    <b-button v-if="irrational[2] === 1" v-on:click="selectIrrational('irrational-3')" id="irrational-3" variant="outline-primary" class="irrational-choose" block>
                        ¡NO PUEDO SOPORTAR ESTO!</b-button>

                    <b-button v-if="irrational[3] === 0" v-on:click="selectIrrational('irrational-4')" id="irrational-4" variant="outline-primary" class="irrational" block>
                        ¡SOY DE LO PEOR! o ¡ESA PERSONA ES DE LO PEOR!</b-button>
                    <b-button v-if="irrational[3] === 1" v-on:click="selectIrrational('irrational-4')" id="irrational-4" variant="outline-primary" class="irrational-choose" block>
                        ¡SOY DE LO PEOR! o ¡ESA PERSONA ES DE LO PEOR!</b-button>

                
                    <!--<b-button v-on:click="selectIrrational('irrational-5')" id="irrational-5" variant="outline-primary" class="irrational" block>
                        ¡SIEMPRE ES LO MISMO! o ¡ESTO NUNCA VA A CAMBIAR!</b-button>-->
                </b-col>
            </b-row>
        </b-container>
        
        <b-container v-if="level[3] === 1 " class="text-center">
            <h3 class="title-emotions">Preguntas disputa</h3>
            <h4>Tomese el tiempo para responder cada pregunta antes de seguir y en caso de no poder, haga el ejercicio de respiracion e intente de nuevo.</h4>
            <hr />
            <b-row class="justify-content-center">
                <b-col v-if="irrational[0] === 1" cols="12">
                    <!-- Debate logico -->
                    <p>¿Qué tan lógico es pensar que algo fuera de mi poder debería ser como yo quiera?</p>
                    <p>Pensar en que desearía que aquello fuera posible pero en caso de no serlo, entendería que está bien <br /> ¿me ayuda a calmar mi emocion?</p>
                    <hr/>
                </b-col>
                <b-col v-if="irrational[1] === 1" cols="12">
                    <!-- Debate logico -->
                    <p>¿De verdad este problema es 100% terrible y no hay nada peor?</p>
                    <p>Pensar que puede haber cosas peores en el mundo y que posiblemente esté exagerando<br /> ¿me ayuda a calmar mi emocion?</p>
                    <hr/>
                </b-col>
                <b-col v-if="irrational[2] === 1" cols="12">
                    <!-- Debate logico -->
                    <p>¿Despues de este suceso no podre sobrevivir y por esto no puedo soportarlo?</p>
                    <p>Recordar que he pasado por momentos iguales o por lo que paso tiene solucion, <br /> ¿me ayuda a calmar mi emocion?</p>
                    <hr/>
                </b-col>
                <b-col v-if="irrational[3] === 1" cols="12">
                    <!-- Debate logico -->
                    <p>¿Dónde está la prueba de que esa persona es de lo peor y no tiene ningun otra cualidad buena?</p>
                    <p>Recordar que todas las personas nos equivocamos y que eso está bien, <br /> ¿me ayuda a calmar mi emocion?</p>                        
                </b-col>
            </b-row>
        </b-container>

        <b-container v-if="level[4] === 1 " class="text-center">
            <h3 class="title-emotions">Siempre recuerda!</h3>
            <hr />
            <b-row class="justify-content-center">
                <!--
                <b-col v-if="irrational[0] === 1">
                    
                </b-col>
                <b-col v-if="irrational[1] === 1">
                    
                </b-col>
                <b-col v-if="irrational[2] === 1">
                    
                </b-col>
                <b-col v-if="irrational[3] === 1">
                    
                </b-col>
                -->
            </b-row>
        </b-container>

        <b-container v-if="level[5] === 1 " class="text-center">
            <h3 class="title-emotions">Sigue ingresando para tener tu registro semanal de emociones!</h3>
            <hr />
            <b-row>
                <b-col>
                    <img src="@/assets/rising.svg" width="40%">
                </b-col>
            </b-row>
        </b-container>

        <!--BOTONES-->
        <b-container class="buttons-debate">
            <b-button v-on:click="levelDown()" variant="primary" class="button-left">Atrás</b-button>
            <b-button v-on:click="levelUp()" variant="primary" class="button-right">Siguiente</b-button>
        </b-container>
    </div>
</template>

<script>
import Nav from '@/components/Navbar.vue';

export default {
    data() {
        return{
            
            emotions: "Ninguno",
            level: [1,0,0,0,0,0],
            irrational: [0,0,0,0,0],
            event: ""
        }
    },
    components: {
        Nav
    },
    methods:{
        chooseEmotions(emocion) {

            if(this.emotions != "Ninguno"){
                var emotion = document.getElementById(this.emotions);
                this.emotions = emocion;
            }else {
                this.emotions = emocion;
                emotion = document.getElementById(emocion);
            }
        },
        levelUp() {

            if(this.level[0] === 1){

                if(this.emotions === "Ninguno"){
                    this.showModal('alert-emotions');
                }
                else {

                    if(this.emotions === "Happy" || this.emotions === "Bored"){
                        this.level = [0,0,0,0,0,1];
                    }
                    else {
                        this.level = [0,1,0,0,0,0];
                    }
                }
                
            }
            else if(this.level[1] === 1){

                if(this.event === ""){
                    this.showModal('alert-emotions');
                }
                else {
                    this.level = [0,0,1,0,0,0];
                }
            }
            else if(this.level[2] === 1){

                var temp = false;

                for(var i=0; i<6; i++){

                    if(this.irrational[i] === 1)
                    {
                        temp = true;
                    }
                }

                if(temp === true){
                    this.level = [0,0,0,1,0,0];
                }
                else{
                    this.showModal('alert-emotions');
                }
            }
            else if(this.level[3] === 1){
                 this.level = [0,0,0,0,0,1];
            }
            else if(this.level[4] === 1){
                this.level = [0,0,0,0,0,1];
            }
            else{
                this.$router.push('/dashboard');
            }
        },
        levelDown() {
            
            if(this.level[1] === 1){
                this.level = [1,0,0,0,0,0];
            }
            else if(this.level[2] === 1){
                this.level = [0,1,0,0,0,0];
            }
            else if(this.level[3] === 1){
                this.level = [0,0,1,0,0,0];
            }
            else if(this.level[4] === 1){
                this.level = [0,0,0,1,0,0];
            }
            else if(this.level[5] === 1){
                if(this.emotions === "Happy" || this.emotions === "Bored"){
                    this.level = [1,0,0,0,0,0];
                }
                else {
                    this.level = [0,0,0,1,0,0];
                }
                
            }
        },
        selectIrrational(irrational) {

            var element = document.getElementById(irrational);


            if(irrational === "irrational-1"){

                if(this.irrational[0] === 0){
                    this.irrational[0] = 1;
                    element.style = "background: #007bff; color: white;"
                }
                else{
                    this.irrational[0] = 0;
                    element.style = "background: white; color: #007bff;"
                }
            }
            else if(irrational === "irrational-2"){
                
                if(this.irrational[1] === 0){
                    this.irrational[1] = 1;
                    element.style = "background: #007bff; color: white;"
                }   
                else{
                    this.irrational[1] = 0;
                    element.style = "background: white; color: #007bff;"
                }
            }
            else if(irrational === "irrational-3"){
                
                if(this.irrational[2] === 0){
                    this.irrational[2] = 1;
                    element.style = "background: #007bff; color: white;"
                }
                else{
                    this.irrational[2] = 0;
                    element.style = "background: white; color: #007bff;"
                }
            }
            else if(irrational === "irrational-4"){
                
                if(this.irrational[3] === 0){
                    this.irrational[3] = 1;
                    element.style = "background: #007bff; color: white;"
                }
                else{
                    this.irrational[3] = 0;
                    element.style = "background: white; color: #007bff;"
                }
            }
            else if(irrational === "irrational-5"){
                
                if(this.irrational[4] === 0){
                    this.irrational[4] = 1;
                    element.style = "background: #007bff; color: white;"
                }
                else{
                    this.irrational[4] = 0;
                    element.style = "background: white; color: #007bff;"
                }
            }

        },
        showModal(component) {
            this.$refs[component].show()
        },
        hideModal(component) {
            this.$refs[component].hide()
        },
        resetDaily() {
            this.emotions = "Ninguno";
            this.level = [1,0,0,0];
            this.irrational = [0,0,0,0,0];
            this.event = "";
        }
    }
}
</script>

<style>
.Daily{
    padding-bottom: 100px;
}

.background-emotions{
    border-radius: 10px;
    padding: 17px;
    margin: 10px 0px;
    border: 3px solid #ccc;
}

.emotions-choose{
    border-radius: 10px;
    padding: 17px;
    margin: 10px 0px;
    border: 3px solid #007bff;
}

.background-happy{
    background: #ffffba;
}

.background-sad{
    background: #bae1ff;
}

.background-angry{
    background: #ffb3ba;
}

.background-bored{
    background: #baffc9;
}

.background-anxiety{
    background:	#ffdfba;
}

.background-happy:hover, .background-sad:hover, .background-angry:hover, .background-bored:hover, .background-anxiety:hover{
    cursor: pointer;
}

.title-emotions{
    font-size: 30px;
    margin-bottom: 20px;
}

.buttons-debate{
    margin-top: 30px;
}

.button-left{
    float: left;
    width: 120px;
    font-size: 20px;
    margin-top:10px;
}

.button-right{
    float: right;
    width: 120px;
    font-size: 20px;
    margin-top:10px;
}

.container-questions button{
    font-size: 16px;
    padding: 8px;
}

.irrational:hover{
    background: white;
    color: #007bff; 
}

.close-component{
    margin-top: 20px;
    font-size: 15px;
    margin-bottom: 0px;
}

.irrational-choose{
    background: #007bff; 
    color: white;
}
</style>
