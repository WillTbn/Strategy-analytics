<template>
  <q-form @submit.prevent.stop="onSubmitData" class="PersonalSetting">
    <q-inner-loading
      :showing="loading"
      label="Please wait..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />

    <div class="q-mb-lg row">
      <div class="col-4">
        <span class="text-primary text-weight-bold">Nome completo:</span><br />

        <q-input
          v-model="data.name"
          :disabled="loading"
          :loading="loading"
          v-bind="{ ...$inputBankStyle }"
        />
      </div>
    </div>
    <div class="q-mb-lg row">
      <div class="col-4">
        <span class="text-primary text-weight-bold">E-mail:</span><br />
        <q-input
          type="text"
          standout
          dense
          name="name"
          v-model="data.email"
          id="email"
          disable
          dark
        />
      </div>
    </div>
    <div class="q-mb-lg row" v-if="data.account">
      <div class="col-4">
        <span class="text-primary text-weight-bold">Celular :</span><br />
        <q-input
          v-model="data.account.phone"
          mask="(##) # ####-####"
          :disabled="loading"
          :loading="loading"
          v-bind="{ ...$inputBankStyle }"
        />
      </div>
    </div>
    <p class="text-muted" v-if="sameInput">{{ sameInput }}</p>
    <q-btn
      label="Atualizar dados"
      type="submit"
      color="primary"
      rounded
      :disabled="loading"
      :loading="loading"
      no-caps
    />
  </q-form>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import useCase from "src/composables/system/useCase";
import useAccount from "src/composables/system/Requests/useAccount";
export default defineComponent({
  name: "PersonalSetting",
  setup() {
    const sameInput = ref();
    const store = useUserStore();
    const { data, isDirty, isDirtyData } = storeToRefs(store);
    const { updateData, loading } = useAccount();
    const { same } = useCase();
    const onSubmitData = async () => {
      if (
        same(isDirty.value.name, data.value.name) &&
        same(isDirtyData.value.phone, data.value.account.phone)
      ) {
        sameInput.value = "Não houver alteração, verifique!!";
        return;
      }
      sameInput.value = null;
      await updateData(data.value);
    };
    return { data, sameInput, onSubmitData, loading };
  },
});
</script>
<style lang=""></style>
