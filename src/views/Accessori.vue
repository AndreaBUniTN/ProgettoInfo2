<template>
  <span>
    <div style="height:64px"></div>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg4 xl3 v-for="cloth in allClothes" :key="cloth.id" data-aos="fade-up">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="mx-auto"
              width="300"
              :to="'/details/' + cloth.id"
            >
              <v-img :aspect-ratio="3/5" :src="cloth.imglink">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-avatar>
                        <img :src="getBrandIcon(cloth.brand)">
                      </v-avatar>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div> 
                    <span class="headline">{{ cloth.name }}</span>
                    <div class="d-flex">
                      <span class="justify-start">Price: </span>
                      <div class="ml-2 grey--text text--darken-2">
                        <span>€{{ cloth.price }}</span>
                      </div>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <v-btn icon class="mr-0">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <div style="height:64px"></div>
  </span>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: 'Accessori',
  data: function() {
    return {
      allClothes: [],
      itemType: "misc"
    }
  },
  created () {
    var firebaseConfig = {
    apiKey: "AIzaSyAOBQXlfVXJNHi62tz-5IkpAUeVb9L2PJM",
    authDomain: "bokiaz.firebaseapp.com",
    databaseURL: "https://bokiaz.firebaseio.com",
    projectId: "bokiaz",
    storageBucket: "",
    messagingSenderId: "171947064924",
    appId: "1:171947064924:web:25d6f642b864c713"
    };
    // Initialize Firebase if it hasn't been initialized yet.
    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
    this.getItemData();
    localStorage.setItem("itemtype", this.itemType);
  },
  methods: {
    getItemData() {
      let db = firebase.firestore();
      let coll = db.collection(this.itemType);
      coll
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.allClothes.push(doc.data());
          })});
    },
    getBrandIcon(brand) {
      let src;
      switch (brand) {
        case "Adidas":
          src = 'https://logos-download.com/wp-content/uploads/2016/03/Adidas_Originals_logo.png';
          break;
        case "Nike":
          src = 'http://www.myiconfinder.com/uploads/iconsets/256-256-15f5c0bd367d23e4ed1a1fc800bc2ed6-nike.png';
          break;
        case "Calvin Klein":
          src = 'https://brandslogo.net/wp-content/uploads/2013/01/calvin-klein-.eps-logo-vector.png';
          break;
        case "Tommy Hilfiger":
          src = "https://tribes-store.it/media/aw_shopbybrand/image/t/o/tommy-hilfiger.png";
          break;
        case "Levis":
          src = "https://cdn.freebiesupply.com/logos/large/2x/levis-7-logo-png-transparent.png";
          break;
        case "Versace":
          src = "http://assets.stickpng.com/thumbs/58429658a6515b1e0ad75ad4.png";
          break;  
        case "Polo Ralph Lauren":
          src = "https://www.stickpng.com/assets/images/58429f58a6515b1e0ad75aec.png";
          break;
        case "Jack & Jones":
          src = "https://www.kingfishershopping.co.uk/userfiles/images/shopping/stores/jack-and-jones.png?width=216&height=216&mode=crop";
          break;
        case "Gucci":
          src = "https://cdn.iconscout.com/icon/free/png-256/gucci-3-555345.png";
          break;
        case "G-Shock":
          src = "https://theringmakers.co.nz/wp-content/uploads/2017/02/Casio-G-Shock-Logo.png";
          break;
        case "Fjallraven":
          src = "https://i.pinimg.com/originals/83/c5/bd/83c5bd4413078920a6ed816bfc0b904e.png";
          break;
        case "Fizz":
          src = "https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png";
          break;
        case "The North Face":
          src = "https://static.transa.ch/master/the-north-face-logo.png";
          break;
        case "Sekonda":
          src = "http://watchmentruro.com/uploads/3/4/9/6/34962892/sekonda_orig.png";
          break;
        case "Fila":
          src = "https://cdn.freebiesupply.com/logos/large/2x/fila-1-logo-png-transparent.png";
          break;
          
        default: // Bokiaz
          src = "";
          break;
      }
      return src;
    }
  }
};

</script>

<style scoped>
</style>