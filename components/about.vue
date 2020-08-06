<template>
  <div id="section" class="wid80 center pb-4">
    <div class="wid80 centre mb-2">
      <h1>My adroitness</h1>
      <p class="wow slideInUp">
        This is what my Design & Development adroitness looks like:
      </p>
    </div>
    <div id="about" class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <div class="wid100 center">
            <ul>
              <li
                v-for="skill in skills.design"
                :key="skill"
                class="wow slideInUp"
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
                >{{ skill }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="wid100 center">
            <ul>
              <li
                v-for="skill in skills.code"
                :key="skill"
                class="wow slideInUp"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="h-6 pr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {{ skill }}
              </li>
            </ul>
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
      skills: {
        code: [
          'HTML5/CSS3/JS',
          'Nuxt.js/Vue.js/React.js/Node.js/Express.js',
          'Bootstrap',
          'Mobile Development',
          'Python',
          'MySQL',
          'XML',
          'JAVA',
          'REST APIs',
          'GIT/CVS',
          'Firebase',
          'Wordpress',
          'Linux/Bash',
          'PWA/SPA',
          'SSH',
        ],
        design: [
          'Graphic Design',
          'Photoshop, Illustrator',
          'Figma, Adobe XD',
          'Web Design',
          'User Interface Design',
          'Mobile app design',
        ],
      },
    }
  },
  mounted() {
    if (process.browser) {
      // eslint-disable-next-line no-undef
      new WOW().init()
    }
  },
}
</script>
<style>
ul li {
  font-family: 'Pero', sans-serif;
}
</style>
