<template>
  <div>
    <li v-for="(ite,ind) in listIndo" :key="ind">
      id码=>{{ite.id}},姓名:=>{{ite.name}},方向=>{{ite.fangxiang}},图片=>
      <img :src="ite.img" />
    </li>
    {{user1}}======={{infomationConnect}}
    <BB />
    <CC />
  </div>
</template>

<script>
//引入组价
import BB from "./BB";
import CC from "./CC";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      listIndo: []
    };
  },
  components: {
    BB,
    CC
  },
  computed: {
    ...mapState(["user1"]),
    ...mapGetters(["infomationConnect"])
  },
  methods: {
    ...mapActions(["otherDataLog"])
  },
  created() {
    this.otherDataLog().then(res => {
      console.log(res.data);
      this.listIndo = res.data;
    });
  }
};
</script>

<style scoped>
</style>