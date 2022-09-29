<template>
  <div class="custom-container">
    <h1>{{home.title}}</h1>

    <div class="map-container" ref="map"></div>

  </div>
</template>

<script>

export default {

  head(){

    return{
      title: this.home.title,

    }
  },


  mounted(){
   this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)

  },

  async asyncData({params, $dataApi, error}) {

    const response = await $dataApi.getHome(params.id)

    if (!response.ok) return error ({ statusCode: response.status, message: response.statusText})

    return{
      home: response.json
    }

  }

}
</script>

<style lang="scss" scoped>

.map-container{
  border-radius: 10px;

  width:400px;
  height: 200px;
}

</style>
