<template>
  <q-card class="ExtractLayout relative-position" flat bordered dense>
    <q-card-section class="q-pb-none">
      <header-card :titleCard="'Extrato de ' + user.name" />
    </q-card-section>
    <q-card-section>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-list
          class="row no-wrap items-center q-mt-md q-pa-sm bg-grey-9 text-white rounded-borders"
          v-show="extractClient"
          separator
        >
          <q-item v-for="item in extractClient" :key="item">
            <q-item-section avatar>
              <!-- <q-icon color="positive" name="fa-solid fa-circle-plus" /> -->
              {{ dateFormatDMY(item.transaction_date) }}
            </q-item-section>
            <q-space />
            <q-item-section>
              <q-item-label capton lines="2">
                {{ getByCode(item.transaction_data.data.investment) }} -
                {{ getByCode(item.transaction_data.data.transaction_id) }}
              </q-item-label>
            </q-item-section>
            <q-space />
            <q-item-section side bottom>
              <q-item-label class="text-positive text-center">
                R$ {{ item.transaction_value }} <br />
                <q-badge color="teal" :label="item.transaction_name" />
                <!-- {{ item.transaction_name }} -->
              </q-item-label>
              <!-- <q-item-label>
                <q-badge color="teal" :label="item.transaction_name" />
              </q-item-label> -->
            </q-item-section>

            <q-separator spaced inset="item" />
          </q-item>
        </q-list>
      </transition>
    </q-card-section>
    <q-inner-loading
      :showing="loading"
      label="Please wait..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </q-card>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import HeaderCard from "src/system/components/cardDialog/HeaderCard.vue";
import useClient from "src/composables/system/Requests/useClient";
import useExtractHelpers from "src/composables/system/Helpers/useExtractHelpers";

export default defineComponent({
  name: "ExtractLayout",
  components: { HeaderCard },
  props: {
    user: { type: Object },
  },
  setup(props) {
    const { loading, extractClient, getExtract } = useClient();
    const { getByCode, dateFormatDMY, dateFormatHMS } = useExtractHelpers();
    onMounted(async () => {
      await getExtract(props.user.id);
    });
    return { extractClient, loading, getByCode, dateFormatDMY, dateFormatHMS };
  },
});
</script>
<style lang="sass" scoped>
.card-example
  width: 288px
  height: 315px
</style>
