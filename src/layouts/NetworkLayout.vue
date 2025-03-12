<template>
  <div class="row justify-center items-center q-pa-xl q-mb-xl">
    <div class="col-12 q-my-xl q-pa-xl">
      <p class="text-h5 text-weight-bolder">Nos acompanher nas redes sociais</p>
    </div>
    <div
      class="col-md-2 col-sm-6 text-center q-mb-xl q-mx-lg q-pb-lg"
      v-for="social in networks"
      :key="social"
    >
      <q-img :src="social.icon" class="icon-control" fit="fill" />
      <br />
      <!-- <q-avatar size="8rem" square> <img :src="social.icon" /> </q-avatar><br /> -->
      <span class="text-weight-bolder">{{ social.name }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NetworkLayout",
  setup() {
    const networks = [
      {
        name: "Twitter",
        icon: "icons/Twitter-X.png",
      },
      {
        name: "LinkedIn",
        icon: "icons/linkedin.png",
      },
      {
        name: "Youtube",
        icon: "icons/youtube.png",
      },
    ];

    return {
      networks,
    };
  },
});
</script>
<style scoped>
.icon-control {
  height: 70px;
  max-width: 80px;
}
@media (max-width: 768px) {
  .icon-control {
    width: 100px !important;
    font-size: 28px !important;
  }
}
</style>
