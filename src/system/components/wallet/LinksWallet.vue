<template>
  <q-item clickable tag="a" :href="link" :disable="linkDisabled">
    <q-icon :name="icon" class="q-pa-sm" size="2rem" />
    <br />
    <span class="text-h5">{{ title }}</span>
    <!-- <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section> -->
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LinksWallet",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    linkDisabled: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
