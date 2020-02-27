<template>
  <div>
    <!-- <button @click="reduceNumber">减少</button> -->
    <hr />
    {{oldList}}
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
//中间代理user
let old_store = createNamespacedHelpers("user");
let { mapGetters } = old_store;
export default {
  computed: {
    ...mapGetters(["oldList"])
  },
  methods: {
    // ...mapMutations(["reduceNumber"])
  }
};
</script>

<style>
</style>