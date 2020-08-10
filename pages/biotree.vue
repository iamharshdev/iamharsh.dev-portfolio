<template>
  <div>
    <div id="preloader" class="animcontainer">
      <div class="text-wrapper">
        <div class="text-1 text">don't create limitations</div>
        <div class="text-2 text">don't create limitations</div>
        <div class="text-3 text">don't create limitations</div>
        <div class="text-4 text">don't create limitations</div>
        <div class="text-5 text">don't create limitations</div>
        <div class="text-6 text">don't create limitations</div>
        <div class="text-7 text">don't create limitations</div>
        <div class="text-8 text">don't create limitations</div>
        <div class="text-9 text">don't create limitations</div>
        <div class="text-10 text">don't create limitations</div>
        <div class="text-11 text">don't create limitations</div>
      </div>
    </div>
    <div id="luxy">
      <Navbar />
      <div id="distort">
        <div
          class="wid100 main-bg"
          :style="{ backgroundImage: `url(${getImage(project.img)})` }"
        ></div>
        <div class="col wid80 center pt-2">
          <h1 class="yellow">Biotree</h1>
          <a :href="project.link" target="blank">
            <button class="learn-more mb-1">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Learn More</span>
            </button></a
          >
          <p class="mb-2">{{ project.para[0] }}</p>
          <img :src="getImageUrl(project.images[0])" style="width: 100%;" />
          <p class="mb-2 mt-2">{{ project.para[1] }}</p>
          <p class="mb-2">{{ project.para[2] }}</p>
          <img :src="getImageUrl(project.images[1])" style="width: 100%;" />
          <p class="mb-2 mt-2">{{ project.para[3] }}</p>
          <img :src="getImageUrl(project.images[2])" style="width: 100%;" />
          <ul class="mt-2 mb-2">
            <li
              v-for="(feature, i) in project.features"
              :key="i"
              class="mb-1 px24"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                viewBox="0 0 24 24"
                class="h-6 pr-1"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path></svg
              >{{ feature }}
            </li>
          </ul>
          <img :src="getImageUrl(project.images[3])" style="width: 100%;" />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  </div>
</template>
<script>
import data from '../json/data.json'
import Navbar from '../components/navbar'
import Contact from '../components/contact'
import Footer from '../components/footer'
export default {
  components: {
    Navbar,
    Contact,
    Footer,
  },
  data() {
    return {
      project: data.projects.biotree,
    }
  },
  mounted() {
    if (process.browser) {
      const overlay = document.getElementById('preloader')
      setTimeout(() => {
        overlay.style.display = 'none'
      }, 4000)
      // eslint-disable-next-line no-undef
      luxy.init({
        // selector of main container
        wrapper: '#luxy',
        // speed
        wrapperSpeed: 0.08,
        targetSpeed: 0.02,
      })
      const content = document.querySelector('#distort')
      let currentPos = window.pageYOffset
      const callDistort = function () {
        const newPos = window.pageYOffset
        const diff = newPos - currentPos
        const speed = diff * 0.1
        content.style.transform = 'skewY(' + speed + 'deg)'
        currentPos = newPos
        requestAnimationFrame(callDistort)
      }
      callDistort()
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
  head: {
    title: 'Biotree | Harsh Vardhan',
  },
}
</script>
