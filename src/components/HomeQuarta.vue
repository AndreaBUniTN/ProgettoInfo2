<template>
<span>
  <v-container>
    <v-carousel hide-controls hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          :to ="item.link"
        ></v-carousel-item >
      </v-carousel>
  </v-container>    
</span>
  
</template>

<script>
export default {
  name: "HomeQuarta",
  data () {
      return {
        items: [
          {
            src: 'https://s3.gsxtr.com/i/bf/14504-adidas-originals-spring-summer-2019-extrawide-ita.jpg',
            link: '/Uomo'
          },
          {
            src: 'https://s3.gsxtr.com/i/bf/14468-huf-x-bode-collection-extrawide-ita.jpg?v=1'
          },
          {
            src: 'https://s3.gsxtr.com/i/bf/14452-nike-summer-2019-extrawide-ita.jpg?v=1'
          },
          {
            src: 'https://s3.gsxtr.com/i/bf/14515-vans-old-skool-regrind-extrawide-ita.jpg'
          }
        ]
      }
    }
};


</script>

<style scoped>

</style>
