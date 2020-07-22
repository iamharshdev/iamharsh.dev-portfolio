<template>
  <div class="wid80 center>
        <div class="wid80 centre mb-2">
          <h1>i can <br />design as well!</h1>
    </div>
    <div class="row wid100 space-bw">
      <div v-for="design in designProjects" :key="design" class="col-md-6">
        <div class="wid90 center">
        <a :href="design.link" target="_blank>
          <div class="design_card">
            <img :src="design.img">
            <h3>{{design.title}}</h3>
            <p style="color:#2c2c2e;"></p>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      designProjects:[
        {title:"",link:"",img:""},
        {title:"",link:"",img:""},
        {title:"",link:"",img:""},
        {title:"",link:"",img:""}
      ]
    }
  }
}
</script>
