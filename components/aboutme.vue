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
      myimages: 'Screenshot_2021-04-09-18-37-12-88_f890dc7e3b036af087bf4fc99a642c7d.jpg',
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
