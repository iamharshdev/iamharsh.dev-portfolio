<template>
  <div id="section" class="work mt-4 row wid80 center">
    <div class="wid80 centre mb-4 mt-4">
      <h1>favored_<br />projects</h1>
    </div>
    <div class="row space-bw wid100">
      <div class="col-md-3 align-top">
        <div class="card card1" data-tilt>
          <div class="card-inner">
            <h2>Rotary website</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 align-end">
        <div class="card card2" data-tilt>
          <div class="card-inner">
            <h2>Neutron Code Editor</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 align-end">
        <div class="card card3" data-tilt>
          <div class="card-inner">
            <h2>COVID19 NEWS & STATS API</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 space-bw wid100">
      <div class="col-md-5 align-top">
        <div class="card card4" data-tilt>
          <div class="card-inner">
            <h2>Walldrops</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
      <div class="col-md-5 align-centre">
        <div class="card card5" data-tilt>
          <div class="card-inner">
            <h2>Biotree</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="row space-bw mt-4">
      <div class="col-md-3 align-top">
        <div class="card card6" data-tilt>
          <div class="card-inner">
            <h2>Gocorona website</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 align-end">
        <div class="card card7" data-tilt>
          <div class="card-inner">
            <h2>Phiscam</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 align-end">
        <div class="card card8" data-tilt>
          <div class="card-inner">
            <h2>ROM Port tool</h2>
            <button class="cool-link">Read More</button>
            <h2>01</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
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
}
</script>
