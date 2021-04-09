
<template>
  <div class="">
 <div class="blcok_recherche">
                <div class="row">
                    <div class="col-8">
                        <div class="input">
                            <input type="text" placeholder="name"  @change="rechercheName(nameUser)" v-model="nameUser" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="input">
                          
                        </div>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>


export default {
  name: "Home",
   data: function() {
    return {
     nameUser:""
    };
  },
  components: {
   
  },

  props: [],
  created: function () {},
  methods: {
    
         rechercheName: function(name) {
             this.$emit("RechercheName",name)
         }
  },
};
</script>
<style scoped>
</style>