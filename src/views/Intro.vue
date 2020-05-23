<template>
  <div class="intro bg-gray-100">
    <div
      class="intro-item bg-red-200 sheng"
      @mouseover="shengShow"
      @mouseleave="shengLeave"
      ref="sheng"
    >
      <div class="intro-card sheng"></div>
    </div>
    <div
      class="intro-item bg-green-200 dan"
      @mouseover="danShow"
      @mouseleave="shengLeave"
      ref="dan"
    >
      <div class="intro-card "></div>
    </div>
    <div
      class="intro-item bg-blue-200 jing"
      @mouseover="jingShow"
      @mouseleave="shengLeave"
      ref="jing"
    >
      <div class="intro-card "></div>
    </div>
    <div
      class="intro-item bg-teal-200 chou"
      @mouseover="chouShow"
      @mouseleave="shengLeave"
      ref="chou"
    >
      <div class="intro-card "></div>
    </div>
    <button class="backbutton shadow-md hover:shadow-xl transition-all duration-200" @click="$router.push('/')">
      <div class="bg"></div>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    shengShow() {
      this.$refs.dan.style.transform = "translateX(25vw)";
      this.$refs.jing.style.transform = "translateX(25vw)";
      this.$refs.chou.style.transform = "translateX(25vw)";
    },
    shengLeave() {
      this.$refs.dan.style.transform = "translateX(0)";
      this.$refs.jing.style.transform = "translateX(0)";
      this.$refs.chou.style.transform = "translateX(0)";
    },
    danShow() {
      // this.$refs.sheng.style.transform = "translateX(25vw)";
      this.$refs.jing.style.transform = "translateX(25vw)";
      this.$refs.chou.style.transform = "translateX(25vw)";
    },
    danLeave() {
      // this.$refs.sheng.style.transform = "translateX(0)";
      this.$refs.jing.style.transform = "translateX(0)";
      this.$refs.chou.style.transform = "translateX(0)";
    },
    jingShow() {
      // this.$refs.sheng.style.transform = "translateX(-25vw)";
      this.$refs.dan.style.transform = "translateX(-25vw)";
    },
    jingLeave() {
      // this.$refs.sheng.style.transform = "translateX(25vw)";
      this.$refs.jing.style.transform = "translateX(0vw)";
      this.$refs.dan.style.transform = "translateX(0)";
    },
    chouShow() {
      // this.$refs.sheng.style.transform = "translateX(-25vw)";
      this.$refs.dan.style.transform = "translateX(-25vw)";
      this.$refs.jing.style.transform = "translateX(-25vw)";
    },
    chouLeave() {
      // this.$refs.sheng.style.transform = "translateX(25vw)";
      this.$refs.dan.style.transform = "translateX(0)";
      this.$refs.jing.style.transform = "translateX(0)";
    },
  },
};
</script>
<style lang="scss">
.backbutton {
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
  .bg {
    background-image: url("../assets/back.svg");
    background-size: cover;
    margin: 1.5rem;
    width: 2rem;
    height: 2rem;
  }
}
.intro {
  height: 100%;
  .intro-item {
    height: 100%;
    width: 25vw;
    display: inline-block;
    transition: all 0.5s ease-out;
  }
  .intro-card {
    height: 100%;
  }
}
</style>
