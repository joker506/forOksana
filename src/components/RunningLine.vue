<template>

  <div class="line-container">
    <div class='running-line d-flex align-items-center justify-content-lg-end'>
      <div 
      class="wrapper w-100 w-lg-100 justify-content-around d-flex align-items-center"
      >
        <p class='line_p'
        v-for='Info in Information' 
        :key='Info.general' 
        >
        {{Info.general}}
        
        <span>{{Info.amount}}</span> 
        </p>

      </div>
      <div 
      class="wrapper w-100 wrapper_2 w-lg-100 justify-content-around d-flex align-items-center"
      >
        <p class='line_p'
        v-for='Info in Information' 
        :key='Info.general' 
        >
        {{Info.general}}
        
        <span>{{Info.amount}}</span> 
        </p>


      </div>
      <div 
      class="wrapper w-100 wrapper_2 w-lg-100 justify-content-around d-flex align-items-center"
      >
        <p class='line_p'
        v-for='Info in Information' 
        :key='Info.general' 
        >
        {{Info.general}}
        
        <span>{{Info.amount}}</span> 
        </p>


      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "RunningLine",

  directives: {
    anime
  },

  data() {
    return {
      Information: [
        {
          general: "Общие показы",
          amount: "21.537"
        },
        {
          general: "Инфлюесеров посетило",
          amount: "21.537"
        },
        {
          general: "Аудитория соц сетей",
          amount: "21.537"
        }
      ]
    };
  },
  mounted() {
    anime({
      targets: ".wrapper",
      translateX: ["0", "-100%"],
      duration: 10800,
      easing: "linear",
      loop: true
    })
  }
};
</script>

<style lang='scss'>

.line-container{
  overflow: hidden;
  width: 100%;
}

.running-line {
  width: 200%;
  height: 10vh;
  box-shadow: 0px -1px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  p {
    margin-right: 16px;
    margin-bottom: 0;
    span {
      color: #219653;
      font-weight: bold;
    }
    &:nth-child(2n) {
      span {
        color: #2f80ed;
      }
    }
    &:nth-child(3n) {
      span {
        color: #9b51e0;
      }
    }
  }
}

@media (max-width: 768px){
  .running-line{
    p{
      &:first-child{
        width: 170px;
      }
      &:nth-child(2){
        width: 250px;
      }
      &:last-child{
        width: 230px;
      }
    }
  }
}

@media (max-width: 576px){
  .running-line{
    width: 200%;
    p{
      &:first-child{
        width: 170px;
      }
      &:nth-child(2){
        width: 250px;
      }
      &:last-child{
        width: 230px;
      }
    }
  }
}
</style>