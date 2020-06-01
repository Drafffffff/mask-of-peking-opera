<template>
  <div>
    <vue-p5 v-on="{ setup, draw }"></vue-p5>
  </div>
</template>
<script>
import VueP5 from "vue-p5";
import * as ml5 from "ml5";
export default {
  data: () => {
    return {
      faceapi: {},
      video: {},
      detections: {},
      detection_options: {
        withLandmarks: true,
        withDescriptors: false,
      },
      imgData: {
        hat: "drawno",
        eye: "drawno",
        mouse: "drawno",
      },
      image: {},
    };
  },
  methods: {
    setup(sketch) {
      this.image = sketch.loadImage(require("../assets/home/sheng.svg"));
      this.sketch = sketch;
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      sketch.background(200);
      this.video = sketch.createCapture(sketch.VIDEO);
      this.video.size(sketch.width, sketch.height);
      this.faceapi = ml5.faceApi(
        this.video,
        this.detection_options,
        this.modelReady
      );
    },
    draw(sketch) {},
    modelReady() {
      console.log("ready!");
      console.log(this.faceapi);
      this.faceapi.detect(this.gotResults);
    },
    gotResults(err, result) {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(result)
      this.detections = result;

      // background(220);
      this.sketch.background(255);
      this.sketch.image(
        this.video,
        0,
        0,
        this.sketch.width,
        this.sketch.height
      );
      if (this.detections) {
        if (this.detections.length > 0) {
          // console.log(this.detections);
          this.drawBox(this.detections);
        }
      }
      this.faceapi.detect(this.gotResults);
    },
    drawBox(detections) {
      for (let i = 0; i < detections.length; i++) {
        const alignedRect = detections[i].alignedRect;
        const x = alignedRect._box._x;
        const y = alignedRect._box._y;
        const boxWidth = alignedRect._box._width;
        const boxHeight = alignedRect._box._height;
        // const gh = this.sketch.createGraphics(400, 400);
        // this[this.imgData.mouse](gh);
        // this[this.imgData.hat](gh);
        const fw = boxWidth * 1.5;
        const fh = boxHeight * 1.5;
        const dx = x - (fw - boxWidth) / 2;
        const dy = y - (fh - boxHeight);
        this.sketch.image(this.image, dx, dy, fw, fh);
        // this.sketch.noFill();
        // this.sketch.stroke(161, 95, 251);
        // this.sketch.strokeWeight(2);
        // this.sketch.rect(x, y, boxWidth, boxHeight);
      }
    },
  },
  components: {
    VueP5,
  },
};
</script>
<style lang="scss"></style>
