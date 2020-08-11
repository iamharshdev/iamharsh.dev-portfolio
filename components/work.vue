<template>
  <div id="section" class="work mt-4 row wid80 center">
    <div class="wid80 centre mb-4 mt-4">
      <h1 id="yellow">favored_<br />projects</h1>
    </div>
    <div class="row space-bw wid100">
      <div
        v-for="(project, index) in Projects"
        :key="project"
        class="col-md-6 mb-3"
      >
        <div
          class="card wid90 center"
          data-tilt
          :style="{ backgroundImage: `url(${getImageUrl(project.img)})` }"
        >
          <div class="card-inner wid60">
            <h2>{{ project.name }}</h2>
            <a :href="project.link">
              <button class="learn-more mb-1">
                <span class="circle">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Read More</span>
              </button>
            </a>
            <h2>{{ index }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Projects: [
        { name: 'Biotree', img: 'biotree.webp', link: '/biotree' },
        { name: 'Walldrops', img: 'walldrops.webp', link: '/walldrops' },
        {
          name: 'Falsomlake Carwash Website',
          img: 'falsomcarwash.webp',
          link: 'https://folsomhandcarwash.com/',
        },
        {
          name: 'Contra CSS Kit',
          img: 'contracss.webp',
          link: 'https://codepen.io/harsh-vardhan/pen/RwWRqKE',
        },
        {
          name: 'Gocorona : COVID Stats Website',
          img: 'gocorona.webp',
          link: 'https://gocorona.wtf/',
        },
        {
          name: 'COVID News API',
          img: 'coronews.webp',
          link: 'https://coronews.iamharsh.dev/',
        },
        {
          name: 'Leit-anim : Animation Library',
          img: 'leit-anim.webp',
          link: 'https://pensive-curran-1d0a11.netlify.app/',
        },
        {
          name: 'Neutron Code Editor',
          img: 'neutron_Code_editor.webp',
          link: 'https://neutron.iamharsh.dev',
        },
      ],
    }
  },
  mounted() {
    if (process.browser) {
      const element = document.querySelectorAll('.card')
      // eslint-disable-next-line no-undef
      element.forEach(inittilt)
      // eslint-disable-next-line no-inner-declarations
      function inittilt(item) {
        // eslint-disable-next-line no-undef
        VanillaTilt.init(item)
      }
    }
  },
  methods: {
    getImageUrl(img) {
      return require('../assets/' + img)
    },
  },
}
</script>
