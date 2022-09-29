<template>

<div class="about-us-section">

  <div class="row custom-container">

      <div class="col-lg-4 col-md-12 col-sm-12 about-text">
          <h2>{{ about[counter].title }}</h2>
          <p>{{ about[counter].text }}</p>

          <div class="slider">
              <span
              @click="counter = 0"
              :class="this.counter == 0 ? 'active' : '' ">1
              </span>

              <span
              @click="counter = 1"
              :class="this.counter == 1 ? 'active' : '' ">2
              </span>

              <span
              @click="counter = 2"
              :class="this.counter == 2 ? 'active' : '' ">3
              </span>
          </div>
      </div>

      <div
          @mouseover = mouseIsHover
          @mouseleave = mouseNotHover
          class="img-container text-center">
          <img :src="about[counter].img" :alt="about[counter].title">
      </div>

  </div>

  </div>

</template>

<script>

export default {
  name: 'AboutComp',

  data(){
      return{
          counter: 0,
          about:[
              {
                  title: "Chi siamo",
                  text: "Siamo la piattaforma su cui puoi fare affidamento per trovare il tuo bnb ideale. Crediamo nella capacità di fare la differenza, per questo tutti i nostri bnb sono realizzati con materie prime ecosostenibili e ad impatto zero. Desideriamo fare la differenza.",
                  img: "https://images.contentstack.io/v3/assets/bltfa2cefdbe7482368/bltcfe32ad33e97bbed/5f5a61332d8d464b43a53626/DenverFeature_1200x630.jpg"
              },
              {
                  title: "Perchè sceglierci",
                  text: "Tutti i nostri bnb sono moderni, vicino alla natura ed ecosostenibili. Garantiamo eccellenza al miglior rapporto qualità-prezzo possibile! Scegliendo i nostri bnb otterrai comfort, benessere e prezzi accessibili ad ogni stagione!",
                  img: "https://images.contentstack.io/v3/assets/bltfa2cefdbe7482368/bltc6f7c14c70c7db16/5f4d553799431928ffc0df9c/Atlanta_header1200x630.jpg"
              },
              {
                  title: "La nostra missione",
                  text: "Vogliamo rivoluzionare il mondo travel permettendo a chiunque di viaggiare. Siamo riusciti nel nostro intento garantendo a tutti i nostri iscritti appartamenti economici, moderni e vicino alla natura. Prendi parte al nostro movimento!",
                  img: "https://images.contentstack.io/v3/assets/bltfa2cefdbe7482368/blte6275d47f2e91243/5f5fcf575e85ad4dee18eb0f/Miamifeature_1200x630.jpg"
              },
          ]
      }
  },

  methods:{
      mouseIsHover(){
          this.showButton = true;
      },
      mouseNotHover(){
          this.showButton = false;
      }
  }
}
</script>
