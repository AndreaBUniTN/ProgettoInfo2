<template>
<v-layout
    column
    justify-center
  >
    <v-subheader>Today</v-subheader>

    <v-expansion-panel popout>
      <v-expansion-panel-content
        v-for="(avatar, i) in avatars"
        :key="i"
        hide-actions
      >
        <template v-slot:header>
          <v-layout
            align-center
            row
            spacer
          >
            <v-flex xs4 sm2 md1>
              <v-avatar
                size="128px"
              >
                <img
                  :src= avatar.src
                  :alt= avatar.name
                >
              </v-avatar>
            </v-flex>

            <v-flex sm5 md3 hidden-xs-only>
              <strong v-html="avatar.name"></strong>
            </v-flex>

            <v-flex no-wrap xs5 sm3>
              <strong v-html="avatar.role"></strong>
            </v-flex>
          </v-layout>
        </template>

        <v-card>
          <v-divider></v-divider>
          <v-card-text v-text="avatar.job"></v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>          

<!--
  <v-container fluid>
    <v-flex class="text-xs-center my-5" id="titolo">Chi siamo</v-flex>
    <v-layout row>
      <v-flex xs3></v-flex>
        <v-layout v-for="(avatar, index) in avatars" :key="index">
          <v-img :src="avatar.src" style="border-radius:50%"></v-img>
          <v-flex xs4></v-flex>
        </v-layout>
      <v-flex xs3></v-flex>
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
  </v-container> -->
</template>

<script>
export default {
  name: 'Who',
  data: function() {
    return {
      avatars: [
        { name: 'Andrea "Bobo" Boesso', src: require('../assets/bo.jpg'), role: 'Back-End Developer', job : 'Back-end developers primarily develop and maintain the core functional logic and operations of a software application or information system. Typically, a back-end developer has expert programming skills in C++, C#, Java and other high-level programming languages. The key job role of a back-end developer is to ensure that the data or services requested by the front-end system or software are delivered through programmatic means. Back-end developers also create and maintain the entire back-end of a system, which consists of the core application logic, databases, data and application integration, API and other back-end processes. Moreover, a back-end developer performs the testing and debugging of any back-end application or system.' },
        { name: 'Steve "Kiriku" Famoroti', src: require('../assets/ki.jpg'), role: 'UX Designer', job: 'A UX designer primarily works on the principles of human computer interaction (HCI). The job involves designing a system that provides the most benefits for an end user in terms of system usability. UX designers research, identify and evaluate all aspects, perceptions and points of interaction between a user and a computer system. These generally include the visual design, information architecture, usability and accessibility of the primary system. Typically, a UX designer has a broad understanding of an applications or systems interface as well as of human behaviors/psychology, overall information flow and technical knowledge of the developed system.'  },
        { name: 'Elia "Aznee" Rospocher', src: require('../assets/az.jpg'), role: 'Front-End Developer', job: 'A front-end developer is a programmer that codes the front end of a website. Typically, the front-end developers job is to convert website design files into raw HTML, JavaScript (JS) and/or CSS code. This includes the basic website design/layout, images, content, buttons, navigation and internal links. The end result is code that serves as the websites front-end structure, which is used by a back-end developer to add business logics and connect databases and processes, among other processes. A front-end developer is responsible for ensuring that a website visual front end is free of errors and looks exactly as designed. A front-end developer also ensures that a website has the same visibility across different computing and mobile Web browsers. Similarly, in software applications, a front-end web developer creates the graphical user interface (GUI) that enables access to the software back-end features and capabilities.'  }
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