<template>
  <div id="section" class="header pt-4 row wid80 pb-4 center">
    <div
      v-for="(img, index) in myimages"
      :key="index"
      :class="`img img-${index + 1}`"
      :style="{ backgroundImage: `url(${getImageUrl(img)})` }"
    ></div>
    <section class="col">
      <h1 class="mt-4 row" style="color: white;">
        <s>H</s><s>e</s><s>l</s><s>l</s><s>o</s><s>,&nbsp;</s><s>I</s><s>'</s
        ><s>m&nbsp;</s><s>H</s><s>a</s><s>r</s><s>s</s><s>h.</s>
      </h1>
      <h1 class="row" style="color: white;">
        <s>a&nbsp;</s><s>f</s><s>u</s><s>l</s><s>l</s><s>-</s><s>s</s><s>t</s
        ><s>a</s><s>c</s><s>k&nbsp;</s><s>d</s><s>e</s><s>v</s><s>e</s><s>l</s
        ><s>o</s><s>p</s><s>e</s><s>r</s>
      </h1>
      <div class="wrap-info mt-3">
        <lol>
          <svg
            class="arrow"
            width="53px"
            height="53px"
            viewBox="0 0 53 53"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="arrow-wrap"
              stroke="none"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="arrow"
                transform="translate(-904.000000, -343.000000)"
                stroke="#FFFFFF"
                stroke-width="3"
              >
                <path
                  id="wrap-arrow"
                  d="M912.545285,345 L946.743,379.198 L946.74357,345.246688 L956,345.246688 L956,395 L906.246688,395 L906.246688,385.74357 L940.198,385.743 L906,351.545285 L912.545285,345 Z"
                ></path>
              </g>
            </g>
          </svg>
        </lol>
        <h3 class="mt-3">
          <span class="s-03"
            ><span>Currently works as freelance web developer & </span></span
          ><span class="s-03"><span>UX/UI Designer</span></span>
        </h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myimages: [
        'myimage1.webp',
        'myimage2.webp',
        'myimage3.webp',
        'myimage4.webp',
      ],
    }
  },
  mounted() {
    if (process.browser) {
      // eslint-disable-next-line no-undef
      setAnimationSaxx('s', 'saxx jello')
      // eslint-disable-next-line no-undef
      setSaxxMouseEffect('s', 'saxx jello', 'white', 'grey')
      // eslint-disable-next-line no-undef
      setAnimationSaxx('lol', 'saxx jello')
      // eslint-disable-next-line no-undef
      setSaxxMouseEffect('lol', 'saxx jello', 'white', 'white')
      const img1 = document.querySelector('.img-1')
      const img2 = document.querySelector('.img-2')
      const img3 = document.querySelector('.img-3')
      const img4 = document.querySelector('.img-4')

      document.addEventListener('mousemove', (e) => {
        img1.setAttribute(
          'style',
          'top:' + (e.pageY - 225) + 'px;left :' + (e.pageX - 200) + 'px'
        )
        img2.setAttribute(
          'style',
          'top:' + (e.pageY - 225) + 'px;left :' + (e.pageX - 200) + 'px'
        )
        img3.setAttribute(
          'style',
          'top:' + (e.pageY - 225) + 'px;left :' + (e.pageX - 200) + 'px'
        )
        img4.setAttribute(
          'style',
          'top:' + (e.pageY - 225) + 'px;left :' + (e.pageX - 200) + 'px'
        )
      })
    }
  },
  methods: {
    getImageUrl(img) {
      return require('../assets/dp/' + img)
    },
  },
}
</script>
