<template>
  <div>
      <Nav />
      <h3>Learn</h3>
      {{ $route.params.id }}
  </div>
</template>

<script>
import Nav from '@/components/Navbar.vue';

export default {
  components: {
        Nav
  },
}
</script>

<style>

</style>