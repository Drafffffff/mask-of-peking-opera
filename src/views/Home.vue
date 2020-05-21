<template>
  <div class="home   flex flex-col">
    <!-- <div class="navbar w-full bg-gray-400 h-20 flex flex-row-reverse">
      <div class="nav-item">介绍</div>
      <div class="nav-item">制作</div>
      <div class="nav-item">主页</div>
      <div class="nav-item"></div>
    </div> -->
    <nav class="flex items-center  p-3 flex-wrap">
      <div
        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded  items-center justify-center "
          >
            <span>主页</span>
          </a>
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded  items-center justify-center "
          >
            <span>介绍</span>
          </a>
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded  items-center justify-center"
          >
            <span>制作</span>
          </a>
        </div>
      </div>
    </nav>

    <div class="content flex-1 flex flex-col">
      <div class="title mx-16 my-4 flex justify-between sm:flex-wrap">
        <div class="items-center">
          <p class=" text-5xl font-bold">京具</p>
          <p class="mt-4 ml-8">Mask of Peking Opera</p>
        </div>
        <div class=" items-end flex">
          <button
            class="makeButton py-3 px-10 float-right  text-white font-bold text-xl rounded-md items-end hover:shadow-lg transition-all duration-300 ease-in-out scale-105"
          >
            个人制作
          </button>
        </div>
      </div>
      <div class="main flex-1">
        <div class="flex h-full pt-10 px-16">
          <div class="role-item sheng flex-1 flex flex-col justify-center ">
            <div class="flex-1 role-name"><p>生</p></div>
            <div>
              <img src="../assets/home/sheng.svg" class=" object-center" />
            </div>
            <div class="flex-2">
              <button
                class="roleButton py-3 px-10 text-white font-bold text-xl rounded-md items-end hover:shadow-lg transition-all duration-300 ease-in-out scale-105"
              >
                进入制作
              </button>
            </div>
          </div>
          <div class="role-item sheng flex-1 flex flex-col justify-center">
            <div class="flex-1 role-name"><p>旦</p></div>
            <div>
              <img src="../assets/home/dan.svg" class="  object-center" />
            </div>
            <div class="flex-2">
              <button
                class="roleButton py-3 px-10 text-white font-bold text-xl rounded-md items-end hover:shadow-lg transition-all duration-300 ease-in-out scale-105"
              >
                进入制作
              </button>
            </div>
          </div>
          <div class="role-item sheng flex-1 flex flex-col justify-center">
            <div class="flex-1 role-name"><p>净</p></div>
            <div>
              <img src="../assets/home/jing.svg" class="  object-center" />
            </div>
            <div class="flex-2">
              <button
                class="roleButton py-3 px-10 text-white font-bold text-xl rounded-md items-end hover:shadow-lg transition-all duration-300 ease-in-out scale-105"
              >
                进入制作
              </button>
            </div>
          </div>
          <div class="role-item sheng flex-1 flex flex-col justify-center">
            <div class="flex-1 role-name"><p>丑</p></div>
            <div>
              <img src="../assets/home/chou.svg" class="  object-center" />
            </div>
            <div class="flex-2">
              <button
                class="roleButton py-3 px-10 text-white font-bold text-xl rounded-md items-end hover:shadow-lg transition-all duration-300 ease-in-out scale-105"
              >
                进入制作
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss">
.home {
  height: 100%;
  overflow: hidden;
  .navbar {
    .nav-item {
      padding: 20px 40px;
      font-size: 1.2rem;
    }
  }

  // overflow: hidden;
  .content {
    .title {
      .makeButton {
        background-color: #ff5c55;
      }
    }
    .main {
      user-select: none;

      img {
        // margin: auto;
        width: 100%;
        height: 300px;
        padding: 3rem;
        transition: all 0.2s ease-in-out;
      }
      .role-item {
        .flex-2 {
          flex: 1.8;
          display: flex;
          justify-content: center;
          .roleButton {
            height: 3.5rem;
            background-color: #ff5c55;
            margin-top: 2rem;
            opacity: 0;
          }
        }
        .role-name > p {
          font-weight: bold;
          font-size: 1.5rem;
          margin: 1.5rem 2rem;
          margin-top: 2rem;
          text-align: center;
          position: relative;
          left: -5rem;
          transition: all 0.5s ease-out;
          opacity: 0;
          color: white;
        }
        transition: all 0.2s ease-in-out;
        border-radius: 1.5rem 1.5rem 0.2rem 0.2rem;
        &:hover {
          background-color: #3e476e;
          transform: scale(1.05);
          & > .role-name > p {
            opacity: 1;
          }
          & .roleButton {
            opacity: 1;
          }
          img{
            padding: 1rem;
          }
        }
      }
    }
  }
}
</style>
