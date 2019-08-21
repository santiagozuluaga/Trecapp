<template>
    <div>
        <Nav />
        <Inicio />
        <Footer />
    </div>
</template>


<script>
import Nav from '@/components/Navbar.vue';
import Inicio from "@/components/Inicio.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: 'Main',
    components: {
        Nav,
        Inicio,
        Footer
    }    
}
</script>


<style>

</style>
