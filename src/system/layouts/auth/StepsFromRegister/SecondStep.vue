<template>
  <div class="SecondStep">
    <q-form class="" @submit.prevent.stop="onSubmit">
      <div class="row justify-center text-white q-gutter-sm">
        <q-input
          ref="zipcodeRef"
          v-model="register.address_zip_code"
          label="CEP"
          class="col-10 col-md-3"
          mask="#####-###"
          :loading="loading"
          :disable="loading"
          @blur="searchCep"
          input-class="text-white"
          label-color="white"
          color="white"
          :rules="zipCodeRule"
        />
        <q-input
          ref="streetRef"
          v-model="register.address_street"
          label="Rua"
          class="col-10 col-md-3"
          :loading="loading"
          :disable="loading"
          input-class="text-white"
          label-color="white"
          color="white"
        />
        <q-input
          ref="districtRef"
          v-model="register.address_district"
          label="Bairro"
          class="col-10 col-md-3"
          :loading="loading"
          :disable="loading"
          input-class="text-white"
          label-color="white"
          color="white"
        />
      </div>
      <div class="row text-white justify-center q-gutter-sm">
        <q-input
          ref="numberstreetRef"
          v-model="register.address_numbers"
          label="Numero"
          class="col-3"
          :loading="loading"
          :disable="loading"
          input-class="text-white"
          label-color="white"
          color="white"
          :rules="[(val) => !!val || 'Campo numero é obrigatorio']"
        />
        <q-input
          ref="cityRef"
          v-model="register.address_city"
          label="Cidade"
          class="col-7 col-md-3"
          :loading="loading"
          :disable="loading"
          input-class="text-white"
          label-color="white"
          color="white"
        />
        <q-input
          ref="statestreetRef"
          v-model="register.address_state"
          label="Estado"
          class="col-10 col-md-3"
          :loading="loading"
          :disable="loading"
          input-class="text-white"
          label-color="white"
          color="white"
        />
      </div>
      <div class="row justify-end text-white text-bolder">
        <div class="col-md-4 col q-mt-lg">
          <q-btn
            color="secondary"
            padding="0.5rem 3rem"
            text-color="white"
            label="continuar"
            type="submit"
            :disabled="loading"
            :loading="loading"
          >
            <template v-slot:loading>
              <q-spinner-pie size="3em" />
            </template>
          </q-btn>
        </div>
        <!-- <div class="col-12 copy">
          <register-data />
        </div> -->
      </div>
    </q-form>
  </div>
  <q-inner-loading
    :showing="loading"
    label="Por favor, aguarde..."
    label-class="text-teal"
    label-style="font-size: 1.1em"
  />
</template>
<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import useRegister from "src/composables/system/Requests/useRegister";
import useRefForm from "src/composables/system/Requests/useRefForm";
import useRoles from "src/composables/system/useRoles";
import useNotify from "src/composables/useNotify";
export default defineComponent({
  name: "SecondStep",
  emits: ["step-current"],
  setup(props, ctx) {
    const { viaCEP, loading } = useRegister();
    const userStore = useUserStore();
    const { register } = storeToRefs(userStore);
    const { infoNotify } = useNotify();
    const {
      zipcodeRef,
      streetRef,
      districtRef,
      statestreetRef,
      cityRef,
      numberstreetRef,
      validateRegisterAddress,
      validateDataAddresMsg,
    } = useRefForm();
    const { zipCodeRule, stringSerialize } = useRoles();
    const searchCep = async () => {
      zipcodeRef.value.validate();
      let cepSerialize = "";
      if (register.value.address_zip_code) {
        cepSerialize = stringSerialize(register.value.address_zip_code);
      }
      if (!zipcodeRef.value.hasError) {
        const res = await viaCEP(cepSerialize);
        register.value.address_street = res.logradouro;
        register.value.address_state = res.uf;
        register.value.address_city = res.localidade;
        register.value.address_district = res.bairro;
        console.log(res);
      }
      // await viaCEP(register.value.address_zip_code)
    };
    const onSubmit = async () => {
      validateRegisterAddress();
      if (validateDataAddresMsg()) {
        infoNotify("Ops.. está esquecendo de preenche algum campo");
        return;
      }
      ctx.emit("step-current", 3);
    };
    return {
      register,
      searchCep,
      loading,
      zipcodeRef,
      streetRef,
      districtRef,
      statestreetRef,
      cityRef,
      numberstreetRef,
      zipCodeRule,
      onSubmit,
    };
  },
});
</script>
<style></style>
