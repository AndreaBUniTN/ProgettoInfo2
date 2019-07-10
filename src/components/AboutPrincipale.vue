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
                    <div id="smalltitle"><strong></strong>{{ item.title }}</div>
                    <p class="mt-4">{{ item.text }}</p>
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
export default {
    name: 'AboutPrincipale',
    data: function() {
        return {
            items: [
                {
                    title: "STREETWEAR: ABBIGLIAMENTO E ACCESSORI DEI MIGLIORI BRAND",
                    text: "La selezione streetwear di Bokiaz Clothing risponde ad ogni tipo di richiesta con tutto il meglio dell'abbigliamento di strada, dai grandi classici alle uscite più esclusive. Se Nike è la regina delle scarpe da ginnastica grazie a una storia di successi che risale agli anni '70, Iuter e Octopus sono due eccellenze made in Italy con un grande seguito nel mondo mentre la linea adidas Originals x Pharrell Williams fonde sportswear e street style in una collezione unica di felpe, magliette e sneakers. Tre esempi che hanno solo grattato la superficie di un ambiente che continua a crescere: la nostra offerta unisce hip hop, il linguaggio visivo dei graffiti e l'impatto degli atleti in una pagina che racconta la scena street dal nostro punto di vista, toccando ogni angolo della cultura di strada.",
                    img: "https://images.unsplash.com/photo-1510853851847-5c02796e8c8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    imgPos: true
                },
                {
                    title: "Bokiaz Clothing, la più grande selezione online di marchi di abbigliamento e di accessori in Italia",
                    text: "Lo skateboard è uno dei pilastri della cultura di strada, può contare su marchi con milioni di appassionati e su capi storici, tra cui tantissime sneaker. Ispirato sia dalle atmosfere della West Coast che al cemento di New York City così come alle lunghe giornate negli skatepark, l'abbigliamento da skate è stato protagonista di una serie di rivoluzioni sociali; indossato da ribelli e creativi, è diventato il manifesto per chi vuole esprimere liberamente le proprie idee. Un nome si distingue tra gli altri, Vans: profondamente radicata nella cultura urbana di Los Angeles, l'azienda dei fratelli Van Doren ha cavalcato i movimenti giovanili degli anni '70 e '80, diffondendosi a macchia d'olio grazie a uno stile semplice e diretto. Silhouette come le Old Skool restano pietre miliari per chiunque si avvicini a questo mondo, con un effetto paragonabile solo alle One Star di Converse. Per concludere, due pesi massimi come Huf e Obey tengono alto il nome delle magliette logo e degli snapback, esportando l'energia di San Francisco e il forte impatto grafico delle opere di Shepard Fairey in tutto il mondo. Un cappellino girato al contrario, la tua tavola sotto l'ultimo paio di sneakers da skate e il vento in faccia: questa è la vera skate life!",
                    img: "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/14485131_759479144199528_2007451348632893698_n.jpg?_nc_cat=109&_nc_oc=AQlByQ_i4JWW7EtvSCnIqN3rRT_cDpEwCf6DfMHo-vAsedSkF2mip8Fh5M9qcLlIVIs&_nc_ht=scontent-mxp1-1.xx&oh=0496b3bab79919d6a147ac7f115a7045&oe=5DBC3DED",
                    imgPos: false
                },
                {
                    title: "Funzionalità al passo con la moda",
                    text: "Per prima cosa, l'abbigliamento deve essere funzionale e resistente, per durare nel tempo e garantire la protezione necessaria. Da qui il successo del workwear: la transizione dalle uniformi da lavoro al lifestyle è stata naturale per marchi come Carhartt, abituati a produrre grandi quantità di divise per le fabbriche attorno a Detroit. La compagnia a stelle e strisce non ha fatto altro che coniugare praticità e resistenza con fit più morbidi, facendo arrivare in strada quello che veniva indossato dentro le industrie: modelli come la Chore Coat, la Car-Lux e i pantaloni Carhartt Aviation Ripstop hanno fatto la fortuna di un brand che negli anni '90 è diventato sinonimo di freshness grazie alla musica rap e hip hop, portato da icone del calibro di Tupac Shakur e Notorious Big. Ecco da dove arrivano le giacche anorak con maxi-tasca centrale, i pantaloni cargo e le felpe oversize con il cappuccio: il workwear oggi è una filosofia di vita che mescola la qualità dei tessuti con il background, per uno stile che si riconosce a colpo d'occhio. Per restare in tema, Levi's ha iniziato tutto con un blue denim di ottima fattura e ci costruito sopra un impero: i Levi's 501 sono il paio di pantaloni jeans più iconico della storia e hanno indicato la via ad un'azienda che ora può contare su un logo unico e su un'offerta bilanciata che arriva fino alle immancabili giacche di jeans. Qualunque cosa succeda, il denim non andrà mai fuori moda.",
                    img: "https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    imgPos: true
                },
                {
                    title: "Protezione, colore e stile all'ennesima potenza",
                    text: "Guardare al passato per capire la direzione da prendere in futuro: niente conta quanto le radici, soprattutto in un mondo popolato da mille sotto-culture diverse. Brand come Fila esistono proprio per questo motivo: le tracksuit coordinate, l'attenzione per la qualità dei filati e il color-blocking dagli '70 fino ai '90 stanno alla base dello stile vintage, un'interpretazione della moda streetwear che si basa sui classici, contemplando anche rivisitazioni in chiave moderna. Se i meriti della compagnia italiana derivano in particolare dall'ambito sportivo, l'esuberante mondo delle università americane ha portato una ventata d'aria fresca introducendo importanti novità: una lunga serie di movimenti giovanili hanno adottato il college style come simbolo della libertà di parola ed espressione, vestendo coach jacket e sneaker in suede come fossero un uniforme. Dalla metà degli anni '80, Tommy Hilfiger incarna con naturalezza la versatilità dello stile preppy con collezioni che fondono le atmosfere di New York con l'energia dei college, alternando giacche retro, jeans da uomo e T-shirt logo. Alle scarpe ci pensano due mostri sacri come Puma e Reebok. Le Puma Suede nascono agli inizi degli anni '70 per Walt Frazier, ma sotto la spinta della cultura b-boy si affermano come una sneaker lifestyle a tutto tondo; stessa sorte delle Reebok Club C 85, che hanno mosso i primi passi sul campo da tennis prima di trasformarsi in un must-have da abbinare a qualsiasi outfit. Prima regola: mai sottovalutare il background di un brand.",
                    img: "https://images.unsplash.com/photo-1532409952975-8267e119e0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
                    imgPos: false
                },
                {
                    title: "Lo sport da indossare ogni giorno",
                    text: "Nato come abbigliamento tecnico per atleti di vari sport, in modo da aumentare le performance durante gare e allenamenti, lo sportswear è diventato una fucina di mode e trend nel giro di pochissimi anni. La maggior parte delle sneaker diffuse oggi ha visto la luce per una finalità sportiva: dalle Nike Air Force in poi, le scarpe da basket del passato si sono adattate e trasformate seguendo le necessità di una sneaker lifestyle da indossare ogni giorno. Ovviamente non si può parlare di activewear senza citare Jordan: dedicato al più grande giocatore nella storia della pallacanestro, il marchio americano continua a sfornare collezioni al passo con i tempi e conferma una volta di più l'influenza dello sport sulla società di oggi, anche grazie al Jumpman Logo e alla popolarità di Michael Jordan. Il settore running invece resta il territorio di caccia prediletto da colossi come adidas Originals, fondato nell'immediato dopoguerra e ancora sulla cresta dell'onda per i suoi alti standard di tecnologia e sviluppo. Le scarpe da corsa con le Three Stripes sono tra le più apprezzate e modelli come le adidas NMD spiegano il motivo: leggerezza comfort e design si intrecciano in una silhouette unica che sembra uscita dal futuro, rivoluzionando il concetto stesso di sneaker da running. La tecnologia Boost nell'intersuola e il tessuto Primeknit della tomaia hanno alzato l'asticella, raggiungendo vette di performance inimmaginabili con i primi modelli di Ultra Boost.",
                    img: "https://images.unsplash.com/photo-1525199078165-69ce4f553361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=659&q=80",
                    imgPos: true
                }
            ]
        };
    },
};
</script>

<style scoped>
@font-face {
  font-family: Black_Street;
  src: url(Black_Street.ttf);
}

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