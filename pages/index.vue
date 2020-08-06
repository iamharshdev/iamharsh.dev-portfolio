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
    <div id="luxy" class="smooth-scroll-wrapper">
      <Navbar />
      <div id="distort">
        <Header />
        <Aboutme />
        <Work />
        <SmallProjects />
        <DesignProjects />
        <Blogs />
        <About />
        <SocialMedia />
        <Contact />
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
      // eslint-disable-next-line no-undef
      new WOW().init()

      const overlay = document.getElementById('preloader')
      window.addEventListener('load', function () {
        overlay.style.display = 'none'
      })

      const body = document.body
      const main = document.getElementById('luxy')
      let sx = 0 // For scroll positions
      let sy = 0
      let dx = sx // For container positions
      let dy = sy
      body.style.height = main.clientHeight + 'px'
      main.style.position = 'fixed'
      main.style.top = 0
      main.style.left = 0
      // Bind a scroll function
      window.addEventListener('scroll', easeScroll)
      // eslint-disable-next-line no-inner-declarations
      function easeScroll() {
        sx = window.pageXOffset
        sy = window.pageYOffset
      }
      window.requestAnimationFrame(render)
      // eslint-disable-next-line no-inner-declarations
      function render() {
        // We calculate our container position by linear interpolation method
        dx = li(dx, sx, 0.07)
        dy = li(dy, sy, 0.07)
        dx = Math.floor(dx * 100) / 100
        dy = Math.floor(dy * 100) / 100
        main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`
        window.requestAnimationFrame(render)
      }
      // eslint-disable-next-line no-inner-declarations
      function li(a, b, n) {
        return (1 - n) * a + n * b
      }
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
}
</script>
