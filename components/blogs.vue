<template>
  <div class="wid80 center">
    <div class="wid80 centre pb-2">
      <h1 class="mb-2">Blogs <br />by me</h1>
      <p>
        Hey! I have a blog named Electron where i mainly talk about design &
        development tips. So, do make sure you check it out.
      </p>
    </div>
    <div class="row wid100 space-bw mt-2 mb-4">
      <div v-for="blog in blogs" :key="blog" class="col-md-6">
        <div class="wid90 center">
          <a :href="blog.link" target="blank">
            <div class="blogs_card">
              <img :src="blog.img" />
              <h3 class="mt-1 mb-1">{{ blog.title }}</h3>
              <p style="color: #2c2c2e;" class="mb-2">
                Written by Harsh Vardhan Goswami
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: 'Vue.js Getting started with vuejs',
          img:
            'https://electron.iamharsh.dev/assets/uploads/Vue.js-Crash-course.png',
          link:
            'https://electron.iamharsh.dev/webdevelopment/javascript/2020/04/10/vue.js-getting-started-with-vuejs',
        },
        {
          title: 'Getting Started with Node.js & Express',
          img:
            'https://electron.iamharsh.dev/assets/uploads/pink-and-blue-geometric-technology-keynote.png',
          link:
            'https://electron.iamharsh.dev/webdevelopment/javascript/2020/03/20/getting-started-with-node-js-express.html',
        },
        {
          title: 'Shorten git commands with git aliases',
          link:
            'https://electron.iamharsh.dev/git/2020/03/13/shorten-git-commands-with-git-alias',
          img:
            'https://electron.iamharsh.dev/assets/uploads/Shorten%20git%20commands%20with%20git%20aliases.png',
        },
        {
          title: 'Create A Dark/Light Theme Switch with CSS/JS',
          img:
            'https://electron.iamharsh.dev/assets/uploads/is-dark-mode-better-for-you-980x551.png',
          link:
            'https://electron.iamharsh.dev/2020/03/03/create-a-theme-switch-with-css-&-js',
        },
        {
          title: 'The way around Structed Query Language (SQL)',
          img:
            'https://electron.iamharsh.dev/assets/uploads/screenshot_20200309-214943~2.png',
          link:
            'https://electron.iamharsh.dev/rdbms/crash_course/2020/03/09/the-way-around-structed-query-language-sql.html',
        },
        {
          title: 'GIT CLI CRASH COURSE',
          img:
            'https://electron.iamharsh.dev/assets/uploads/screenshot_20200307-002316.png',
          link:
            'https://electron.iamharsh.dev/crash_course/git/2020/03/06/git-cli-crash-course.html',
        },
      ],
    }
  },
}
</script>
