<template>
  <div class="nav">
    <div class="menu-icon">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>
    <div class="menu_content">
      <ul>
        <li class="rev-block">
          <span class="cool-link" @click="home()">Home</span>
        </li>
        <li class="rev-block">
          <span class="cool-link" @click="about()">About</span>
        </li>
        <li class="rev-block">
          <a href="https://electron.iamharsh.dev/" target="blank"
            ><span class="cool-link">Blog</span></a
          >
        </li>
        <li class="rev-block">
          <span class="cool-link" @click="contact()">Contact</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    if (process.browser) {
      const menu = document.querySelector('.menu-icon')
      // eslint-disable-next-line camelcase
      const menu_content = document.querySelector('.menu_content')
      const item = document.querySelectorAll('.rev-block')
      for (let index = 0; index < item.length; index++) {
        const element = item[index]
        element.addEventListener('click', () => {
          menu.classList.remove('nav-active')
          menu_content.classList.remove('hidden')
        })
      }
      menu.addEventListener('click', () => {
        if (
          menu.classList.contains('nav-active') &&
          menu_content.classList.contains('hidden')
        ) {
          menu.classList.remove('nav-active')
          menu_content.classList.remove('hidden')
        } else {
          menu.classList.add('nav-active')
          menu_content.classList.add('hidden')
        }
      })
    }
  },
  methods: {
    home() {
      this.$router.push('/')
    },
    about() {
      this.$router.push('/#about')
    },
    contact() {
      this.$router.push('/#contact')
    },
  },
}
</script>

<style>
@import '../styles/navabar.css';
</style>
