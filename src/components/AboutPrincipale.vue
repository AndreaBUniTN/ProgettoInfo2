<template>
    <v-container>
        <v-layout column>
            <v-flex class="text-xs-center my-5" id="titolo">Bokiaz Clothing</v-flex>
            <v-layout row class="myFade my-5" data-aos="fade-down" v-for="item in items" :key="item.title">
                <v-layout v-show="!item.imgPos">
                    <v-flex xs10>
                        <v-parallax height="300" :src="item.img"></v-parallax>
                    </v-flex>
                    <v-flex xs2></v-flex>
                </v-layout>
                <v-flex xs8>
                    <div class="headline"><strong></strong>{{ item.title}}</div>
                    <p class="subheading mt-4">{{ item.text }}</p>
                </v-flex>
                <v-layout v-show="item.imgPos">
                    <v-flex xs2></v-flex>
                    <v-flex xs10>
                        <v-parallax height="300" :src="item.img"></v-parallax>
                    </v-flex>
                </v-layout>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'AboutPrincipale',
    data: function() {
        return {
            items: [
                {
                    title: "STREETWEAR: ABBIGLIAMENTO E ACCESSORI DEI MIGLIORI BRAND",
                    text: "La selezione streetwear di Bokiaz Clothing risponde ad ogni tipo di richiesta con tutto il meglio dell'abbigliamento di strada, dai grandi classici alle uscite più esclusive. Se Nike è la regina delle scarpe da ginnastica grazie a una storia di successi che risale agli anni '70, Iuter e Octopus sono due eccellenze made in Italy con un grande seguito nel mondo mentre la linea adidas Originals x Pharrell Williams fonde sportswear e street style in una collezione unica di felpe, magliette e sneakers.Tre esempi che hanno solo grattato la superficie di un ambiente che continua a crescere: la nostra offerta unisce hip hop, il linguaggio visivo dei graffiti e l'impatto degli atleti in una pagina che racconta la scena street dal nostro punto di vista, toccando ogni angolo della cultura di strada.",
                    img: "https://images.unsplash.com/photo-1510853851847-5c02796e8c8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    imgPos: true
                },
                {
                    title: "Bokiaz Clothing, la più grande selezione online di marchi di abbigliamento e di accessori in Italia",
                    text: "Lo skateboard è uno dei pilastri della cultura di strada, può contare su marchi con milioni di appassionati e su capi storici, tra cui tantissime sneaker. Ispirato sia dalle atmosfere della West Coast che al cemento di New York City così come alle lunghe giornate negli skatepark, l'abbigliamento da skate è stato protagonista di una serie di rivoluzioni sociali; indossato da ribelli e creativi, è diventato il manifesto per chi vuole esprimere liberamente le proprie idee. Un nome si distingue tra gli altri, Vans: profondamente radicata nella cultura urbana di Los Angeles, l'azienda dei fratelli Van Doren ha cavalcato i movimenti giovanili degli anni '70 e '80, diffondendosi a macchia d'olio grazie a uno stile semplice e diretto. Silhouette come le Old Skool restano pietre miliari per chiunque si avvicini a questo mondo, con un effetto paragonabile solo alle One Star di Converse. Per concludere, due pesi massimi come Huf e Obey tengono alto il nome delle magliette logo e degli snapback, esportando l'energia di San Francisco e il forte impatto grafico delle opere di Shepard Fairey in tutto il mondo. Un cappellino girato al contrario, la tua tavola sotto l'ultimo paio di sneakers da skate e il vento in faccia: questa è la vera skate life!",
                    img: "https://images.unsplash.com/photo-1515355758951-b4b20ba84c1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    imgPos: false
                },
                {
                    title: "Funzionalità al passo con la moda",
                    text: "Per prima cosa, l'abbigliamento deve essere funzionale e resistente, per durare nel tempo e garantire la protezione necessaria. Da qui il successo del workwear: la transizione dalle uniformi da lavoro al lifestyle è stata naturale per marchi come Carhartt, abituati a produrre grandi quantità di divise per le fabbriche attorno a Detroit. La compagnia a stelle e strisce non ha fatto altro che coniugare praticità e resistenza con fit più morbidi, facendo arrivare in strada quello che veniva indossato dentro le industrie: modelli come la Chore Coat, la Car-Lux e i pantaloni Carhartt Aviation Ripstop hanno fatto la fortuna di un brand che negli anni '90 è diventato sinonimo di freshness grazie alla musica rap e hip hop, portato da icone del calibro di Tupac Shakur e Notorious Big. Ecco da dove arrivano le giacche anorak con maxi-tasca centrale, i pantaloni cargo e le felpe oversize con il cappuccio: il workwear oggi è una filosofia di vita che mescola la qualità dei tessuti con il background, per uno stile che si riconosce a colpo d'occhio. Per restare in tema, Levi's ha iniziato tutto con un blue denim di ottima fattura e ci costruito sopra un impero: i Levi's 501 sono il paio di pantaloni jeans più iconico della storia e hanno indicato la via ad un'azienda che ora può contare su un logo unico e su un'offerta bilanciata che arriva fino alle immancabili giacche di jeans. Qualunque cosa succeda, il denim non andrà mai fuori moda.",
                    img: "https://images.unsplash.com/photo-1499852771843-6693d72f906f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    imgPos: true
                }
            ]
        };
    },
    created() {
        AOS.init();
    }
};
</script>

<style scoped>
@font-face {
  font-family: Black_Street;
  src: url(Black_Street.ttf);
}

#titolo {
  font-family: Black_Street;
  font-size: 70px;
  text-decoration:none;
}

p {
    text-align: justify;
    text-justify: inter-word;
}

</style>