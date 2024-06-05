<template>
  <div class="ActiontLayout row justify-end">
    <div class="col-2 q-ma-md">
      <q-btn label="Export relatório" color="primary" @click="fixed = true" />
    </div>
    <q-dialog v-model="fixed" v-bind="{ ...$dialogCard }">
      <q-card>
        <q-card-section>
          <header-card titleCard="Criando relatório" />
        </q-card-section>

        <!-- <q-separator /> -->
        <form @submit.prevent.stop="onSubmit" class="q-gutter-md">
          <q-card-section style="max-height: 50vh" class="scroll">
            <div class="row justify-between">
              <q-input
                ref="titleRef"
                standout="bg-teal text-white"
                v-model="newReport.title"
                label="Título*"
                class="col-8 q-py-lg"
                :rules="[(val) => !!val || 'Campo obrigatório']"
              />
              <q-select
                class="col-3 q-py-lg"
                standout
                v-model="newReport.type"
                :options="options"
                label="Categoria"
              />
              <q-input
                v-model="newReport.description"
                autogrow
                label="Descrição"
                class="col-12 q-py-lg"
                standout="bg-teal text-white"
              />
              <q-input
                ref="displaytRef"
                filled
                v-model="newReport.display_date_at"
                mask="date"
                class="col-10 q-mb-lg"
                :loading="loading"
                :disable="loading"
                label="Data de disponibilidade"
                hint="Só a parte desta data será disponibilizado para os clientes."
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="newReport.display_date_at">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-file
                filled
                ref="documentRef"
                bottom-slots
                v-model="newReport.document"
                label="Documento(.pdf)"
                counter
                class="col-5"
                :rules="[(val) => !!val || 'Campo obrigatório']"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                  <q-icon
                    name="close"
                    @click.stop.prevent="newReport.document = null"
                    class="cursor-pointer"
                  />
                </template>

                <template v-slot:hint> .pdf </template>
              </q-file>
              <q-file
                filled
                bottom-slots
                v-model="newReport.audio"
                label="audio(.mp3|wma)"
                counter
                class="col-5"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                  <q-icon
                    name="close"
                    @click.stop.prevent="newReport.audio = null"
                    class="cursor-pointer"
                  />
                </template>

                <template v-slot:hint> .mp3 | .wma </template>
              </q-file>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <!-- <q-btn flat label="fechar" color="red-14" v-close-popup /> -->
            <q-btn flat label="Enviar" color="primary" type="submit" />
          </q-card-actions>
        </form>
        <q-inner-loading
          :showing="loading"
          :label="step"
          label-class="text-teal"
          label-style="font-size: 1.1em"
        />
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import useReport from "src/composables/system/Requests/useReport";
import useNotify from "src/composables/useNotify";
import { defineComponent, onMounted, ref } from "vue";
import HeaderCard from "src/system/components/cardDialog/HeaderCard.vue";
export default defineComponent({
  name: "ActiontLayout",
  components: {
    HeaderCard,
  },
  setup() {
    // const loading = ref(false);
    const { infoNotify } = useNotify();
    const { setReport, loading, step } = useReport();
    const titleRef = ref(null);
    const documentRef = ref(null);
    const newReport = ref({
      title: "",
      description: "",
      type: null,
      document: null,
      audio: null,
      display_date_at: null,
    });
    const options = ["crypto", "classic"];
    const onSubmit = async () => {
      titleRef.value.validate();
      documentRef.value.validate();

      if (titleRef.value.hasError || documentRef.value.hasError) {
        infoNotify("Verifique os campos, esta esquecendo de algo!!");
        // loading.value = false;
        return;
      }
      await setReport(newReport.value);
      // loading.value = false;
    };
    return {
      options,
      loading,
      step,
      fixed: ref(false),
      newReport,
      titleRef,
      documentRef,
      onSubmit,
    };
  },
});
</script>
