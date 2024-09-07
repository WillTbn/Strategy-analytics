<template>
  <!-- <div :class="toggleClass"> -->
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-simulator', slot: 'one' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:one>
      <q-avatar square size="100px" class="rounded-borders">
        <img
          src="/system/background/patterns.png"
          srcset="/system/background/patterns.png"
        />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-2', slot: 'two' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:two>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/2.jpg" srcset="/system/background/2.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-3', slot: 'three' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:three>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/3.jpg" srcset="/system/background/3.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-4', slot: 'four' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:four>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/4.jpg" srcset="/system/background/4.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-5', slot: 'five' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:five>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/5.jpg" srcset="/system/background/5.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-6', slot: 'six' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:six>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/6.jpg" srcset="/system/background/6.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-7', slot: 'seven' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:seven>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/7.jpg" srcset="/system/background/7.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-8', slot: 'eight' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:eight>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/8.jpg" srcset="/system/background/8.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <q-btn-toggle
    v-model="system.theme"
    toggle-color="grey-14"
    push
    :options="[{ value: 'bg-theme-9', slot: 'nine' }]"
    @click.prevent="setSystemTheme"
    :class="toggleClass"
  >
    <template v-slot:nine>
      <q-avatar square size="100px" class="rounded-borders">
        <img src="/system/background/9.jpg" srcset="/system/background/9.jpg" />
      </q-avatar>
    </template>
  </q-btn-toggle>
  <!-- <q-btn-toggle
      v-model="system.theme"
      toggle-color="grey-14"
      push
      :options="[
        // { value: 'bg-theme-2', slot: 'two' },
        { value: 'bg-simulator', slot: 'one' },
        { value: 'bg-theme-3', slot: 'three' },
        { value: 'bg-theme-4', slot: 'four' },
      ]"
      @click.prevent="setSystemTheme"
    >
      <template v-slot:four>
        <q-avatar square size="100px" class="rounded-borders">
          <img
            src="/system/background/4.jpg"
            srcset="/system/background/4.jpg"
          />
        </q-avatar>
      </template>
      <template v-slot:one>
        <q-avatar square size="100px" class="rounded-borders">
          <img
            src="/system/background/patterns.png"
            srcset="/system/background/patterns.png"
          />
        </q-avatar>
      </template>

      <template v-slot:three>
        <q-avatar square size="100px" class="rounded-borders">
          <img
            src="/system/background/3.jpg"
            srcset="/system/background/3.jpg"
          />
        </q-avatar>
      </template>
    </q-btn-toggle>
  </div>
  <div :class="toggleClass">
    <q-btn-toggle
      :class="toggleClass"
      v-model="system.theme"
      toggle-color="grey-14"
      push
      :options="[
        { value: 'bg-theme-5', slot: 'five' },
        { value: 'bg-theme-6', slot: 'six' },
        { value: 'bg-theme-7', slot: 'seven' },
      ]"
      @click.prevent="setSystemTheme"
    >
      <template v-slot:five>
        <q-avatar square size="100px" class="rounded-borders">
          <img
            src="/system/background/5.jpg"
            srcset="/system/background/5.jpg"
          />
        </q-avatar>
      </template>
      <template v-slot:six>
        <q-avatar square size="100px" class="rounded-borders">
          <img
            src="/system/background/6.jpg"
            srcset="/system/background/6.jpg"
          />
        </q-avatar>
      </template>
      <template v-slot:seven>
        <q-avatar square size="100px" class="rounded-borders">
          <img
            src="/system/background/7.jpg"
            srcset="/system/background/7.jpg"
          />
        </q-avatar>
      </template>
    </q-btn-toggle> -->
  <!-- </div> -->
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
