<template>
  <div :class="{'burgerMenu-active': burger.active==true}" class="burgerMenu w-100">
    <div class="container-xl h-100 d-flex justify-content-end">
      <div :class="{'burger-list-active': burger.active==true}" class="burger-list">
        <svg @click=diactivate class='closeBtn' width="48" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.991699" y="28.623" width="40.4792" height="3.37326" rx="1.68663" transform="rotate(-45 0.991699 28.623)" fill="#1C1642"/>
          <rect x="3.37695" width="40.4792" height="3.37326" rx="1.68663" transform="rotate(45 3.37695 0)" fill="#1C1642"/>
        </svg>
        <ul>
          <li v-for="item in burgerList" :key=item.name><router-link
          class='d-block w-100 h-100'
          :to=item.path
          >{{item.name}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: 'BurgerMenu',

data() {
  return {

  }
},
computed:{
  ...mapState({
    burger: state => state.BurgerMenu.burgerState,
    burgerList: state => state.BurgerMenu.burgerList
  })
},
methods:{
  diactivate: function(){
    this.burger.active = false
    }
  }
}
</script>

<style lang="scss" scope> 
@import '../scss/variables';
.burgerMenu-active{
  z-index: 25 !important;
}
.burgerMenu{
  position: absolute;
  top: 0;
  height: auto; //h
  z-index: -1;
}
.burger-list-active{
  z-index: 25 !important;
  opacity: 1 !important;
}
.burger-list{
  width: 208px;
  height: auto; // h
  background-color: #fff;
  box-shadow: 0px 16px 24px -8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  z-index: -1;
  margin-top: 5px;
  opacity: 0;
  position: relative;
  padding: 16px;
  .closeBtn{
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
  ul{
    padding-top: 50px;
    padding-left: 0;
    li{
      list-style-type: none;
      transition: .2s ease;
      a{
      padding: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #000000;
      transition: .2s ease;
      }
      &:hover{
        background-color: $base-green;
        transition: .2s ease;
        border-radius: 10px;
        a{
          text-decoration: none;
          color: #fff;
          transition: .2s ease;
        }
      }
    }
  }
}

</style>