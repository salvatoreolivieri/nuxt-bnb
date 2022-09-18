<template>
  <div class="apartment-card debug">
        <img :src="home.images[0]" alt="">

        {{home.title}}
    </div>
</template>

<script>
export default {

  props:{

    home:{
      type: Object,
      required: true
    }

  }

}
</script>

<style lang="scss" scoped>

.apartment-card{

  width: 200px;
  height: 100px;

  margin: 10px;

  img{
    width: 100%;
    height: 100px;

  }
}


</style>
