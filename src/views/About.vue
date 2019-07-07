<template>
    <v-container fluid>
        <v-layout>
            <about-principale></about-principale>
        </v-layout>
    </v-container>
</template>
<script>
import AboutPrincipale from "@/components/AboutPrincipale.vue";
export default {
    name: 'About',
    components: {
    AboutPrincipale
  }
};
</script>
<style scoped>
</style>