<template>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="transparent"
    push
    :options="[{ value: 'bg-simulator', slot: 'one' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
    dense
  >
    <q-icon
      class="absolute-center"
      name="fa-regular fa-circle-check"
      v-if="system.theme == 'bg-simulator'"
      size="2.5rem"
    />
    <template v-slot:one>
      <img
        src="/system/background/patterns.png"
        srcset="/system/background/patterns.png"
        :ratio="4 / 3"
        width="250px"
      />
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="transparent"
    push
    :options="[{ value: 'bg-theme-2', slot: 'two' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
    dense
  >
    <q-icon
      class="absolute-center"
      name="fa-regular fa-circle-check"
      v-if="system.theme == 'bg-theme-2'"
      size="2rem"
    />
    <template v-slot:two>
      <img
        src="/system/background/2.jpg"
        srcset="/system/background/2.jpg"
        :ratio="4 / 3"
        width="250px"
        height="121px"
      />
      <!-- </q-avatar> -->
    </template>
  </q-btn-toggle>

  <q-btn-toggle
    v-model="system.theme"
    toggle-color="transparent"
    push
    :options="[{ value: 'bg-theme-4', slot: 'four' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
    dense
  >
    <q-icon
      class="absolute-center"
      name="fa-regular fa-circle-check"
      v-if="system.theme == 'bg-theme-4'"
      size="2rem"
    />
    <template v-slot:four>
      <img
        src="/system/background/4.jpg"
        srcset="/system/background/4.jpg"
        :ratio="4 / 3"
        width="250px"
      />
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    dense
    v-model="system.theme"
    toggle-color="transparent"
    push
    :options="[{ value: 'bg-theme-7', slot: 'seven' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <q-icon
      class="absolute-center"
      name="fa-regular fa-circle-check"
      v-if="system.theme == 'bg-theme-7'"
      size="2rem"
    />
    <template v-slot:seven>
      <img
        src="/system/background/7.jpg"
        srcset="/system/background/7.jpg"
        :ratio="4 / 3"
        width="250px"
      />
    </template>
  </q-btn-toggle>
</template>
<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useStoreLayout } from "src/stores/layoutStore";
import useStorage from "src/composables/system/useStorage";
export default defineComponent({
  name: "ThemeOptions",
  setup() {
    const storeLayout = useStoreLayout();
    const { system } = storeToRefs(storeLayout);
    const { setSystemTheme } = useStorage();

    return { system, setSystemTheme };
  },
  props: {
    toggleClass: { type: String, default: "col-6" },
  },
});
</script>
<style lang="sass"></style>

<style lang=""></style>
