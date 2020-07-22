<template>
  <div class="nav">
    <div class="menu-icon">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>
    <div class="menu_content">
      <ul>
        <li class="rev-block"><span class="cool-link">Lol</span></li>
        <li class="rev-block"><span class="cool-link">Lol</span></li>
        <li class="rev-block"><span class="cool-link">Lol</span></li>
        <li class="rev-block"><span class="cool-link">Lol</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      const menu = document.querySelector('.menu-icon')
      // eslint-disable-next-line camelcase
      const menu_content = document.querySelector('.menu_content')
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
}
</script>

<style>
@import '../styles/navabar.css';
</style>
