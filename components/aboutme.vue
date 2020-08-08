<template>
  <div id="section" class="pt-2 row wid100">
    <div class="row">
      <div class="col-md-8 center">
        <div class="wid80 center">
          <div class="wid80 centre mb-2">
            <h1 id="violet">Who <br />am i?</h1>
          </div>
          <p class="mb-1">{{ about.about[0] }}</p>
          <p class="mb-2">{{ about.about[1] }}</p>
          <p class="mb-2">{{ about.about[2] }}</p>
        </div>
      </div>
      <div class="col-md-4 flex-center">
        <img :src="getImageUrl(myimages)" style="width: 100%; height: 100%;" />
      </div>
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
