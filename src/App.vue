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