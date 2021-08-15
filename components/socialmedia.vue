<template>
  <div class="wid80 center">
    <div class="wid80 centre">
      <h1 id="pinkred">Instagram</h1>
      <p>
        I am sharing my journey as a designer/developer on my Instagram handle.
        So, you can follow me up on instagram for some useful content and if you
        have any queries related to coding & design you can hit me up with a DM.
      </p>
    </div>
    <div class="row wid100 insta mb-3 mt-3">
      <script src="https://embedsocial.com/js/iframe.js"></script>
      <iframe
        style="border: 0; width: 100%; height: 100%;"
        scrolling="no"
        src="https://embedsocial.com/facebook_album/pro_hashtag/cb80182cdc8000469a573020e486065f41644e87"
      ></iframe>
      <script>
        iFrameResize()
        document.querySelector('#es-header').remove()
      </script>
    </div>
    <div class="center-text mt-4 mb-4">
      <a href="https://instgram.com/iamharsh.dev" target="blank"
        ><button class="main-btn instacolor center-text row center">
          <div class="pr-1">View All Posts on Instagram</div>
          <i class="im im-instagram"></i></button
      ></a>
    </div>
    <div class="wid80 centre">
      <h1 id="yellow">YouTube</h1>
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
      <h1 id="violet">Stay, Connect & Learn with Me</h1>
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
