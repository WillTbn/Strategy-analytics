<template>
  <q-card class="communication-resume-layout q-my-sm bg-transparent" flat>
    <q-card-section horizontal>
      <q-img class="col-5" :src="image" width="20%" />

      <q-card-section class="body-new" style="max-width: 80%">
        <div class="row justify-between items-center">
          <div class="col-auto">
            <q-badge
              class="text-dark q-pa-xs"
              :style="{ backgroundColor: typeColor }"
              rounded
            >
              {{ typeNew }}
            </q-badge>
          </div>
          <div class="col-auto">
            <q-chip color="styleTool q-mx-sm" text-color="white">
              <q-avatar size="sm" flat color="white" class="text-dark">
                {{ author.charAt(0) }}
              </q-avatar>
              <span>{{ author }}</span>
              <!-- <div class="ellipsis"> -->
              <q-tooltip>{{ author }}</q-tooltip>
              <!-- </div> -->
            </q-chip>
            <span class="text-grey">{{ create_at }}</span>
          </div>
        </div>
        <span class="text-weight-bold">{{ title }}</span> <br />
        <p class="content text-grey">{{ content }}</p>
      </q-card-section>
    </q-card-section>
  </q-card>
  <q-separator></q-separator>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "CommunicationResumeLayout",
});
defineProps({
  // Defina suas props aqui, se necessário
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  create_at: {
    type: String,
  },
  typeNew: {
    type: String,
  },
  typeColor: {
    type: String,
  },
  author: {
    type: String,
  },
});
// Seu código aqui
</script>

<style scoped>
.body-new {
  /* line-height: 80%; */
}
.content {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Seus estilos aqui */
</style>
