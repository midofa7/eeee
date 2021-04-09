
<template>
  <div class="app">
        <div class="item_repository">
                            <div class="tetel">
                                <h3>item_repository</h3>
                            </div>
                            <div class="select_branches">
                                <select>
                                    <option>x^mkim;plksss</option>
                                    <option>xssls</option>
                                    <option>xsss</option>
                                </select>
                            </div>
                            <div class="lesspush">
                                <div class="user_push">
                                    <h3 class="telel">item_repository</h3>
                                    <div class="lalist_de_push">
                                      <itmePush/>
                                    </div>
                                </div>
                              
                            </div>

                        </div>
  </div>
</template>

<script>

import itmePush from "./itmePush";

export default {
  name: "Home",
  components: {
    itmePush
   
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>