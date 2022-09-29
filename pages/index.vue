<template>
  <div>

    <HeroSection />

    <PremiumApartmentSection />

    <SearchSection />

    <AboutSection />

    <RecentlyAddedSection />

    <SuggestionSection />

  </div>
</template>

<script>
import Vue from 'vue'
import homes from '~/data/homes.json'

export default Vue.extend({
    name: "IndexPage",
    data() {
        return {};
    },
})
</script>

<style lang="scss" scoped>


</style>
