<template>
  <span>
    <v-system-bar status color="primary" lights-out></v-system-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="grey darken-4"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in leftNavItems">
          <v-list-tile :key="index" :to="item.to">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
        <template v-for="(item, index) in rightNavItems">
          <v-list-tile :key="index+3" :to="item.to">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index+3}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color=#222226 dark>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link class="titolo" to="/">
      <v-toolbar-title class="titolo" to="/">{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-btn flat class="hidden-sm-and-down" v-for="(item, index) in leftNavItems" :key="index" :to="item.to">{{ item.title }}</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" v-for="(item, index) in rightNavItems" :key="index+3" :to="item.to">{{ item.title }}</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "BarraNavigazione",
  data() {
    return {
      appTitle: "Bokiaz Clothing",
      drawer: false, // Falso perchè è chiuso, quando si apre diventa vero
      leftNavItems: [
        { title: "Uomo", to: "/Uomo" },
        { title: "Donna", to: "/Donna" },
        { title: "Accessori", to: "/Accessori" }
      ],
      rightNavItems: [
        { title: "Who", to: "/Who" },
        { title: "About", to: "/About" }
      ]
    };
  }
};
</script>

<style scoped>
.titolo {
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
