<template>
  <div class="make flex w-full h-full">
    <div class="left flex-1 flex flex-col">
      <div class="title">
        <p>京具</p>
        <p>
          Mask of <br />
          Beijing Opera
        </p>
      </div>
      <div class="flex-1">
        <div class="canvas flex">
          <div class="main-canvas">
            <div class="canvas">
              <vue-p5 v-on="{ setup }"></vue-p5>
            </div>
          </div>
        </div>
        <div class="button">
          <button
            class="completeButton py-3 px-10 text-white font-bold text-xl rounded-md  hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            @click="handleComplete"
          >
            人脸识别
          </button>
        </div>
      </div>
    </div>

    <div class="right flex-1">
      <div class="panel py-48 px-16">
        <P class="text-4xl font-bold mb-6">面具</P>
        <p class=" font-bold text-2xl ">已选配置</p>
        <div class="parts flex mt-20">
          <div class="part">
            <img :src="imgList[$route.query.hat]" alt="" />
            <p class="mt-10">头饰</p>
            <p>Headwear</p>
          </div>
          <div class="part">
            <img :src="imgList[$route.query.eye]" alt="" />
            <p class="mt-10">眉眼</p>
            <p>Eyebrow</p>
          </div>
          <div class="part">
            <img :src="imgList[$route.query.mouse]" alt="" />
            <p class="mt-10">嘴鼻</p>
            <p>Mouth and Nose</p>
          </div>
        </div>
        <div class="button">
          <button
            class="completeButton py-3 px-10 text-white font-bold text-xl rounded-md  hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            @click="$router.push('/')"
          >
            完成
          </button>
        </div>
      </div>

      <button
        class="backbutton shadow-md hover:shadow-xl transition-all duration-200"
        @click="$router.push('/')"
      >
        <div class="bg"></div>
      </button>
    </div>
  </div>
</template>

<script>
import "../assets/swiper.min.css";
import Swiper from "swiper";
import VueP5 from "vue-p5";
export default {
  data() {
    return {
      imgList: {
        draws1h1: require("../assets/make/hat/s1h1.svg"),
        draws1h2: require("../assets/make/hat/s1h2.svg"),
        draws1h3: require("../assets/make/hat/s1h3.svg"),
        draws1h4: require("../assets/make/hat/s1h4.svg"),
        draws1h5: require("../assets/make/hat/s1h5.svg"),
        draws1h6: require("../assets/make/hat/s1h6.svg"),
        draws1h7: require("../assets/make/hat/s1h7.svg"),
        draws1h8: require("../assets/make/hat/s1h8.svg"),
        draws1h9: require("../assets/make/hat/s1h9.svg"),
        draws2h1: require("../assets/make/hat/s2h1.svg"),
        draws2h2: require("../assets/make/hat/s2h2.svg"),
        draws2h3: require("../assets/make/hat/s2h3.svg"),
        draws2h4: require("../assets/make/hat/s2h4.svg"),
        draws2h5: require("../assets/make/hat/s2h5.svg"),
        draws2h6: require("../assets/make/hat/s2h6.svg"),
        draws2h7: require("../assets/make/hat/s2h7.svg"),
        draws2h8: require("../assets/make/hat/s2h8.svg"),
        draws2h9: require("../assets/make/hat/s2h9.svg"),
        draws3h1: require("../assets/make/hat/s3h1.svg"),
        draws3h2: require("../assets/make/hat/s3h2.svg"),
        draws3h3: require("../assets/make/hat/s3h3.svg"),
        draws3h4: require("../assets/make/hat/s3h4.svg"),
        draws3h5: require("../assets/make/hat/s3h5.svg"),
        draws3h6: require("../assets/make/hat/s3h6.svg"),
        draws3h7: require("../assets/make/hat/s3h7.svg"),
        draws3h8: require("../assets/make/hat/s3h8.svg"),
        draws3h9: require("../assets/make/hat/s3h9.svg"),
        draws4h1: require("../assets/make/hat/s4h1.svg"),
        draws4h2: require("../assets/make/hat/s4h2.svg"),
        draws4h3: require("../assets/make/hat/s4h3.svg"),
        draws4h4: require("../assets/make/hat/s4h4.svg"),
        draws4h5: require("../assets/make/hat/s4h5.svg"),
        draws4h6: require("../assets/make/hat/s4h6.svg"),
        draws4h7: require("../assets/make/hat/s4h7.svg"),
        draws4h8: require("../assets/make/hat/s4h8.svg"),
        draws4h9: require("../assets/make/hat/s4h9.svg"),
        drawm1: require("../assets/make/mouse/1.svg"),
        drawm2: require("../assets/make/mouse/2.svg"),
        drawm3: require("../assets/make/mouse/3.svg"),
        drawm4: require("../assets/make/mouse/4.svg"),
        drawm5: require("../assets/make/mouse/5.svg"),
        drawm6: require("../assets/make/mouse/6.svg"),
        drawm7: require("../assets/make/mouse/7.svg"),
        drawe1: require("../assets/make/eye/1.svg"),
        drawe2: require("../assets/make/eye/2.svg"),
        drawe3: require("../assets/make/eye/3.svg"),
        drawe4: require("../assets/make/eye/4.svg"),
        drawe5: require("../assets/make/eye/5.svg"),
        drawe6: require("../assets/make/eye/6.svg"),
        drawe7: require("../assets/make/eye/7.svg"),
        drawe8: require("../assets/make/eye/8.svg"),
      },
      imgData: {
        hat: "drawno",
        eye: "drawno",
        mouse: "drawno",
      },
    };
  },
  methods: {
    handleComplete() {
      this.$router.push({
        path: "/facedetection",
        query: {
          hat: this.imgData.hat,
          eye: this.imgData.eye,
          mouse: this.imgData.mouse,
        },
      });
    },
    setup(sketch) {
      sketch.createCanvas(400, 400);
      sketch.imageMode(sketch.CENTER);
      sketch.loadImage(require("../assets/make/face.svg"), img => {
        sketch.image(img, 200, 200, img.width * 1.5, img.height * 1.5);
      });
      this[this.$route.query.eye](sketch);
      this.imgData.eye = this.$route.query.eye;
      this[this.$route.query.mouse](sketch);
      this.imgData.mouse = this.$route.query.mouse;
      this[this.$route.query.hat](sketch);
      this.imgData.hat = this.$route.query.hat;
    },
    drawno(sketch) {},
    draws1h1(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h1.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws1h2(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h2.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws1h3(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h3.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 85, img.width * 1.3, img.height * 1.3);
      });
    },
    draws1h4(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h4.svg"), img => {
        sketch.image(img, 200, 200 - 70, img.width * 1.8, img.height * 1.8);
      });
    },
    draws1h5(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h5.svg"), img => {
        sketch.image(img, 200, 200 - 60, img.width * 1.8, img.height * 1.8);
      });
    },
    draws1h6(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h6.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.1, img.height * 1.1);
      });
    },
    draws1h7(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h7.svg"), img => {
        sketch.image(img, 200, 200 - 90, img.width * 1.5, img.height * 1.5);
      });
    },
    draws1h8(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h8.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    draws1h9(sketch) {
      sketch.loadImage(require("../assets/make/hat/s1h9.svg"), img => {
        sketch.image(img, 200, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    draws2h1(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h1.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws2h2(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h2.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws2h3(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h3.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 85, img.width * 1.3, img.height * 1.3);
      });
    },
    draws2h4(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h4.svg"), img => {
        sketch.image(img, 200, 200 - 70, img.width * 1.8, img.height * 1.8);
      });
    },
    draws2h5(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h5.svg"), img => {
        sketch.image(img, 200, 200 - 60, img.width * 1.8, img.height * 1.8);
      });
    },
    draws2h6(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h6.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.1, img.height * 1.1);
      });
    },
    draws2h7(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h7.svg"), img => {
        sketch.image(img, 200, 200 - 90, img.width * 1.5, img.height * 1.5);
      });
    },
    draws2h8(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h8.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    draws2h9(sketch) {
      sketch.loadImage(require("../assets/make/hat/s2h9.svg"), img => {
        sketch.image(img, 200, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    draws3h1(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h1.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws3h2(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h2.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws3h3(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h3.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 85, img.width * 1.3, img.height * 1.3);
      });
    },
    draws3h4(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h4.svg"), img => {
        sketch.image(img, 200, 200 - 70, img.width * 1.8, img.height * 1.8);
      });
    },
    draws3h5(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h5.svg"), img => {
        sketch.image(img, 200, 200 - 60, img.width * 1.8, img.height * 1.8);
      });
    },
    draws3h6(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h6.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.1, img.height * 1.1);
      });
    },
    draws3h7(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h7.svg"), img => {
        sketch.image(img, 200, 200 - 90, img.width * 1.5, img.height * 1.5);
      });
    },
    draws3h8(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h8.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    draws3h9(sketch) {
      sketch.loadImage(require("../assets/make/hat/s3h9.svg"), img => {
        sketch.image(img, 200, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    draws4h1(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h1.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws4h2(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h2.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.3, img.height * 1.3);
      });
    },
    draws4h3(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h3.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 85, img.width * 1.3, img.height * 1.3);
      });
    },
    draws4h4(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h4.svg"), img => {
        sketch.image(img, 200, 200 - 70, img.width * 1.8, img.height * 1.8);
      });
    },
    draws4h5(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h5.svg"), img => {
        sketch.image(img, 200, 200 - 60, img.width * 1.8, img.height * 1.8);
      });
    },
    draws4h6(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h6.svg"), img => {
        sketch.image(img, 200, 200 - 80, img.width * 1.1, img.height * 1.1);
      });
    },
    draws4h7(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h7.svg"), img => {
        sketch.image(img, 200, 200 - 90, img.width * 1.5, img.height * 1.5);
      });
    },
    draws4h8(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h8.svg"), img => {
        sketch.image(img, 200 - 3, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    draws4h9(sketch) {
      sketch.loadImage(require("../assets/make/hat/s4h9.svg"), img => {
        sketch.image(img, 200, 200 - 97, img.width * 1.1, img.height * 1.1);
      });
    },
    drawe1(sketch) {
      sketch.loadImage(require("../assets/make/eye/1.svg"), img => {
        sketch.image(img, 200, 200, img.width * 0.5, img.height * 0.5);
      });
    },
    drawe2(sketch) {
      sketch.loadImage(require("../assets/make/eye/2.svg"), img => {
        sketch.image(img, 200, 200, img.width * 0.55, img.height * 0.55);
      });
    },
    drawe3(sketch) {
      sketch.loadImage(require("../assets/make/eye/3.svg"), img => {
        sketch.image(img, 200, 200 + 10, img.width * 0.5, img.height * 0.5);
      });
    },
    drawe4(sketch) {
      sketch.loadImage(require("../assets/make/eye/4.svg"), img => {
        sketch.image(img, 200, 200 - 25, img.width * 0.7, img.height * 0.7);
      });
    },
    drawe5(sketch) {
      sketch.loadImage(require("../assets/make/eye/5.svg"), img => {
        sketch.image(img, 200, 200 - 35, img.width * 0.8, img.height * 0.8);
      });
    },
    drawe6(sketch) {
      sketch.loadImage(require("../assets/make/eye/6.svg"), img => {
        sketch.image(img, 200, 200 - 20, img.width * 1, img.height * 1);
      });
    },
    drawe7(sketch) {
      sketch.loadImage(require("../assets/make/eye/7.svg"), img => {
        sketch.image(img, 200, 200, img.width * 0.6, img.height * 0.6);
      });
    },
    drawe8(sketch) {
      sketch.loadImage(require("../assets/make/eye/8.svg"), img => {
        sketch.image(img, 200, 200 - 35, img.width * 0.8, img.height * 0.8);
      });
    },
    drawm1(sketch) {
      sketch.loadImage(require("../assets/make/mouse/1.svg"), img => {
        sketch.image(img, 200, 200 + 60, img.width * 0.3, img.height * 0.3);
      });
    },
    drawm2(sketch) {
      sketch.loadImage(require("../assets/make/mouse/2.svg"), img => {
        sketch.image(img, 200, 200 + 80, img.width * 0.65, img.height * 0.65);
      });
    },
    drawm3(sketch) {
      sketch.loadImage(require("../assets/make/mouse/3.svg"), img => {
        sketch.image(img, 200, 200 + 70, img.width * 0.6, img.height * 0.6);
      });
    },
    drawm4(sketch) {
      sketch.loadImage(require("../assets/make/mouse/4.svg"), img => {
        sketch.image(img, 200, 200 + 70, img.width * 0.5, img.height * 0.5);
      });
    },
    drawm5(sketch) {
      sketch.loadImage(require("../assets/make/mouse/5.svg"), img => {
        sketch.image(img, 200, 200 + 70, img.width * 0.5, img.height * 0.5);
      });
    },
    drawm6(sketch) {
      sketch.loadImage(require("../assets/make/mouse/6.svg"), img => {
        sketch.image(img, 200, 200 + 70, img.width * 0.4, img.height * 0.4);
      });
    },
    drawm7(sketch) {
      sketch.loadImage(require("../assets/make/mouse/7.svg"), img => {
        sketch.image(img, 200, 200 + 70, img.width * 0.35, img.height * 0.35);
      });
    },
  },
  components: {
    VueP5,
  },
};
</script>
s

<style lang="scss" scoped>
.left {
  background-color: #3e476e;

  .title {
    color: #ffffff;
    height: 20%;
    padding: 3rem 4rem;
    & p:first-child {
      font-size: 2.5rem;
      font-weight: bold;
    }
    & p:last-child {
      padding-top: 2rem;
      line-height: 2rem;
    }
  }
  .canvas {
    // width: 100%;
    margin: auto;

    // height: 80%;
    .bar {
      height: 22rem;
      width: 6rem;
      margin-left: 4rem;
      margin-top: 4rem;
      flex-direction: column;
      & > div {
        margin: 0.4rem 0;
        cursor: pointer;
        user-select: none;
        p {
          font-size: 1.5rem;
          color: white;
          text-align: center;
          padding: 1.2rem 0;
        }
        border: 1.5px solid rgba(209, 209, 209, 0.692);
        border-radius: 7%;
        &:hover {
          background-color: rgba(209, 209, 209, 0.692);
          &::before {
            content: "";
            display: block;
            position: fixed;
            background-color: #ff8e88;
            height: 2.6rem;
            width: 5px;
            transform: translateY(1rem);
          }
        }
        &.active {
          background-color: rgba(209, 209, 209, 0.692);
          &::before {
            content: "";
            display: block;
            position: fixed;
            background-color: #ff8e88;
            height: 2.6rem;
            width: 5px;
            transform: translateY(1rem);
          }
        }
      }
      & div:first-child {
        margin-top: 0;
      }
      & div:last-child {
        margin-bottom: 0;
      }
    }

    .main-canvas {
      margin: 40px;
      height: 100%;
      width: 100%;
      .canvas {
        width: 400px;
        height: 400px;
      }
    }
  }
  .button {
    display: flex;
    justify-content: center;
    .completeButton {
      background-color: #ff5c55;
      // margin:0 200px;
    }
  }
}

.right {
  background-color: #ffffff;
  .panel {
    .parts {
      .part {
        margin: 0 10px;
        border-radius: 10px;
        flex: 1;
        // @apply shadow-md;
        p {
          text-align: center;
        }
        img {
          height: 100px;
        }
      }
    }
  }
  .button {
    margin-top: 80px;
    display: flex;
    justify-content: flex-end;
    .completeButton {
      background-color: #ff5c55;
      // margin:0 200px;
    }
  }
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
}
</style>
