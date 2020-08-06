<template>
  <div id="section" class="wid80 center pb-4 pt-4">
    <div class="wid80 centre mb-2">
      <h1>Who <br />am i?</h1>
    </div>
    <p class="mb-1 wow slideInUp">
      I’m probably the most passionate designer you will ever work with. I've
      been designing ever since I was in school, though I came to it from a
      different career path of finance.
    </p>
    <p class="wow slideInUp">
      I've shown my love for design in many ways. I was the head of the design
      team in college. I started teaching design on my YouTube channel. I
      decided to take it to the next level and help and mentor design
      enthusiasts who are keen on getting into the design industry.
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      // eslint-disable-next-line no-undef
      new WOW().init()
    }
  },
}
</script>
