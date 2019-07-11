<template>
  <v-container fluid>
    <v-flex class="text-xs-center my-5" id="titolo">Chi siamo</v-flex>
    <v-layout row>
      <v-flex xs3></v-flex>
        <v-layout v-for="(avatar, index) in avatars" :key="index">
          <v-img :src="avatar.src" style="border-radius:50%"></v-img>
          <v-flex xs4></v-flex>
        </v-layout>
      <v-flex xs3></v-flex>
        <!--<v-layout row class="myFade my-5" data-aos="fade-down" v-for="item in items" :key="item.title">
            <v-layout v-show="!item.imgPos">
                <v-flex xs10>
                    <v-parallax height="300" :src="item.img"></v-parallax>
                </v-flex>
                <v-flex xs2></v-flex>
            </v-layout>
            <v-flex xs8>
                <div id="smalltitle"><strong></strong>{{ item.title }}</div>
                <p class="mt-4">{{ item.text }}</p>
            </v-flex>
            <v-layout v-show="item.imgPos">
                <v-flex xs2></v-flex>
                <v-flex xs10>
                    <v-parallax height="300" :src="item.img"></v-parallax>
                </v-flex>
            </v-layout>
        </v-layout>-->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Who',
  data: function() {
    return {
      avatars: [
        { name: 'Andrea "Bobo" Boesso', src: require('../assets/bo.jpg') },
        { name: 'Steve "Kiriku" Famoroti', src: require('../assets/ki.jpg') },
        { name: 'Elia "Aznee" Rospocher', src: require('../assets/az.jpg') }
      ]
    }
  }
};
</script>

<style scoped>
#titolo {
  font-family: Black_Street;
  font-size: 10vmin;
  text-decoration: none;
}

#smalltitle {
    font-size: 2.4vmin;
}

p {
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.6vmin;
}
</style>