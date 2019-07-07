<template>
  <span>
    <v-container grid-list-lg >
      <v-layout row wrap v-if=allClothes>
        <v-flex xs12 sm12 md6 lg4 xl3 v-for="cloth in allClothes" :key="cloth.id"> <!-- old v-if="cloth.gender == 'M'" -->
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
                      <!--<v-rating
                      :value="cloth.stars"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="12"
                      ></v-rating>-->
                      <span class="justify-start">Reviews: {{ cloth.nrevs }}</span>
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
  </span>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: 'Uomo',
  data: function() {
    return {
      allClothes: [],
      itemType: "clothes",
      gender: "M"
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
  },
  methods: {
    getItemData() {
      let db = firebase.firestore();
      let coll = db.collection(this.itemType).where('gender', '==', this.gender);
      coll
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.allClothes.push(doc.data()); // Messy with array positions and firebase IDs. // Solved with routing.
            //this.getAvgStars(doc.id); //
          })});

      /*dDoc // Old
        .get()
        .then(function(doc) {
          if (doc.exists)
          {
            dataObj.brand = doc.data()["brand"];
            dataObj.category = doc.data()["category"];
            dataObj.desc = doc.data()["desc"];
            dataObj.gender = doc.data()["gender"];
            dataObj.imglink = doc.data()["imglink"];
            dataObj.link = doc.data()["link"];
            dataObj.name = doc.data()["name"];
            dataObj.price = doc.data()["price"];

            let nrevs = doc.data()["stars"].length;
            for (i = 0; i < nrevs; i++) {
              sum = sum + doc.data()["stars"][i];
            }

            out = sum / nrevs;
            // Rounding up to 1 decimal digit.
            out = Math.round(out * 10) / 10;
            //out = Math.round(out); // No decimals.
            dataObj.stars = out;
            dataObj.nrevs = nrevs;
            //Caronte.push(dataObj);
            alert(JSON.stringify(dataObj));

            //Test
            //localStorage.setItem("Caronte", JSON.stringify(dataObj));

            //console.log(JSON.stringify(dataObj));
            //alert("obj: " + JSON.stringify(dataObj));
            //this.allClothes.push(dataObj);
            //return dataObj;*/
         /* } else {
            alert("what?");
            // doc.data() will be undefined in this case
            //console.log("No such document!");
          }
        })*/
        /*.catch(function(error) {
          console.log("Error getting document:", error);
        });*/
    },
    getAvgStars(id) {
      //let arr = [];
      //arr = this.allClothes[id];
      this.allClothes[id].stars = this.allClothes[id].stars[0];
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
          //src = "https://www.gfxmag.com/wp-content/uploads/2016/08/versace-medusa-vector-logo.png"; // Too many redirects
          break;  
        case "Polo Ralph Lauren":
          src = "https://www.stickpng.com/assets/images/58429f58a6515b1e0ad75aec.png";
          break;
        case "Jack & Jones":
          src = "https://www.kingfishershopping.co.uk/userfiles/images/shopping/stores/jack-and-jones.png?width=216&height=216&mode=crop";
          break;      

        default: // Bokiaz
          src = "";
          break;
      }
      return src;
    }
  },
};

</script>

<style scoped>
</style>