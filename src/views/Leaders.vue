<template>
  <div class="leaders_page" id="app">
    <modal :leader="leader" v-if="modalShow" @closeModal="closeModal">
      <div
        class="popup d-flex align-items-center justify-content-center"
        ref="popup_p"
      >
        <div class="popup__content pt-3">
          <div class="modal-body d-flex flex-wrap">
            <div class=" col-lg-6 col-12">
              <img
                class="modal__img"
                ref="modal__img"
                :src="leader.img"
                alt=""
              />
            </div>
            <div class=" col-lg-6 col-12 p-lg-0">
              <h2 class="modal__title">{{ leader.name }}</h2>
              <p class="modal__job">{{ leader.job }}</p>
              <p class="modal__contact"><b> Телефон: </b> {{ leader.phone }}</p>
              <p class="modal__contact"><b> E-mail: </b> {{ leader.mail }}</p>
              <button class="btn btn-secondary" @click="closeModal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <div class="container-fluid p-0">
      <div class="title d-flex align-items-center justify-content-start">
        <div class="green"></div>
        <div class="container p-mob-0">
          <div class="white">
            <h2>Лидеры мнений</h2>
          </div>
        </div>
      </div>
      <div class="container pl-lg-0 content d-flex flex-lg-row flex-wrap">
        <div class="col-lg-3 col-12 pl-lg-0">
          <div class="select">
            <div class="w-100">
              <button
                v-for="(category, index) in tLeadersCategories"
                :key="category.type"
                v-bind:class="{ active: index == 0 }"
                class="w-100 mb-3"
              >
                {{ category.label }}
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-12">
          <div class="row">
            <div
              v-for="(category, index) in tLeaders"
              :key="category.id"
              class="d-none  w-100 cat justify-content-between flex-wrap"
              v-bind:class="{ 'd-flex': index == 0 }"
            >
              <div
                class="leaderItem"
                v-for="leader in tLeaders"
                :key="leader.name"
              >
                <!-- ПОПРАВИТЬ ЛОГИКУ
                   v-if="category.label == !leader.category"
                -->
                <div class="human" @click="openModal(leader)">
                  <img class="photo" v-bind:src="leader.img" alt="" />
                  <div class="green-filter "></div>
                  <div class="info d-flex flex-column ">
                    <span>{{ leader.name }}</span>
                    <a v-bind:href="leader.link"> {{ leader.link }} </a>
                    <div class="audit d-flex align-items-center">
                      <img src="../assets/user.svg" alt="" />
                      <span>{{ leader.audience }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import $ from 'jquery';
import { mapState } from 'vuex';
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
export default {
  name: 'Leaders',
  data() {
    return {
      leader: {},
      modalShow: false,
      activeIndex: -1,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
        initialSlide: 1,
      },
    };
  },
  components: {
    Modal,
  },
  methods: {
    openModal(leader) {
      this.modalShow = !this.modalShow;
      this.leader = leader;
    },
    closeModal() {
      this.modalShow = false;
    },
  },
  computed: {
    ...mapState({
      tLeadersCategories: state => state.leadersInfo.tCategory,
      leaders: state => state.leadersInfo.leaders,
      tLeaders: state => state.leadersInfo.tLeaders,
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  mounted() {
    let vm = this;
    document.addEventListener('click', function(item) {
      if (item.target === vm.$refs['leaders_page']) {
        vm.closeModal();
        //console.log(123);
      }
    });

    let len = this.tLeadersCategories.length;
    $('.select button').each(function(index) {
      $(this).click(function() {
        $(this).addClass('active');
        $(this)
          .siblings()
          .removeClass('active');
        console.log(
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
        );
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .children('.col-lg-9')
          .children('.row')
          .children('.cat')
          .eq(index)
          .removeClass('d-none')
          .addClass('d-flex');
        for (let j = 1; j < len; j++) {
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .children('.col-lg-9')
            .children('.row')
            .children('.cat')
            .eq(index + j)
            .removeClass('d-flex')
            .addClass('d-none');
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .children('.col-lg-9')
            .children('.row')
            .children('.cat')
            .eq(index - j)
            .removeClass('d-flex')
            .addClass('d-none');
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables';
$distance: 250px;

.leaderItem {
  max-width: 33.3%;
}

.green {
  width: $distance;
  height: 8px;
  content: '';
  z-index: 1;
  background-color: $base-green;
}

.white {
  background: #ffffff;
  box-shadow: 20px 24px 32px rgba(108, 137, 164, 0.15);
  width: 733px;
  margin-left: calc(-#{$distance}/ 2);
  padding: 26px 0;
  height: 140px;
  position: relative;
  h2 {
    font-weight: bold;
    font-size: 80px;
    line-height: 88px;
    letter-spacing: 2px;
    color: #1c1642;
    position: absolute;
    right: -145px;
  }
}

.leaders_page {
  background-color: $base-bg-news;
  .content {
    margin-top: 40px;
  }
  .select {
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    button {
      padding: 16px 12px;
      background: none;
      color: #1c1642;
      font-size: 20px;
      line-height: 24px;
      font-weight: bold;
    }

    .active {
      background: #2f80ed;
      color: #fff;
      border-radius: 8px;
    }
  }
}

.human {
  position: relative;
  cursor: pointer;
  margin-bottom: 60px;
  .photo {
    width: 95%;
  }
  .green-filter {
    display: block;
    position: absolute;
    top: 0;
    width: 95%;
    left: 0;
    // width: calc(100% - );
    content: '';
    height: 100%;
    background: linear-gradient(180deg, rgba(73, 147, 80, 0) 0%, #499350 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .info {
    position: absolute;
    bottom: 10px;
    left: 30px;
    opacity: 0;
    transition: opacity 0.3s ease;
    span {
      font-weight: bold;
      font-size: 24px;
      color: #fff;
    }
    a {
      display: block;
      background: #fff;
      color: #2f80ed;
      font-weight: 500;
      font-size: 16px;
      padding: 4px 8px;
    }
    .audit {
      margin-top: 8px;
      span {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #fff;
        margin-left: 12px;
      }
    }
  }
  &:hover {
    .info,
    .green-filter {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
}

@media (max-width: 992px) {
  .green {
    display: none;
  }

  .p-mob-0 {
    padding: 0 !important;
  }

  .white {
    width: 100%;
    background-color: $base-bg-news;
    margin-left: 0;
    box-shadow: none;
    position: relative;
    height: auto;
    h2 {
      font-size: 50px;
      line-height: 56px;
      letter-spacing: 2px;
      position: relative;
      right: initial;
      width: auto;
    }
  }

  .leaders_page {
    .select {
      margin-bottom: 35px;
    }
    .content {
      margin-top: 0;
    }
  }
}

@media (max-width: 576px) {
  .leaderItem {
    max-width: 49%;
  }
  .white {
    h2 {
      text-align: center;
    }
  }
  .human {
    margin-bottom: 5px;
    .photo {
      width: 100%;
    }
    .green-filter {
      width: 100%;
    }
    .info {
      left: 5px;
    }
  }
}
</style>
