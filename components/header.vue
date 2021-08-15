<template>
  <div id="section" class="header vh pt-4 row wid80 pb-4 center">
    <section class="col flex-center">
      <h1 class="mt-4 row" style="color: white;">
        <s id="cyan">H</s><s id="green">e</s><s id="yellow">y</s><s>👋</s
        ><s id="blueviolet">,&nbsp;</s><s id="cyan">I</s><s id="green">'</s
        ><s id="yellow">m&nbsp;</s><s id="violet">H</s><s id="pinkred">a</s
        ><s id="blueviolet">r</s><s id="cyan">s</s><s id="green">h.</s>
      </h1>
      <h1 class="row" style="color: white;">
        <s id="yellow">a&nbsp;</s><s id="violet">f</s><s id="pinkred">u</s
        ><s id="cyan">l</s><s id="green">l</s><s id="yellow">-</s
        ><s id="blueviolet">s</s><s id="green">t</s><s id="pinkred">a</s
        ><s id="yellow">c</s><s id="green">k&nbsp;</s><s id="violet pl-m-1">d</s
        ><s id="blueviolet">e</s><s id="yellow">v</s><s id="pinkred">e</s
        ><s id="violet">l</s><s id="pinkred">o</s><s id="green">p</s
        ><s id="yellow">e</s><s id="blueviolet">r</s>
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
      setSaxxMouseEffect('s', 'saxx jello')
    }
  },
}
</script>
