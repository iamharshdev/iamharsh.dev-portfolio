<template>
  <div id="section" class="wid80 center pb-4 pt-4">
    <div class="row center> <div class=" col-md-8 wid80 center>
      <div class="wid80 centre mb-2">
        <h1>Who <br />am i?</h1>
      </div>
      <p class="mb-1">{{ about.about[0] }}</p>
      <p class="mb-2">{{ about.about[1] }}</p>
      <p class="mb-2">{{ about.about[2] }}</p>
    </div>
    <div class="col-md-4 center">
      <img :src="getImageUrl(myimages)" style="width: 100%; height: 100%;" />
    </div>
  </div>
</template>

<script>
import data from '../json/data.json'
export default {
  data() {
    return {
      myimages: 'dp1.jpg',
      about: data,
    }
  },
  methods: {
    getImageUrl(img) {
      return require('../assets/dp/' + img)
    },
  },
}
</script>
