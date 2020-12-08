<template>
  <div class="container d-flex">
    <slot></slot>

    <!-- <div class=" modal-dialog-lg modal-dialog-centered ">-->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Modal',
  data() {
    return {
      //  modalShow: true,
      activeIndex: -1,
    };
  },
  props: {
    popTitle: {
      type: String,
      default: 'popName',
    },
    leader: {},
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
      //this.modalShow = !this.modalShow;
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function(item) {
      if (item.target === vm.$refs['popup_p']) {
        vm.closeModal();
        //console.log(123);
      }
    });
  },
  computed: {
    ...mapState({
      leadersCategories: state => state.leadersInfo.categories,
      leaders: state => state.leadersInfo.leaders,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.modal__img {
  height: 497px;
  width: 371px;
}

.popup {
  z-index: 100;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.popup__content {
  width: 918px;
  height: 561px;
  border-radius: 16px;
  background-color: #ffffff;
  &__job {
    font-weight: normal;
    font-size: 27px;
    line-height: 150%;
    color: #272b2d;
  }
  &__contact {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #272b2d;
  }
}

.modal__title {
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 120%;
  /* or 53px */

  letter-spacing: 0.01em;

  /* #272B2D */

  color: #272b2d;
}
.btn {
  position: absolute;
  right: 35px;
  bottom: 15px;
  letter-spacing: 0.02em;
  //text-align: left;
}

@media (max-width: 992px) {
  .popup {
    height: 102vh;
    h2,
    p {
      text-align: center;
    }
  }
  .popup__content {
    width: 100%;
    height: 100%;
    overflow: scroll;
    border-radius: 0px;
  }
  .modal-body {
    height: 100%;
    padding-top: 0;
  }
  .btn {
    position: relative;
    margin: auto;
    display: block;
    right: 0;
    margin-top: 25px;
  }
  .modal__img {
    margin: auto;
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
