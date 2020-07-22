<template>
  <div id="section" class="small_projects pt-4 mt-4 pb-4 mb-4">
    <div class="wid80 center">
      <h1 class="mb-4">$CodeLab_</h1>
      <p class="mb-2">
        Hey! I also did some small projects for fun :)
      </p>
      <ul>
        <span v-for="project in projects" :key="project">
          <li class="cool-link" @mouseover="getposition">
            {{ project.title }}
          </li>
          <div id="container" class="container">
            <img id="smallimg" :src="project.img" />
          </div>
        </span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 1,
      y: 0,
      showimg: '',
      projects: [
        {
          title: 'Saxxtext.js - Text animation library',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        {
          title: 'PhisCam - Take WebcamShots of victim using a link',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        { title: 'Electron Cursor.js', img: '' },
        {
          title: 'GitHub Bot - Automate your github',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        {
          title: 'FUCKUIP.py - Details of any ip address',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        {
          title: 'Joe Virtual Assistant.py',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        {
          title: 'CompressImage.py/sh',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        {
          title: 'InstagramBot.py - Get more instagram reach',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        {
          title: 'HotelManagement.js - Automate your hotel things using python',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
        {
          title: 'ProtonYTD - YouTube video downloader [Node.js]',
          img:
            'https://prathameshkoshti.com/images/project_images/movie-database.png',
        },
      ],
    }
  },
  methods: {
    // eslint-disable-next-line object-shorthand
    getposition: function (e) {
      if (process.browser) {
        this.x = e.clientX + 25 + 'px'
        this.y = e.clientY + 100 + 'px'
        const elem = document.querySelectorAll('.container')
        const that = this
        elem.forEach(addPosition)
        // eslint-disable-next-line no-inner-declarations
        function addPosition(params) {
          params.style.top = that.y
          params.style.left = that.x
        }
      }
    },
  },
}
</script>
