<template>
  <v-app>
    <barra-navigazione></barra-navigazione>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import BarraNavigazione from "@/components/BarraNavigazione";

export default {
  name: "App",
  components: {
    BarraNavigazione
  }
};
</script>

<style></style>
