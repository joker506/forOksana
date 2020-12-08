<template>
  <div class="hero">
    <div class="container-fluid h-100 p-0">
      <svg class='line' width="2539" height="964" viewBox="0 0 2539 964" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2538 2C2536.35 4.39694 2534.92 7.39377 2533.67 10.9446C2500.64 105.288 2600.97 590.835 2304.09 625.025C1996.04 660.504 1804.19 408.023 1449.73 408.023C1112.14 408.023 1018.3 586.466 710.507 531.067C350.489 453.827 229.694 697.43 1 628.594" stroke="#68D083" stroke-width="1.51729" stroke-dasharray="7.59 7.59"/>
      <path d="M2508 840C2506.37 836.932 2504.95 833.095 2503.73 828.55C2471.08 707.778 2570.22 86.2176 2276.86 42.4501C1972.45 -2.96753 1782.87 320.239 1432.6 320.239C1099 320.239 1006.27 91.8099 702.117 162.728C346.356 261.605 226.99 -50.237 1 37.8811" stroke="#68D083" stroke-width="1.51729" stroke-dasharray="7.59 7.59"/>
      <path d="M2304.09 830.786C1996.04 884.239 1804.19 574.662 1449.73 574.662C1112.14 574.662 1018.3 772.693 710.507 689.229C350.489 572.857 229.694 1051.15 1 947.441" stroke="#68D083" stroke-width="1.51729" stroke-dasharray="7.59 7.59"/>
      <path d="M2412.01 1.58301C2342.66 162.817 2026.88 599.993 1548.35 372.465C1383.65 295.873 1205.05 170.899 1018.3 181.17C714.045 200.612 383.402 406.591 345.184 491.018" stroke="#6A6968" stroke-width="5"/>
      <path d="M145 335C223.511 513.221 581.027 996.457 1122.81 744.957C1309.27 660.296 1511.48 522.155 1722.91 533.508C2067.39 554.998 2441.73 782.678 2485 876" stroke="#2F80ED" stroke-width="5"/>
      <path d="M2508.36 337.953C2393.23 360.551 2162.97 405.747 1994.33 482.533C1751.75 601.861 1650.79 745.942 1386.95 766.544C1146.66 785.289 921.54 615.902 682.899 583.729C532.746 563.766 355.714 699.888 267.197 767.949" stroke="#9B51E0" stroke-width="5"/>
      <path d="M2428.36 29.5449C2313.23 52.1429 2082.97 97.3389 1914.33 174.125C1671.75 293.453 1510.79 579.159 1246.95 599.761C1006.66 618.506 841.54 307.494 602.899 275.321C452.746 255.357 275.714 391.48 187.197 459.541" stroke="#68D083" stroke-width="5"/>
      <ellipse cx="1615" cy="400.292" rx="18" ry="18.209" fill="#68D083"/>
      <ellipse cx="643" cy="281.933" rx="18" ry="18.209" fill="#68D083"/>
      <ellipse cx="1864" cy="553.209" rx="18" ry="18.209" fill="#2F80ED"/>
      </svg>



      <div class="container-xl d-flex h-100 align-items-center">

        <h1 class='animate__animated animate__fadeInUp animate__delay-1s'>Медиа Будущего</h1>
      </div>
    </div>
  </div>
</template>

<script>

import 'animate.css/animate.min.css';
import anime from 'animejs/lib/anime.es.js';



export default {
  name: 'Hero',
  directives: {
    anime
  },
  mounted() {
    anime({
      targets: '.line path',
      strokeDashoffset: [anime.setDashoffset,0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: 1000
    }),
    anime({
      targets: '.line ellipse',
      fill: [0, anime.fill],
      easing: 'easeInOutSine',
      duration: 2500,
      delay: 1000
    }),
    anime({
      targets: '.line path',
      translateY: [3,-3],
      duration: 1000,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true
    })
  }
}
</script>

<style lang="scss" scoped>
  .hero{
    height: 80vh;
    position: relative;
    overflow: hidden;
    h1{
      font-style: normal;
      font-weight: 900;
      font-size: 150px;
      line-height: 156px;
      width: 916px;
    }

    .line{
      position: absolute;
      width: 130%;
      left: -18%;
      top: 0%;
      @media screen and (max-width: 1600px){
        top: 0;
      }
    }
  }

  @media (max-width: 768px){
    .hero{
      height: 75vh;
      h1{
        font-size: 55px;
        width: 326px;
        line-height: 110%;
      }
      .line{
      width: 390%;
      left: -85%;
      top: -48%;
      }
    }
  }
</style>