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
        <Header />
        <Aboutme id="about" />
        <Work />
        <SmallProjects />
        <DesignProjects />
        <Blogs />
        <About />
        <SocialMedia />
        <Contact id="contact" />
      </div>
      <Footer />
    </div>
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
import Blogs from '../components/blogs.vue'
import SocialMedia from '../components/socialmedia.vue'
import Contact from '../components/contact'
import Footer from '../components/footer'
export default {
  components: {
    Navbar,
    Header,
    Work,
    SmallProjects,
    About,
    Aboutme,
    DesignProjects,
    Blogs,
    SocialMedia,
    Contact,
    Footer,
  },
  mounted() {
    if (process.browser) {
      const overlay = document.getElementById('preloader')
      setTimeout(() => {
        overlay.style.display = 'none'
      }, 5000)
      // eslint-disable-next-line no-undef
      luxy.init({
        // selector of main container
        wrapper: '#luxy',
        // speed
        wrapperSpeed: 0.08,
        targetSpeed: 0.02,
      })
      const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
      if (isMobile) {
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
    }
  },
  head: {
    title: 'Harsh Vardhan | Web Dev & UI/UX Designer',
  },
}
</script>
