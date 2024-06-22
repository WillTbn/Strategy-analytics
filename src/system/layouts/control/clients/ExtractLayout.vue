<template>
  <q-card class="ExtractLayout" flat bordered dense>
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
          class="row items-center q-mt-md q-pa-sm bg-grey-9 text-white rounded-borders"
          v-show="extractClient"
          separator
        >
          <q-item v-for="item in extractClient" :key="item" v-ripple>
            <q-item-section top class="col-3 text-center gt-sm">
              <!-- <q-icon color="positive" name="fa-solid fa-circle-plus" /> -->
              {{ dateFormatDMY(item.transaction_date) }}<br />
              <span>
                {{ dateFormatHMS(item.transaction_date) }}
              </span>
            </q-item-section>

            <q-item-section class="col-6">
              <q-item-label capton lines="2">
                {{ item.transaction_data.data.trans_description }}
              </q-item-label>
            </q-item-section>

            <q-item-section class="col-3 self-end text-end">
              <q-item-label class="text-positive" style="text-align-last: end">
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
    <q-separator />
    <q-card-section class="row justify-between">
      <div class="col">TOTAL CARTEIRA DE INVESTIMENTO</div>
      <div class="col-2">R$ {{ user.current_investment }}</div>
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
