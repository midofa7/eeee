
<template>
  <div class="page">
    <div class="page_git">
      <div class="container">
         <div class=""><blcokrecherche v-on:RechercheName="Recherche($event)"/></div>
        <div class="block__repository">
            <div class="row">
                <div class="col-4">
                   <div class=""><lalistrepository/></div>
                </div>
                <div class="col-8">
                  <div class="">
                    <itemRepository/>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  
  </div>
</template>

<script>


import itemRepository from "../components/itemRepository";
import lalistrepository from "../components/lalistrepository";
import blcokrecherche from "../components/blcokrecherche";
export default {
  name: "Home",
   data: function() {
    return {
     dataApiGit:[],
     nameUser:""
    };
  },
  components: {
      blcokrecherche,itemRepository,lalistrepository
    
  },

  props: [],
  created: function () {
     this.$store.getters.getdataApigit("midofa7") ;
    
      setTimeout(() => {
       
       
         this.dataApiGit= this.$store.state.dataApigit;
           console.log("5aa",this.dataApiGit.data)
      }, 7000);
  },
  methods: {
    Recherche: function(name) {
      console.log(name)
        this.$store.getters.getdataApigit(name) ;
    
      setTimeout(() => {
       
       
         this.dataApiGit= this.$store.state.dataApigit;
           console.log("recher",this.dataApiGit.data)
      }, 7000);
    }
  },
};
</script>
<style scoped>
</style>