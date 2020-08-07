<template>
  <div class="wid80 center">
    <div class="wid80 centre">
      <h1>Instagram</h1>
      <p>
        I am sharing my journey as a designer/developer on my Instagram handle.
        So, you can follow me up on instagram for some useful content and if you
        have any queries related to coding & design you can hit me up with a DM.
      </p>
    </div>
    <div class="row wid100 insta mb-3 mt-3">
      <a
        v-for="post in posts"
        :key="post"
        class="p-1 col-md-4"
        :href="post.link"
      >
        <img :src="post.img" />
      </a>
    </div>
    <div class="center-text mt-4 mb-4">
      <a href="https://instgram.com/iamharsh.dev" target="blank"
        ><button class="main-btn instacolor center-text row center">
          <div class="pr-1">View All Posts on Instagram</div>
          <i class="im im-instagram"></i></button
      ></a>
    </div>
    <div class="wid80 centre">
      <h1>YouTube</h1>
      <p>
        I am sharing design/development tutorials on my YouTube channel. So, you
        can subscribe me up on my YouTube channel for some useful content and if
        you have any queries related to coding & design you can always hit me up
        with a DM on Instagram.
      </p>
    </div>
    <div class="row wid100 youtube mt-3">
      <a
        v-for="video in youtube"
        :key="video"
        class="p-1 col-md-6"
        :href="video.link"
      >
        <img :src="video.img" />
      </a>
    </div>
    <div class="center-text mt-4 mb-4">
      <a
        href="https://www.youtube.com/channel/UC0NajLO3hRx2mShwBW7ogJA"
        target="blank"
        ><button class="main-btn red center-text row center">
          <div class="pr-1">View All Videos on YouTube</div>
          <i class="im im-youtube"></i></button
      ></a>
    </div>
    <div class="wid80 centre">
      <h1>Stay, Connect & Learn with Me</h1>
      <p>
        Hey! If you wanna connect & learn with me so here are some links to my
        social media handles for you.
      </p>
    </div>
    <div class="socialmedia_links row wid100 space-bw pt-4 pb-4">
      <a href="https://www.linkedin.com/in/iamharshdev"
        ><i class="im im-linkedin twitter-blue socialicon"></i>
      </a>
      <a href="https://github.com/iamharshdev/"
        ><i class="im im-github github-green socialicon"></i
      ></a>
      <a href="https://dribbble.com/electronlabs"
        ><i class="im im-dribbble dribbble-pink socialicon"></i
      ></a>
      <a href="https://www.youtube.com/channel/UC0NajLO3hRx2mShwBW7ogJA"
        ><i class="im im-youtube youtube-red socialicon"></i
      ></a>
      <a href="https://www.instagram.com/iamharsh.dev/"
        ><i class="im im-instagram instagram-pink socialicon"></i
      ></a>
      <a href="https://twitter.com/iamharshdev"
        ><i class="im im-twitter twitter-blue socialicon"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          link: 'https://www.instagram.com/p/B94ER5ag_tP/',
          img:
            'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/90089032_533538260913333_5149727173154807493_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=pQ8woKARqm4AX_-Vk0e&oh=bd9960769fd6e81f7923fe76c7217c2b&oe=5F404582',
        },
        {
          link: 'https://www.instagram.com/p/CBVwheDg-q1/',
          img:
            'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/e35/103368462_259354398726524_6714071372308053771_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=DWYOZvkGbyMAX9itQ0Q&oh=e3bea686693e0ac15034490f80d61206&oe=5F400D04',
        },
        {
          link: 'https://www.instagram.com/p/CBxgFr7AHNX/',
          img:
            'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/e35/104441400_214591036247536_3347748870889536060_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=v-dTl92m5IUAX_EkJzE&oh=958fef8745562be2e4ed3fe34160aefe&oe=5F4086D1',
        },
        {
          link: 'https://www.instagram.com/p/B-10qDEgZTG/',
          img:
            'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/e35/92467628_206236780677620_1145407459707756669_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=Yw6mWu4wUTMAX8nkd0E&oh=050709fa45d7de454c5e404ba0786a9b&oe=5F403AD9',
        },
        {
          link: 'https://www.instagram.com/p/CB5TvzUA74_/',
          img:
            'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/104559835_221910432103442_1810489209651952968_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=U12MuwHaFvoAX-ic5MV&oh=77930176fcb4f04d39fae620791691d6&oe=5F42919E',
        },
        {
          link: 'https://www.instagram.com/p/CCDxWpQAJQp/',
          img:
            'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/e35/105968284_733200787511127_1743119767074285360_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=WgVkHgIpb5YAX-flbZc&oh=87cc4a3f5de251b2d810148fdd13874b&oe=5F430C75',
        },
      ],
      youtube: [
        {
          link: 'https://youtu.be/gOoLgZ6TlA8',
          img: 'http://i3.ytimg.com/vi/gOoLgZ6TlA8/maxresdefault.jpg',
        },
        {
          link: 'https://youtu.be/CiZ0FBlQ-RA',
          img: 'http://i3.ytimg.com/vi/CiZ0FBlQ-RA/maxresdefault.jpg',
        },
        {
          link: 'https://youtu.be/pc1x9dJmJaA',
          img: 'http://i3.ytimg.com/vi/pc1x9dJmJaA/maxresdefault.jpg',
        },
        {
          link: 'https://youtu.be/WIxL0v2xv3Q',
          img: 'http://i3.ytimg.com/vi/WIxL0v2xv3Q/maxresdefault.jpg',
        },
        {
          link: 'https://youtu.be/pDsAQtYPOrs',
          img: 'http://i3.ytimg.com/vi/pDsAQtYPOrs/maxresdefault.jpg',
        },
        {
          link: 'https://youtu.be/2uaeNHCHC40',
          img: 'http://i3.ytimg.com/vi/2uaeNHCHC40/maxresdefault.jpg',
        },
      ],
    }
  },
}
</script>
