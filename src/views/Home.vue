<template>
  <div>
    <button @click="change(5)">点击</button>
    hello home, {{ count }}, {{ doubleCount }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",
  methods: {
    //handleClick(){
    //this.$store.commit('change');
    // dispatch就是调用action中的方法
    //this.$store.dispatch('change', 5);
    //}

    // 调用action中的方法
    ...mapActions(["change"]),
  },
  computed: {
    /* count(){
        return this.$store.state.count
      },
      doubleCount(){
        return this.$store.getters.doubleCount;
      } */
    // 上面等同于下面的两句话
    ...mapState(["count"]),
    ...mapGetters(["doubleCount"]),
  },
};
</script>

<style scoped></style>
