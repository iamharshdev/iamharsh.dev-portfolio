<template>
  <div class="wid80 center">
    <div class="wid80 centre pb-2">
      <h1>i can <br />design as well!</h1>
    </div>
    <div class="row wid100 space-bw mt-2 mb-4">
      <div v-for="design in designProjects" :key="design" class="col-md-6">
        <div class="wid90 center">
          <a :href="design.link" target="blank">
            <div class="design_card">
              <img :src="design.img" />
              <h3 class="mt-1 mb-1">{{ design.title }}</h3>
              <p style="color: #2c2c2e;" class="mb-2">{{ design.status }}</p>
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
      designProjects: [
        {
          title: 'Ice-cream store app',
          link: 'https://dribbble.com/shots/10906655-Ice-cream-store-app',
          status: 'Personal',
          img:
            'https://cdn.dribbble.com/users/2742291/screenshots/10906655/media/f36ac97f72050467fd6ed25f8a5db126.png',
        },
        {
          title: 'Blog reading app',
          link: 'https://dribbble.com/shots/10497074-Blog-App-Desing',
          status: 'Personal',
          img:
            'https://cdn.dribbble.com/users/2742291/screenshots/10497074/media/49a2680a832891aca0d08e0d034179e2.png',
        },
        {
          title: 'SEO Agency Landing Page Web Design',
          link:
            'https://dribbble.com/shots/6580748-SEO-Agency-Landing-Page-Web-Design',
          status: 'Personal',
          img:
            'https://cdn.dribbble.com/users/2742291/screenshots/6580748/seo_agency_dribble_3x_2x.png',
        },
        {
          title: 'Google Maps Minimal UI Redesign',
          link:
            'https://dribbble.com/shots/6546168-Google-Maps-Minimal-UI-Redesign',
          status: 'Personal',
          img:
            'https://cdn.dribbble.com/users/2742291/screenshots/6546168/artboard___1_3x_2x.png',
        },
        {
          title: 'Crux-Mobile App Landing Page Template',
          link:
            'https://dribbble.com/shots/6527340-Crux-Mobile-App-Landing-Page-Template',
          status: 'Personal',
          img:
            'https://cdn.dribbble.com/users/2742291/screenshots/6527340/crux-dribble_3x_2x.png',
        },
        {
          title: 'SEO Expert Girl Illustration',
          link:
            'https://dribbble.com/shots/6576182-SEO-Expert-Girl-Illustration',
          status: 'Personal',
          img:
            'https://cdn.dribbble.com/users/2742291/screenshots/6576182/seo-expert-girl-illustration-234691.png',
        },
      ],
    }
  },
}
</script>
