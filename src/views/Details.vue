<template>
    <span>
      <div style="height:64px"></div>
    <v-container class = "containerProdotto" grid-list-lg>
        
        <div class="left-column">
            <v-img class="left-column img" :src='clothData.imglink'/>
        </div>
        <div class="right-column">
          <div class="product-description">
            <span>{{ clothData.category }}</span>
            <h1>{{ clothData.name }}</h1>
            <p>{{ clothData.desc }}</p>
          </div>
          <div class="product-configuration">
            <div class="product-color">
              <span>Valuta questo prodotto:</span>
                <v-rating
                      v-model="rating"
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$vuetify.icons.ratingEmpty"
                      hover
                      :readonly="this.rated"
                      half-increments
                >
                </v-rating>
                <label v-show="this.rated">{{ sentence }}</label>
            </div>
          </div>

              <div class="product-price">
                <span>{{ clothData.price }}€</span>
                <a target="_blank" :href="clothData.link" class="cart-btn" color="#222226">ACQUISTA ORA</a>
              </div>
        </div>
    </v-container>
    <div class="text-xs-center">
      <v-btn round color="#222226" class="endBtn" @click="$router.go(-1)" dark>Indietro</v-btn>
    </div>
    </span>
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
      sentence: "Grazie per la tua valutazione!",
      itemType: "clothes", // Default value.
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
    this.itemType = localStorage.getItem("itemtype");

    this.clothData = this.getItemData(this.itemType);
    let own = localStorage.getItem(this.id + this.itemType + "Rated");

    if(own!==null)
    {
      this.rated = true;
      this.sentence = "Hai già valutato questo prodotto con un voto pari a " + own + (own==1 ? " stella." : " stelle.");
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
      if (this.rating > 5 || this.rating < 0) {
        alert("Something went wrong!");
        return; //
      }

      let db = firebase.firestore();
      let dDoc = db.collection(this.itemType).doc(this.id);
      let tmpArray = [];
      dDoc
        .get()
        .then(doc => {
          if (doc.exists) {
            tmpArray = doc.data()["stars"]; // Getting the current ratings array.

            tmpArray.push(this.rating); // Adding the new rating at the end of our array.
            // I've decided to keep the array as it is, in order to show ratings in
            // chronological order.

            localStorage.setItem(this.id + this.itemType + "Rated", this.rating);

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
   html, body{height:100%;width:100%;margin:0;font-family:'Roboto', sans-serif;}
   .containerProdotto{max-width:1200px;margin:auto;padding:15px;display:flex;}
   .left-column{width:60%;position:relative;}
   .right-column{width:40%;margin-top:60px;}
   .left-column img{width:100%;position:absolute;}
   .product-description{border-bottom:1px solid #E1E8EE;margin-bottom:20px;}
   .product-description span{font-size:12px;color:#358ED7;letter-spacing:1px;text-transform:uppercase;text-decoration:none;}
   .product-description h1{font-weight:300;font-size:52px;color:#43484D;letter-spacing:-2px;}
   .product-description p{font-size:14px;font-weight:300;color:#86939E;line-height:24px;}
   .product-color span,.cable-config span{font-size:14px;font-weight:400;color:#86939E;margin-bottom:20px;display:inline-block;}
   .product-color{margin-bottom:30px;}
   .color-choose div{display:inline-block;}.cable-choose{margin-bottom:20px;}
   .cable-choose button{border:2px solid #E1E8EE;border-radius:6px;padding:13px 20px;font-size:14px;color:#5E6977;background-color:#fff;cursor:pointer;transition:all .5s;}
   .cable-choose button:hover,.cable-choose button:active,.cable-choose button:focus{border:2px solid #86939E;outline:none;}
   .cable-config{border-bottom:1px solid #E1E8EE;margin-bottom:20px;}
   .cable-config a{color:#358ED7;text-decoration:none;font-size:12px;position:relative;margin:10px 0;display:inline-block;}
   .cable-config a:before{content:"?";height:15px;width:15px;border-radius:50%;border:2px solid rgba(53, 142, 215, 0.5);display:inline-block;text-align:center;line-height:16px;opacity:0.5;margin-right:5px;}
   .product-price{display:flex;align-items:center;}
   .product-price span{font-size:26px;font-weight:300;color:#43474D;margin-right:20px;}
   .cart-btn{display:inline-block;background-color:#7DC855;border-radius:6px;font-size:16px;color:#FFFFFF;text-decoration:none;padding:12px 30px;transition:all .5s;}
   .cart-btn:hover{background-color:#64af3d;}
   @media (max-width:940px){
     .container{flex-direction:column;margin-top:60px;} 
     .left-column, .right-column{width:100%;} 
     .left-column img{width:300px;right:0;top:-65px;left:initial;}
     }
    @media (max-width:535px)
    {.left-column img{width:220px;top:-85px;}}
     .endBtn{position:fixed;bottom:64px;margin:0;}
</style>