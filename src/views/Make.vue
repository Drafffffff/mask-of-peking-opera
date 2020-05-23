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
            <div class="sheng flex-1">
              <p>生</p>
            </div>
            <div class="dan flex-1">
              <p>旦</p>
            </div>
            <div class="jing flex-1">
              <p>净</p>
            </div>
            <div class="chou flex-1">
              <p>丑</p>
            </div>
          </div>
          <div class="main-canvas"></div>
        </div>
        <div class="w-full">
          <button
            class="completeButton py-3 px-10 text-white font-bold text-xl rounded-md items-end hover:shadow-lg transition-all duration-300 ease-in-out scale-105"
          >
            完成制作
          </button>
        </div>
      </div>
    </div>

    <div class="right flex-1">
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
export default {};
</script>

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
      }
      & div:first-child {
        margin-top: 0;
      }
      & div:last-child {
        margin-bottom: 0;
      }
    }
    .main-canvas {
      height: 100%;
      width: 100%;
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
