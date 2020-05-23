<template>
  <div class="intro ">
    <div
      class="intro-item sheng"
      @mouseover="shengShow"
      @mouseleave="shengLeave"
      ref="sheng"
    >
      <div class="intro-card sheng">
        <!-- <p class="title">生</p> -->
        <img src="../assets/home/sheng.svg" class=" object-center" />
      </div>
      <div class="content" id="sheng-content">
        <p>
          生，扮演除净、丑所扮角色以外的所有男性人物。包括专扮中年以上男性的“老生”、专扮年轻男性的“小生”、专扮擅长武艺的男性“武生”和扮演儿童的“娃娃生”。
        </p>
      </div>
      <p class="title">
        生
      </p>
    </div>
    <div
      class="intro-item dan"
      @mouseover="danShow"
      @mouseleave="shengLeave"
      ref="dan"
    >
      <div class="intro-card dan">
        <img src="../assets/home/dan.svg" class=" object-center" />
      </div>
      <div class="content" id="dan-content">
        <p>
          生，扮演除净、丑所扮角色以外的所有男性人物。包括专扮中年以上男性的“老生”、专扮年轻男性的“小生”、专扮擅长武艺的男性“武生”和扮演儿童的“娃娃生”。
        </p>
      </div>
      <p class="title">
        旦
      </p>
    </div>
    <div
      class="intro-item jing"
      @mouseover="jingShow"
      @mouseleave="shengLeave"
      ref="jing"
    >
      <div class="intro-card jing">
        <img src="../assets/home/jing.svg" class=" object-center" />
      </div>
      <div class="content" id="jing-content">
        <p>
          生，扮演除净、丑所扮角色以外的所有男性人物。包括专扮中年以上男性的“老生”、专扮年轻男性的“小生”、专扮擅长武艺的男性“武生”和扮演儿童的“娃娃生”。
        </p>
      </div>
      <p class="title">
        净
      </p>
    </div>
    <div
      class="intro-item chou"
      @mouseover="chouShow"
      @mouseleave="shengLeave"
      ref="chou"
    >
      <div class="intro-card chou">
        <img src="../assets/home/chou.svg" class=" object-center" />
      </div>
      <div class="content" id="chou-content">
        <p>
          生，扮演除净、丑所扮角色以外的所有男性人物。包括专扮中年以上男性的“老生”、专扮年轻男性的“小生”、专扮擅长武艺的男性“武生”和扮演儿童的“娃娃生”。
        </p>
      </div>
      <p class="title">
        丑
      </p>
    </div>
    <button
      class="backbutton shadow-md hover:shadow-xl transition-all duration-200"
      @click="$router.push('/')"
    >
      <div class="bg"></div>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    elementclean(){
            document.getElementById("sheng-content").style.opacity = "0";
      document.getElementById("dan-content").style.opacity = "0";
      document.getElementById("jing-content").style.opacity = "0";
      document.getElementById("chou-content").style.opacity = "0";
    },
    shengShow() {
      this.elementclean()
      this.$refs.dan.style.transform = "translateX(25vw)";
      this.$refs.jing.style.transform = "translateX(25vw)";
      this.$refs.chou.style.transform = "translateX(25vw)";
      document.getElementById("sheng-content").style.opacity = "1";
    },
    shengLeave() {
      this.$refs.dan.style.transform = "translateX(0)";
      this.$refs.jing.style.transform = "translateX(0)";
      this.$refs.chou.style.transform = "translateX(0)";
      document.getElementById("sheng-content").style.opacity = "0";
      // document.querySelector("sheng + div.content").style.opacity = "none";
    },
    danShow() {
      // this.$refs.sheng.style.transform = "translateX(25vw)";
      this.elementclean()
      this.$refs.jing.style.transform = "translateX(25vw)";
      this.$refs.chou.style.transform = "translateX(25vw)";
      document.getElementById("dan-content").style.opacity = "1";
    },
    danLeave() {
      // thi ；lk
      this.$refs.sheng.style.transform = "translateX(0)";
      this.$refs.jing.style.transform = "translateX(0)";
      this.$refs.chou.style.transform = "translateX(0)";
      document.getElementById("dan-content").style.opacity = "0";
      console.log("danleave");
    },
    jingShow() {
      this.elementclean()
      this.$refs.jing.style.transform = "translateX(-25vw)";
      this.$refs.dan.style.transform = "translateX(-25vw)";
      document.getElementById("jing-content").style.opacity = "1";
    },
    jingLeave() {
      this.$refs.jing.style.transform = "translateX(0vw)";
      this.$refs.dan.style.transform = "translateX(0)";
      document.getElementById("jing-content").style.opacity = "0";
    },
    chouShow() {
      this.elementclean()
      this.$refs.chou.style.transform = "translateX(-25vw)";
      this.$refs.dan.style.transform = "translateX(-25vw)";
      this.$refs.jing.style.transform = "translateX(-25vw)";
      document.getElementById("chou-content").style.opacity = "1";
    },
    chouLeave() {
      // this.$refs.sheng.style.transform = "translateX(25vw)";
      this.$refs.dan.style.transform = "translateX(0)";
      this.$refs.jing.style.transform = "translateX(0)";
      document.getElementById("chou-content").style.opacity = "0";
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
    .sheng {
      background-color: #ffc2af;
    }
    .dan {
      background-color: #a34136;
    }
    .jing {
      background-color: #d3af8b;
    }
    .chou {
      background-color: #3e476e;
    }
  }
  .intro-card {
    height: 100%;
    width: 50vw;
    // opacity: 0.5;
    display: flex;
    img {
      height: 50vh;
      margin: auto;
    }
  }
  p.title {
    position: relative;
    top: -90vh;
    left: 5rem;
    font-size: 2.5rem;
    color: white;
  }
  div.content {
    width: 50vw;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.37);
    position: absolute;
    display: flex;
    opacity: 0;
    transition: all 0.5s ease-out;
    top: 0;
    p {
      height: 40%;
      width: 60%;
      margin: auto;
      font-size: 2rem;
      color: white;
      line-height: 4rem;
    }
  }
}
</style>
