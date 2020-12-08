<template>
  <div class="header d-flex container-xl align-items-center ">
    <div class="w-100 d-flex justify-content-between h-100 align-items-center">
      <div class="social d-flex justify-content-between">
        <a v-for="link in links" :key="link.title" v-bind:href="link.url">
          <img :src="link.icon" alt="" />
        </a>
      </div>

      <div class="burger h-100 d-flex align-items-center justify-content-center">
        <svg @click=activate width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="4" rx="2" fill="#1C1642"/>
          <rect y="16" width="48" height="4" rx="2" fill="#1C1642"/>
          <rect y="32" width="48" height="4" rx="2" fill="#1C1642"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          title: "facebook",
          icon: require("../assets/facebook.svg"),
          url: "#"
        },
        {
          title: "instagram",
          icon: require("../assets/Instagram.svg"),
          url: "#"
        },
          {
          title: "youtube",
          icon: require("../assets/youtube.svg"),
          url: "#"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      burger: state => state.BurgerMenu.burgerState
    })
  },
  methods:{
    activate: function(){
      this.burger.active = true
    }
  }
};
</script>

<style lang="scss">
.header {
  height: 10vh;
}
.social {
  width: 5%;
}
.social>a{
  margin-right: 30px;
}
.burger {
  width: 84.8px;
  cursor: pointer;
  // background-color: initial;
  // transition: background-color .3s ease;
  // svg{
  //   rect{
  //     transition: .3 ease;
  //   }
  // }
  // &:hover{
  //   background-color:  #1C1642;
  //   transition: background-color .3s ease;
  //   svg{
  //     rect{
  //       fill: #fff;
  //       transition: .3 ease;
  //     }
  //   }
    // svg{
    //   fill: #1C1642;
    // }
  // }
}

@media (max-width: 1200px){
  .social{
    width: 7%;
  }
}

@media (max-width: 768px){
  .header{
    height: 15vh;
  }
}

@media (max-width: 576px){
  .social{
    width: 20%;
  }
}

</style>