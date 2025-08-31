<template>
  <q-page class="communication-page">
    <title-page title="Comunicação" subtitle="Comunicação" />
    <div class="row q-gutter-sm q-pl-md">
      <q-tabs
        v-model="tab"
        class="col-8"
        active-color="white"
        indicator-color="white"
        inline-label
        align="left"
      >
        <q-tab
          v-for="(item, index) in tabList"
          :key="index"
          no-caps
          :name="item.label"
        >
          <!-- <component :is="item.icon" class="tabler-icon-s14 q-mr-sm" /> -->
          {{ item.label }}
        </q-tab>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated class="bg-transparent tool col-9">
        <q-tab-panel
          v-for="(item, index) in tabList"
          :key="index"
          :name="item.label"
        >
          <div class="" v-for="(news, index) in item.content" :key="index">
            <component
              :is="componentsMaps[news.componentPanel]"
              :title="news.title"
              :content="news.data"
              :image="news.img"
              :create_at="news.create_at"
              :typeNew="news.typeNew"
              :typeColor="news.typeColor"
              :author="news.author"
            />
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <div class="col-auto">teste</div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import TitlePage from "src/system/components/TitlePage.vue";
import CommunicationResumeLayout from "src/system/layouts/communication/CommunicationResumeLayout.vue";
defineComponent({
  name: "CommunicationPage",
});
const componentsMaps = {
  CommunicationResumeLayout,
};
const tab = ref("Todos");
const tabList = ref([
  {
    name: "Todos",
    content: [
      {
        typeNew: "Comunicados S.A",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail.png",
        componentPanel: "CommunicationResumeLayout",
      },
      {
        typeColor: "#FFCC9F",
        typeNew: "Insights Simplificado | 2 meses",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail-1.png",
        componentPanel: "CommunicationResumeLayout",
      },
      {
        typeColor: "#E7FFA4",
        typeNew: "Relatórios Econômicos",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail-2.png",
        componentPanel: "CommunicationResumeLayout",
      },
      {
        typeColor: "#C7F7FF",
        typeNew: "Insights Relevantes",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail.png",
        componentPanel: "CommunicationResumeLayout",
      },
      {
        typeColor: "#C7F7FF",
        typeNew: "Insights Relevantes",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail-1.png",
        componentPanel: "CommunicationResumeLayout",
      },
    ],
    label: "Todos",
  },
  {
    name: "Relatórios Econômicos",
    label: "Relatórios Econômicos",
    content: [
      {
        typeColor: "#C7F7FF",
        typeNew: "Insights Relevantes",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail.png",
        componentPanel: "CommunicationResumeLayout",
      },
      {
        typeColor: "#C7F7FF",
        typeNew: "Insights Relevantes",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail-1.png",
        componentPanel: "CommunicationResumeLayout",
      },
    ],
  },
  {
    name: "Comunicados S.A",
    label: "Comunicados S.A",
    content: [
      {
        type: "Comunicados S.A",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail.png",
        componentPanel: "CommunicationResumeLayout",
      },
      {
        type: "Comunicados S.A",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail-1.png",
        componentPanel: "CommunicationResumeLayout",
      },
    ],
  },
  {
    name: "Insights Relevantes",
    label: "Insights Relevantes",
    content: [
      {
        typeColor: "#FFCC9F",
        typeNew: "Insights Relevantes",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail.png",
        componentPanel: "CommunicationResumeLayout",
      },
      {
        typeColor: "#FFCC9F",
        typeNew: "Insights Relevantes",
        author: "Strategy Analytics",
        create_at: "27/02/2025 09:26",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga asperiores recusandae laborum consequuntur quas eligendi cum animi officia! Voluptatibus vitae et incidunt obcaecati magnam minus ullam reiciendis quasi itaque?",
        description: "Comunicação interna",
        img: "/img/thumbnail-1.png",
        componentPanel: "CommunicationResumeLayout",
      },
    ],
  },
]);

// const att = [[], [content.value]];

const content = ref({
  author: "Strategy Analytics",
  create_at: "27/02/2025 09:26",
  title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  description: "Comunicação interna",
});

// const tabList = [
//   {
//     name: "carteiras",
//     label: "Todas as Carteiras",
//     icon: "IconLayoutGrid",
//     qTabelPanel: "carteiras",
//     componentPanel: "WalletLayout",
//   },
//   {
//     name: "disponivel",
//     label: "Disponível para Movimentar",
//     icon: "IconWallet",
//     qTabelPanel: "disponivel",
//     componentPanel: "AvailableForMovementLayout",
//   },
//   {
//     name: "contratos",
//     label: "Contratos/Investimentos",
//     icon: "IconFileDollar",
//     qTabelPanel: "contratos",
//     componentPanel: "ContratctsInvesmentsLayout",
//   },
//   {
//     name: "strategy",
//     label: "Strategy Banking(em breve)",
//     icon: "IconBuildingBank",
//     disable: true,
//   },
// ];

// Seu código aqui
</script>

<style scoped>
/* Seus estilos aqui */
</style>
