<template>

<!-- Soon to be updated. -->

    <v-container grid-list-lg>
    <v-layout row  align-right justify-center> 
      <v-flex row xs12 sm6 md4>
        <v-img
          :src='clothData.imglink'
          max-height="654px"
          max-width="512px"
        />
      </v-flex>

      <v-flex row-wrap
        xs12
        md4
        align-content-space-between
        layout
      >
        <v-layout align-left justify-center>
          <v-flex xs10 md6>
            <h1>{{ clothData.brand }}</h1>
            <div>{{ clothData.name }}</div>
            <p id="desc">
              {{ clothData.desc }}
            </p>
            <div class="text-xs-left mt-5">
              Rate this product:
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$vuetify.icons.ratingEmpty"
                hover
                :readonly="this.rated"
              >
              </v-rating>
              <label v-show="this.rated">{{ sentence }}</label>
            </div>
            <div class="text-xs-left mt-5">
            <a :href='clothData.link' target="_blank" rel="noopener noreferrer" style="border:none;text-decoration:none"><img src="https://www.niftybuttons.com/amazon/amazon-button1.png"></a>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: 'Details',
  data: function() {
    return {
      rating: 0,
      start: true,
      rated: false,
      sentence: "We've received your rating, thanks!",
      clothData: {},
      id: 0
    };
  },
  watch: {
    // Whenever rating changes, this function will run
    rating: function () {
      if(!this.start) {
        this.rated = true;
        this.addRating();
        this.start = true;
      } else { // This avoids the first rating change (0 to Average), which in the beginning updated the DB mistakenly.
        this.start = false;
      }
    }
  },
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyAOBQXlfVXJNHi62tz-5IkpAUeVb9L2PJM",
      authDomain: "bokiaz.firebaseapp.com",
      databaseURL: "https://bokiaz.firebaseio.com",
      projectId: "bokiaz",
      storageBucket: "",
      messagingSenderId: "171947064924",
      appId: "1:171947064924:web:25d6f642b864c713"
    };
    // Initialize Firebase if it hasn't been initialized yet. Just in case.
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.id = this.$route.params.id;
    
    this.clothData = this.getItemData("clothes");

    if(localStorage.getItem(this.id + "CRated") == "Y")
    {
      this.rated = true;
      this.sentence = "You've already rated this item.";
    }
  },
  methods: {
    getItemData(type) {
      let db = firebase.firestore();
      let item = db.collection(type).doc(this.id);

      item
        .get()
        .then(doc => {
          if (doc.exists) {
            this.clothData = doc.data();
            this.getAvgStars();
          } else {
            console.log('No such document!');
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });
    },
    getAvgStars() {
      let i, sum = 0;
      for(i = 0; i < this.clothData.stars.length; i++)
      {
        sum = sum + this.clothData.stars[i];
      }
      this.rating = (sum/this.clothData.stars.length);
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
          src = "";
          break;
        case "Levis":
          src = "";
          break;
        case "Bokiaz":
          src = "";
          break;

        default:
          src = "";
          break;
      }
      return src;
    },
    addRating() {      
      if (this.rating > 5 || this.rating < 1) {
        alert("Something went wrong!");
        return; //
      }

      //let typ = this.clothData.exists ? "clothes" : "misc"; // WIP

      let typ = "clothes";

      let db = firebase.firestore();
      let dDoc = db.collection(typ).doc(this.id);
      let tmpArray = [];
      dDoc
        .get()
        .then(doc => {
          if (doc.exists) {
            tmpArray = doc.data()["stars"]; // Getting the current ratings array.

            tmpArray.push(this.rating); // Adding the new rating at the end of our array.
            // I've decided to keep the array as it is, in order to show ratings in
            // chronological order.

            localStorage.setItem(this.id + "CRated", "Y");

            return dDoc.update({
              stars: tmpArray
            });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  },
}

</script>

<style scoped>
</style>