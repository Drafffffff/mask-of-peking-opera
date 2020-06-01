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
          <div class="bar flex">
            <div
              class="sheng flex-1"
              :class="role == 1 ? 'active' : ''"
              @click="switchSheng()"
            >
              <p>生</p>
            </div>
            <div
              class="dan flex-1"
              :class="role == 2 ? 'active' : ''"
              @click="switchDan()"
            >
              <p>旦</p>
            </div>
            <div
              class="jing flex-1"
              :class="role == 3 ? 'active' : ''"
              @click="switchJing()"
            >
              <p>净</p>
            </div>
            <div
              class="chou flex-1"
              :class="role == 4 ? 'active' : ''"
              @click="switchChou()"
            >
              <p>丑</p>
            </div>
          </div>
          <div class="main-canvas">
            <div class="canvas">
              <vue-p5 v-on="{ setup, draw }"></vue-p5>
            </div>
          </div>
        </div>
        <div class="w-full">
          <button
            class="completeButton py-3 px-10 text-white font-bold text-xl rounded-md items-end hover:shadow-lg transition-all duration-300 ease-in-out scale-105"
            @click="handleComplete"
          >
            完成制作
          </button>
        </div>
      </div>
    </div>

    <div class="right flex-1">
      <div class="panel">
        <p class=" text-xl font-bold tracking-wider">配置面具</p>
        <div class="flex mt-6 ">
          <div
            class="hat options"
            :class="pageOption == 1 ? 'optionactive' : ''"
            @click="pageOption = 1"
          >
            <img src="../assets/make/hat.svg" alt="" />
          </div>
          <div
            class="eye options"
            :class="pageOption == 2 ? 'optionactive' : ''"
            @click="pageOption = 2"
          >
            <img src="../assets/make/eye.svg" alt="" />
          </div>
          <div
            class="mouse options"
            :class="pageOption == 3 ? 'optionactive' : ''"
            @click="pageOption = 3"
          >
            <img src="../assets/make/mouse.svg" />
          </div>
        </div>
        <div id="hat" v-if="pageOption == 1">
          <p class="option-title">头饰</p>
          <div class="swiper-container mt-6" v-if="colorOptions == 1">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h1';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h1.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h2';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h2.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h3';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h3.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h4';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h4.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h5';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h5.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h6';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h6.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h7';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h7.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h8';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h8.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws1h9';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s1h9.svg" alt="" />
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div class="swiper-container mt-6" v-if="colorOptions == 2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h1';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h1.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h2';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h2.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h3';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h3.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h4';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h4.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h5';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h5.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h6';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h6.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h7';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h7.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h8';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h8.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws2h9';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s2h9.svg" alt="" />
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div class="swiper-container mt-6" v-if="colorOptions == 3">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h1';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h1.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h2';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h2.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h3';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h3.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h4';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h4.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h5';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h5.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h6';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h6.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h7';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h7.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h8';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h8.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws3h9';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s3h9.svg" alt="" />
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div class="swiper-container mt-6" v-if="colorOptions == 4">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h1';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h1.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h2';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h2.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h3';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h3.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h4';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h4.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h5';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h5.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h6';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h6.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h7';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h7.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h8';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h8.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.hat = 'draws4h9';
                    changed = true;
                  "
                >
                  <img src="../assets/make/hat/s4h9.svg" alt="" />
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <p class="option-title">颜色</p>
          <div class="colorSelector flex">
            <div
              class="coloritem"
              :class="colorOptions == 1 ? 'active' : ''"
              style="background-color:#D2E8EC;"
              @click="colorOptions = 1"
            ></div>
            <div
              class="coloritem"
              :class="colorOptions == 2 ? 'active' : ''"
              style="background-color:#F3ADA1;"
              @click="colorOptions = 2"
            ></div>
            <div
              class="coloritem"
              :class="colorOptions == 3 ? 'active' : ''"
              style="background-color:#E7B747;"
              @click="colorOptions = 3"
            ></div>
            <div
              class="coloritem"
              :class="colorOptions == 4 ? 'active' : ''"
              style="background-color:#4EABAF;"
              @click="colorOptions = 4"
            ></div>
          </div>
        </div>
        <div id="eye" v-if="pageOption == 2">
          <p class="option-title">眉眼</p>
          <div class="swiper-container mt-6">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe1';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/1.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe2';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/2.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe3';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/3.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe4';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/4.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe5';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/5.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe6';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/6.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe7';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/7.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe8';
                    changed = true;
                  "
                >
                  <img src="../assets/make/eye/8.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.eye = 'drawe9';
                    changed = true;
                  "
                >
                  <!-- <img src="../assets/make/eye/1.svg" alt="" />s -->
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
        <div id="mouse" v-if="pageOption == 3">
          <p class="option-title">嘴鼻</p>
          <div class="swiper-container mt-6">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.mouse = 'drawm1';
                    changed = true;
                  "
                >
                  <img src="../assets/make/mouse/1.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.mouse = 'drawm2';
                    changed = true;
                  "
                >
                  <img src="../assets/make/mouse/2.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.mouse = 'drawm3';
                    changed = true;
                  "
                >
                  <img src="../assets/make/mouse/3.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.mouse = 'drawm4';
                    changed = true;
                  "
                >
                  <img src="../assets/make/mouse/4.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.mouse = 'drawm5';
                    changed = true;
                  "
                >
                  <img src="../assets/make/mouse/5.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.mouse = 'drawm6';
                    changed = true;
                  "
                >
                  <img src="../assets/make/mouse/6.svg" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class=""
                  @click="
                    imgData.mouse = 'drawm7';
                    changed = true;
                  "
                >
                  <img src="../assets/make/mouse/7.svg" alt="" />
                </div>
                <div
                  class=""
                  @click="
                    imgData.mouse = 'draw0';
                    changed = true;
                  "
                ></div>
                <div
                  class=""
                  @click="
                    imgData.mouse = 'draw0';
                    changed = true;
                  "
                ></div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
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
      pageOption: 1,
      colorOptions: 1,
      role: 0,
      imgData: {
        hat: "drawno",
        eye: "drawno",
        mouse: "drawno",
      },
      changed: false,
    };
  },
  methods: {
    handleComplete() {
      this.$router.push({
        path: "/confirm",
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
    },
    draw(sketch) {
      if (this.changed) {
        sketch.clear();
        sketch.loadImage(require("../assets/make/face.svg"), img => {
          sketch.image(img, 200, 200, img.width * 1.5, img.height * 1.5);
        });
        this[this.imgData.eye](sketch);
        this[this.imgData.mouse](sketch);
        this[this.imgData.hat](sketch);
        console.log(this.imgData);
        this.changed = !this.changed;
      }
    },
    switchSheng() {
      this.imgData = {
        hat: "draws1h1",
        eye: "drawe1",
        mouse: "drawm2",
      };
      this.changed = true;
      this.role = 1;
    },
    switchDan() {
      this.imgData = {
        hat: "draws1h5",
        eye: "drawe2",
        mouse: "drawm1",
      };
      this.changed = true;
      this.role = 2;
    },
    switchJing() {
      this.imgData = {
        hat: "draws1h8",
        eye: "drawe5",
        mouse: "drawm2",
      };
      this.changed = true;
      this.role = 3;
    },
    switchChou() {
      this.imgData = {
        hat: "draws1h9",
        eye: "drawe3",
        mouse: "drawm7",
      };
      this.changed = true;
      this.role = 4;
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
  updated() {
    var mySwiper = new Swiper(".swiper-container", {
      // autoplay: true, //可选选项，自动滑动
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // autoplay: true, //可选选项，自动滑动
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const role = this.$route.query.role;
    if (role == 1) {
      this.switchSheng();
    } else if (role == 2) {
      this.switchDan();
    } else if (role == 3) {
      this.switchJing();
    } else if (role == 4) {
      this.switchChou();
    }
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
    width: 100%;
    height: 80%;
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
      // height: 100%;
      width: 100%;
      .canvas {
        width: 400px;
        height: 400px;
      }
    }
  }
  .completeButton {
    background-color: #ff5c55;
    float: right;
    margin: 0 30%;
  }
}

.right {
  background-color: #ffffff;
  .panel {
    margin: 100px;
    .options {
      width: 80px;
      height: 80px;
      border: 1px solid rgb(235, 235, 235);
      border-radius: 5px;
      margin: 0 10px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &:first-child {
        margin-left: 0;
      }
      padding: 10px;
      img {
        height: 60px;
        width: 60px;
      }
    }
    .optionactive {
      border: 3px solid #3e476e;
    }
    p.option-title {
      margin-top: 40px;
      font-weight: bold;
      @apply mt-6;
    }
    .swiper-container {
      // margin-top: 40px;
      width: 520px;
      height: 180px;
    }
    .swiper-slide {
      padding: 0 50px;
      width: 520px;
      height: 180px;
      display: flex;
      div {
        flex: 1;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        img {
          height: 100px;
        }
        &:hover {
          background-color: #fbf7f6;
        }
      }
    }
    .colorSelector {
      margin-top: 30px;
      width: 350px;
      div {
        margin: 0 10px;
        background-color: #3e476e;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
      .active {
        border: 3px solid #3e476e;
      }
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
