<template>
    <div class="dashboard">
        <Nav />
        <b-container>
            <b-row  class="justify-content-center">
                <b-col order="2" order-lg="1" md="10" lg="6" class="text-center">
                    <!--
                    <div class="background-home">
                        <b-container>
                            <b-row>
                                <b-col>
                                    <h3>Actividad semanal</h3>
                                    <hr />
                                    <div>
                                        <h4>Nivel de irracionalidad!</h4>
                                        <b-progress variant="warning" height="20px" v-bind:value="valueirrational" :max="70"></b-progress>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    -->
                    <div class="background-home">
                        <h3>Aprende lo básico</h3>
                        <p>(Desactivado)</p>
                        <hr/>
                        <b-container>
                            <b-row class="text-left">
                                <b-col cols="4" lg="3">
                                    <img v-on:click="prueba()" src="@/assets/abc-block.svg" width="80px">
                                </b-col>
                                <b-col>
                                    <h4>ABC</h4>
                                    <p>Aprende que significa cada letra y a identificarlas en el Neuro debate</p>
                                </b-col>
                            </b-row>
                            <b-row class="text-left">
                                <b-col cols="4" lg="3">
                                    <img v-on:click="prueba()" src="@/assets/breathe.svg" width="80px">
                                </b-col>
                                <b-col>
                                    <h4>Una buena respiración</h4> 
                                    <p>Practica tu respiración diariamente para que sea una herramienta contra todo.
                                        Y mira ejemplos de como hacer un entrenamiento de respiración.
                                    </p>
                                </b-col>
                            </b-row>
                            <b-row class="text-left">
                                <b-col cols="4" lg="3">
                                    <img v-on:click="prueba()" src="@/assets/prenatal.svg" width="80px">
                                </b-col>
                                <b-col>
                                    <h4>Neuro debate</h4> 
                                    <p>Mira como hacer un Neuro debate, sumando la nueva filosofia al ABC</p>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </b-col>
                <b-col order="1" order-lg="2" md="10" lg="4" class="text-center">
                    <div class="background-reloj">
                        <h3>Neuro-respiración</h3>
                        <hr/>
                        <img class="images-options" src="@/assets/circular-clock.svg" width="100px">
                        <b-button variant="primary" block v-on:click="changeComponent(1)">Empezar</b-button>
                    </div>
                    <div class="background-debate">
                        <h3>Neuro-debate</h3>
                        <hr/>
                        <p>Registra tu actividad diaria para tener una mejora</p>
                        <img class="images-options" src="@/assets/people.svg" width="100px">
                        <b-button variant="primary" block v-on:click="changeComponent(2)">Empezar</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        
    </div>
</template>

<script>
import Nav from '@/components/Navbar.vue';

export default {
    name: "dashboard",
    components: {
        Nav
    },
    data () {
        return{
            valueirrational: 50
        }
    },
    methods: {
        changeComponent(component) {
            if(component === 1){
                this.$router.push('/clock')
            }
            else if(component === 2){
                this.$router.push('/daily')
            }
        },
        prueba() {
            console.log("Hola");
        }
    }

}
</script>

<style>
.dashboard{ 
    padding-bottom: 50px;
}

.images-options{
    margin-top: 5px;
    margin-bottom: 20px;
}

.background-debate, .background-reloj, .background-home{
    background: white;
    border: 1px solid #aaa;
    border-radius: 10px;
    padding: 10px;
    margin-top: 30px;
}

</style>
