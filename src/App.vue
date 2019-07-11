<template>
  <v-app>
    <barra-navigazione></barra-navigazione>

    <v-content class="pa-0" transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

    <b-footer></b-footer>
  </v-app>
</template>

<script>
import BarraNavigazione from "@/components/BarraNavigazione";
import BFooter from "@/components/BFooter";

export default {
  name: "App",
  components: {
    BarraNavigazione,
    BFooter
  }
};
</script>

<style>
@font-face {
  font-family: Black_Street;
  src: url(assets/Black_Street.ttf);
}

#titolo {
  font-family: Black_Street;
  font-size: 10vmin;
  text-decoration: none;
}
</style>