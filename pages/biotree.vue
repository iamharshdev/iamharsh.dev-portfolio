<template>
  <div
    class="wid100"
    :style="{ backgroundImage: `url(${getImage(project.img)})` }"
  >
    <div class="row wid80 center pt-2">
      <h1>Biotree</h1>
      <a :href="project.link" target="blank">
        <button class="learn-more mb-1">
          <span class="circle">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button></a
      >
      <p>{{ project.para[0] }}</p>
      <img :src="project.images[0]" style="width: 100%;" />
      <p>{{ project.para[1] }}</p>
      <p>{{ project.para[2] }}</p>
      <img :src="project.images[1]" style="width: 100%;" />
      <p>{{ project.para[3] }}</p>
      <img :src="project.images[2]" style="width: 100%;" />
      <ul class="mt-1 mb-1">
        <li v-for="(feature, i) in project.features" :key="i">{{ feature }}</li>
      </ul>
      <img :src="project.images[3]" style="width: 100%;" />
    </div>
  </div>
</template>
<script>
import data from '../json/data.json'
export default {
  data() {
    return {
      project: data.projects.biotree,
    }
  },
  methods: {
    getImageUrl(image) {
      return require('../assets/projects/' + image)
    },
    getImage(image) {
      return require('../assets/' + image)
    },
  },
}
</script>
