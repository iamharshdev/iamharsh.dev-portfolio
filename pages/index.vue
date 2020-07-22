<template>
  <div class="container smooth-scroll-wrapper">
    <Navbar />
    <Header />
    <Aboutme />
    <Work />
    <SmallProjects />
    <DesignProjects />
    <About />
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Header from '../components/header'
import Work from '../components/work'
import SmallProjects from '../components/smallProjects.vue'
import About from '../components/about.vue'
import Aboutme from '../components/aboutme.vue'
import DesignProjects from '../components/designprojects.vue'
export default {
  components: {
    Navbar,
    Header,
    Work,
    SmallProjects,
    About,
    Aboutme,
    DesignProjects,
  },
  mounted() {
    if (process.browser) {
      const body = document.body
      const scrollWrap = document.getElementsByClassName(
        'smooth-scroll-wrapper'
      )[0]
      const height = scrollWrap.getBoundingClientRect().height - 1
      const speed = 0.055
      let offset = 0
      body.style.height = Math.floor(height) + 'px'
      // eslint-disable-next-line no-inner-declarations
      function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed
        const scroll = 'translateY(-' + offset + 'px) translateZ(0)'
        scrollWrap.style.transform = scroll
        requestAnimationFrame(smoothScroll)
      }
      smoothScroll()
    }
  },
}
</script>
