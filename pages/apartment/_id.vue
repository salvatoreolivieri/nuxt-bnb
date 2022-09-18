<template>
  <div class="custom-container">
    <h1>{{home.title}}</h1>

    <div class="map-container" style="width:400px; height: 200px;" ref="map"></div>

  </div>
</template>

<script>
import homes from '~/data/homes.json'

export default {

  head(){

    return{
      title: this.home.title,
      script: [
        {
          src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVL-Z9FIguDCw4Pb_VWDrC3D0aO-FNELM&Libraries=places",
          hid: "map",
          defer: true
        }
      ]
    }
  },

  data(){
    return{
      home: {}
    }
  },

  mounted(){

    const mapOptions = {

      // Obbligatori
      zoom: 18,
      center: {lat: this.home._geoloc.lat, lng: this.home._geoloc.lng},

      // Abbellisce la UI
      disableDefaultUI: true,

      // Zoom e street view
      zoomControl: true,
      streetViewControl: true,

      mapTypeId: 'roadmap',
    }

    // Mappa:
    const map = new window.google.maps.Map(this.$refs.map, mapOptions)

    //Posizione e relativo marker:
    const position = {lat: this.home._geoloc.lat, lng: this.home._geoloc.lng}
    const marker = new window.google.maps.Marker({position})
    marker.setMap(map)

  },

  created(){
    const home = homes.find((home) => home.objectID == this.$route.params.id)

    this.home = home
  }

}
</script>

<style lang="scss" scoped>

.map-container{
  border-radius: 10px;
}

</style>
