<template>
  <v-container fluid fill-height class="HomePrincipale" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-3 font-weight-black white--text text-xs-center" style="cursor:pointer" @click="$router.push('Adidas')">
        ADIDAS SS19
      </div>
      <div class="display-3 font-weight-black white--text text-xs-center mb-3" style="cursor:pointer" @click="$router.push('Adidas')">
        NUOVA COLLEZIONE ESTIVA
      </div>
      <div class="display-1 font-weight-bold white--text text-xs-center" style="cursor:pointer" @click="$router.push('Adidas')">
        È finalmente arrivata la nuova collezione estiva di vestiario casa Adidas, scopri
        tutti i nuovi capi.
      </div>
      <v-btn fab class="grey darken-4" @click="scrollTo()">
        <img style="width:64px; height:64px" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_down_grey_192x192.png">
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomePrincipale",
  methods: {
    scrollTo () {
      document.getElementById('thirdhome').scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
};

</script>

<style scoped>
.HomePrincipale {
  background: url("https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
