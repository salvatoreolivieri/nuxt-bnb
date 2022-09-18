<template>
  <div>

    <HeroSection />

    <div class="custom-container">

      <HomeCard
        v-for="home in homes"
        :key="home.objectID"
        :home="home"
      />

    </div>


  </div>
</template>

<script>
import Vue from 'vue'
import homes from '~/data/homes.json'

export default Vue.extend({
    name: "IndexPage",
    data() {
        return {
            homes: homes.slice(0, 3)
        };
    },
})
</script>

<style lang="scss" scoped>


  .apartment-container{
    display: flex;
  }

  .premium-apartment{
    display: flex;
    flex-wrap: wrap
  }

</style>
