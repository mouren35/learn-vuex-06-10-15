<template>
  <div>
    <button @click="change('hi')">点击</button>
    <!-- 简写,因为mapper -->
    hello about, {{ msg }}, {{ upperMsg }}
    <!-- message是命名空间,upperMsg是方法,这里指定message下的upperMsg方法,要是不指定命名空间就容易搞混 -->
    <!-- {{ $store.getters["message/upperMsg"] }} -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "AboutView",
  methods: {
    // handleClick(){
    //   this.$store.commit('message/change', 'hi');
    // }
    ...mapMutations("message", ["change"]),
  },
  computed: {
    ...mapState("message", ["msg"]),
    ...mapGetters("message", ["upperMsg"]),
  },
};
</script>

<style scoped></style>
