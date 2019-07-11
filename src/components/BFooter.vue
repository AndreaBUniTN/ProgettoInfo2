<template>
  <v-footer
    app
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Bokiaz Clothing</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "BFooter",
  data() {
    return {
      appTitle: "Bokiaz clothing",
    };
  }
};
</script>

<style scoped>
.text {
  font-family: Black_Street;
  font-size: 35px;
  color:white;
  text-decoration:none;
}

a {
  color:white;
  text-decoration:none;
}
</style>
