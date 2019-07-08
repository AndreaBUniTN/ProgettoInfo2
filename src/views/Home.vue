<template> 
  <span>  <!-- Uso span perché template vuole un unico elemento al suo interno -->
    <home-principale></home-principale>
    <home-terziaria></home-terziaria>
    <home-quarta></home-quarta>
    <div style="height:5%"></div>
  </span>
</template>

<script>
// @ sta per /src
import HomePrincipale from "@/components/HomePrincipale.vue";
import HomeTerziaria from "@/components/HomeTerziaria.vue";
import HomeQuarta from "@/components/HomeQuarta.vue";

import BFooter from "@/components/BFooter";

export default {
  name: "home",
  components: {
    HomePrincipale,
    HomeTerziaria,
    HomeQuarta
  }
};
</script>
