<template>
    <div>
        <Nav />
        <b-container class="background-errorpage">
            <b-row class="text-center">
                <b-col>
                    <h3 class="text-errorpage">¡TRANQUILO, NO EXPLOTES, USA LA TREC!</h3>
                    <p>La pagina que buscas no existe o el link en que undiste esta defectuoso. </p>
                    <img class="image-error" src="@/assets/website.svg" width="350px">
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
.background-errorpage{
    margin-top: 20px;
    padding: 40px;
}
</style>