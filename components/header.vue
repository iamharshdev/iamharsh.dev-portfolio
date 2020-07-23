<template>
  <div id="section" class="header pt-4 row wid80 pb-4 center">
    <section class="col">
      <h1 class="mt-4 row" style="color: white;">
        <s>H</s><s>e</s><s>l</s><s>l</s><s>o</s><s>,&nbsp;</s><s>I</s><s>'</s
        ><s>m&nbsp;</s><s>H</s><s>a</s><s>r</s><s>s</s><s>h.</s>
      </h1>
      <h1 class="row" style="color: white;">
        <s>a&nbsp;</s><s>f</s><s>r</s><s>o</s><s>n</s><s>t</s><s>-</s><s>e</s
        ><s>n</s><s>d&nbsp;</s><s>d</s><s>e</s><s>v</s><s>e</s><s>l</s><s>o</s
        ><s>p</s><s>e</s><s>r</s>
      </h1>
      <div class="wrap-info mt-3">
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
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="arrow"
              transform="translate(-904.000000, -343.000000)"
              stroke="#FFFFFF"
              stroke-width="2"
            >
              <path
                id="wrap-arrow"
                d="M912.545285,345 L946.743,379.198 L946.74357,345.246688 L956,345.246688 L956,395 L906.246688,395 L906.246688,385.74357 L940.198,385.743 L906,351.545285 L912.545285,345 Z"
              ></path>
            </g>
          </g>
        </svg>
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
  mounted() {
    if (process.browser) {
      // eslint-disable-next-line no-undef
      setAnimationSaxx('s', 'saxx jello')
      // eslint-disable-next-line no-undef
      setSaxxMouseEffect('s', 'saxx jello', 'white', 'white')
    }
  },
}
</script>
