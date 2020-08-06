<template>
  <div id="section" class="work mt-4 row wid80 center">
    <div class="wid80 centre mb-4 mt-4">
      <h1>favored_<br />projects</h1>
    </div>
    <div class="row space-bw wid100">
      <div
        v-for="(project, index) in Projects"
        :key="project"
        class="col-md-6 mb-3 wow slideInUp"
      >
        <div
          class="card wid90 center"
          data-tilt
          :style="{ backgroundImage: `url(${getImageUrl(project.img)})` }"
        >
          <div class="card-inner wid60">
            <h2>{{ project.name }}</h2>
            <button class="learn-more mb-1" @click="viewProject(project.title)">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Read More</span>
            </button>
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
        { name: 'Biotree', img: 'biotree.webp' },
        { name: 'Walldrops', img: 'walldrops.webp' },
        {
          name: 'Falsomlake Carwash Website',
          img: 'falsomcarwash.webp',
        },
        { name: 'Contra CSS Kit', img: 'contracss.webp' },
        {
          name: 'Gocorona : COVID Stats Website',
          img: 'gocorona.webp',
        },
        { name: 'COVID News API', img: 'coronews.webp' },
        {
          name: 'Leit-anim : Animation Library',
          img: 'leit-anim.webp',
        },
        {
          name: 'Neutron Code Editor',
          img: 'neutron_Code_editor.webp',
        },
      ],
    }
  },
  mounted() {
    if (process.browser) {
      // eslint-disable-next-line no-undef
      new WOW().init()
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
