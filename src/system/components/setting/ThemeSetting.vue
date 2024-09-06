<template>
  <div class="ThemeSetting">
    <div class="row">
      <div class="col-12 q-mb-md">
        <textarea-title text="Tema" />
      </div>
    </div>
    <div class="row q-gutter-sm">
      <!-- <div class="col-2">
        <q-avatar square size="100px">
          <img
            src="/system/background/1.jpg"
            srcset="/system/background/1.jpg"
          />
        </q-avatar>
      </div>
      <div class="col-2">
        <q-avatar square size="100px">
          <img
            src="/system/background/2.jpg"
            srcset="/system/background/2.jpg"
          />
        </q-avatar>
      </div>
      <div class="col-2">
        <q-avatar square size="100px">
          <img
            src="/system/background/3.jpg"
            srcset="/system/background/3.jpg"
          />
        </q-avatar>
      </div>
      <div class="col-2">
        <q-avatar square size="100px">
          <img
            src="/system/background/4.jpg"
            srcset="/system/background/4.jpg"
          />
        </q-avatar>
      </div>
      <div class="col-2">
        <q-avatar square size="100px">
          <img
            src="/system/background/5.jpg"
            srcset="/system/background/5.jpg"
          />
        </q-avatar>
      </div>
      <div class="col-2">
        <q-avatar square size="100px">
          <img
            src="/system/background/6.jpg"
            srcset="/system/background/6.jpg"
          />
        </q-avatar>
      </div>
      <div class="col-2">
        <q-avatar square size="100px">
          <img
            src="/system/background/7.jpg"
            srcset="/system/background/7.jpg"
          />
        </q-avatar>
      </div> -->
      <q-btn-toggle
        v-model="system.theme"
        flat
        toggle-color="purple"
        :options="[
          { value: 'bg-theme-2', slot: 'two' },
          { value: 'bg-theme-3', slot: 'three' },
          { value: 'bg-theme-4', slot: 'four' },
          { value: 'bg-theme-5', slot: 'five' },
          { value: 'bg-theme-6', slot: 'six' },
          { value: 'bg-theme-7', slot: 'seven' },
        ]"
        @click.prevent="setSystemTheme"
      >
        <template v-slot:two>
          <q-avatar square size="100px">
            <img
              src="/system/background/2.jpg"
              srcset="/system/background/2.jpg"
            />
          </q-avatar>
        </template>

        <template v-slot:three>
          <q-avatar square size="100px">
            <img
              src="/system/background/3.jpg"
              srcset="/system/background/3.jpg"
            />
          </q-avatar>
        </template>
        <template v-slot:four>
          <q-avatar square size="100px">
            <img
              src="/system/background/4.jpg"
              srcset="/system/background/4.jpg"
            />
          </q-avatar>
        </template>
        <template v-slot:five>
          <q-avatar square size="100px">
            <img
              src="/system/background/5.jpg"
              srcset="/system/background/5.jpg"
            />
          </q-avatar>
        </template>
        <template v-slot:six>
          <q-avatar square size="100px">
            <img
              src="/system/background/6.jpg"
              srcset="/system/background/6.jpg"
            />
          </q-avatar>
        </template>
      </q-btn-toggle>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useStoreLayout } from "src/stores/layoutStore";
import useStorage from "src/composables/system/useStorage";
import TextareaTitle from "src/system/components/TextareaTitle.vue";
export default defineComponent({
  name: "ThemeSetting",
  components: { TextareaTitle },
  setup() {
    const storeLayout = useStoreLayout();
    const { system } = storeToRefs(storeLayout);
    const { setSystemTheme } = useStorage();

    return { system, setSystemTheme };
  },
});
</script>
<style lang="sass"></style>

<style lang=""></style>
