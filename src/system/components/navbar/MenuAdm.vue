<template>
  <q-menu v-model="menuAdm">
    <q-list style="min-width: 100px">
      <q-item
        clickable
        v-close-popup
        v-for="(item, index) in admNavList"
        :key="index"
        :to="item.toName"
      >
        <q-item-section>{{ item.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useStoreLayout } from "src/stores/layoutStore";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const admNavList = [
      {
        can: "all-access",
        toName: { name: "users" },
        name: "Usuários administradores",
        svgIcon: "img:icons/icon-home-icon.svg",
        svgWidth: "51",
        svgHeight: "49",
        svgViewBox: "0 0 448 512",
        svgId: "&#240;&#159;&#166;&#134; icon &#34;home icon&#34;",
        pathId: "Vector",
        pathData:
          "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z",
        pathFileRule: "",
        pathClipRule: "",
      },
      {
        can: "all-access",
        toName: { name: "clients" },
        name: "Controle de clients",
        svgIcon: "img:icons/icon-home-icon.svg",
        svgWidth: "51",
        svgHeight: "49",
        svgViewBox: "0 0 640 512",
        svgId: "&#240;&#159;&#166;&#134; icon &#34;home icon&#34;",
        pathId: "Vector",
        pathData:
          "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z",
        pathFileRule: "",
        pathClipRule: "",
      },
      {
        // can: "control-reports", eessa é a real tem que troca no banco de dados
        can: "reports-access",
        toName: { name: "controlReports" },
        name: "Relatórios",
        svgIcon: "img:icons/icon-home-icon.svg",
        svgWidth: "51",
        svgHeight: "49",
        svgViewBox: "0 0 576 512",
        svgId: "&#240;&#159;&#166;&#134; icon &#34;home icon&#34;",
        pathId: "Vector",
        pathData:
          "M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z",
        pathFileRule: "",
        pathClipRule: "",
      },
    ];
    const storeLayout = useStoreLayout();
    const { menuAdm } = storeToRefs(storeLayout);
    return {
      menuAdm,
      admNavList,
    };
  },
});
</script>
<style lang=""></style>
