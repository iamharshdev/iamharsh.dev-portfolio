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
          <h1 class="violet">Walldrops</h1>
          <a :href="project.link" target="blank"
            ><button class="learn-more mb-1">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Learn More</span>
            </button></a
          >
          <p class="mb-2">{{ project.para[0] }}</p>
          <img :src="getImageUrl(project.images[0])" style="width: 100%;" />
          <p class="mb-2 mt-2">{{ project.para[1] }}</p>
          <img
            :src="getImageUrl(project.images[1])"
            style="width: 100%; margin-bottom: 2rem;"
          />
          <img :src="getImageUrl(project.images[2])" style="width: 100%;" />
        </div>
        <Contact />
        <Footer />
      </div>
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
      project: data.projects.walldrops,
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
    title: 'Walldrops | Harsh Vardhan',
  },
}
</script>
