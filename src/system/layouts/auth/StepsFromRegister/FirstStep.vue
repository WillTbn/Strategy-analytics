<template>
  <div class="FirstStep">
    <q-form @submit.prevent.stop="onSubmit">
      <div class="row justify-center text-white">
        <!-- <div class="col-md-4 col-sm-10 self-center"> -->
        <q-input
          dense
          v-model="register.FirstName"
          input-class="text-white"
          label-color="white"
          color="white"
          item-aligned
          label="Nome *"
          :rules="nameRule"
          ref="nameRef"
          :loading="loading"
          :disable="loading"
          class="col-md-3 col-sm-10"
        />
        <q-input
          dense
          v-model="register.lastName"
          input-class="text-white"
          label-color="white"
          color="white"
          item-aligned
          label="Sobrenome *"
          :rules="nameRule"
          ref="lastnameRef"
          :loading="loading"
          :disable="loading"
          class="col-md-3 col-sm-10"
        />
        <q-input
          dense
          v-model="register.email"
          input-class="text-white"
          label-color="white"
          color="white"
          item-aligned
          label="Email *"
          type="email"
          ref="emailRef"
          :loading="loading"
          :disable="loading"
          class="col-md-3 col-sm-10"
          :rules="emailRule"
        />
        <!-- </div> -->
      </div>
      <div class="row justify-center q-gutter-sm q-my-lg">
        <q-input
          dense
          v-model="register.person"
          input-class="text-white"
          label-color="white"
          color="white"
          item-aligned
          mask="###.###.###-##"
          label="CPF *"
          :rules="personRule"
          ref="personRef"
          :loading="loading"
          :disable="loading"
          class="col-md-3 col-sm-10"
        />
        <q-input
          dense
          ref="birthdayRef"
          v-model="register.birthday"
          class="col-md-3 col-sm-10"
          :loading="loading"
          :disable="loading"
          type="date"
          label="Data de nascimento *"
          input-class="text-white"
          label-color="white"
          color="white"
          item-aligned
          :rules="requiredRole"
        />

        <q-select
          item-aligned
          dense
          ref="genreRef"
          v-model="register.genre"
          transition-show="flip-up"
          transition-hide="flip-down"
          label-color="white"
          :options="optionGenre"
          option-value="value"
          option-label="label"
          emit-value
          map-options
          label="Qual genero se identificar? *"
          lazy-rules
          class="col-md-3 col-sm-10"
          :loading="loading"
          :disable="loading"
          :rules="requiredRole"
        />
      </div>
      <div class="row justify-center">
        <q-input
          ref="telephoneRef"
          v-model="register.telephone"
          label="Telefone(opcional)"
          lazy-rules
          class="col-3"
          mask="(##) ####-####"
          input-class="text-white"
          :loading="loading"
          :disable="loading"
          color="white"
          label-color="white"
          item-aligned
        />
        <q-input
          v-model="register.phone"
          input-class="text-white"
          label-color="white"
          color="white"
          item-aligned
          label="Celular de contato *"
          :rules="phoneRole"
          mask="(##) # ####-####"
          ref="phoneRef"
          :loading="loading"
          :disable="loading"
          class="col-md-3 col-sm-10"
        />
      </div>
      <div class="row">
        <div class="col-3 self-center">
          <q-btn
            no-caps
            dense
            outline
            color="white"
            :to="{ name: 'login' }"
            label="Volta tela Login"
          />
        </div>
      </div>
      <div class="row justify-center text-white text-center text-bolder">
        <div class="col-md-12 self-center q-mt-lg">
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
    <q-inner-loading
      :showing="loading"
      label="Por favor, aguarde..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import useRoles from "src/composables/system/useRoles";
import useRefForm from "src/composables/system/Requests/useRefForm";
import useRegister from "src/composables/system/Requests/useRegister";
import useNotify from "src/composables/useNotify";

export default defineComponent({
  name: "FirstStep",
  emits: ["step-current"],
  setup(props, ctx) {
    const {
      nameRef,
      lastnameRef,
      emailRef,
      birthdayRef,
      personRef,
      genreRef,
      phoneRef,
      telephoneRef,
      optionGenre,
      validateDataErrorMsg,
      validateDataInitial,
    } = useRefForm();
    const isPwd = ref(false);
    const { personRule, nameRule, emailRule, requiredRole, phoneRole } =
      useRoles();
    const userStore = useUserStore();
    const { register } = storeToRefs(userStore);
    const { infoNotify } = useNotify();
    const { validateCPF, statusPerson, loading } = useRegister();
    const onSubmit = async () => {
      validateDataInitial();
      if (validateDataErrorMsg()) {
        infoNotify("Esta esquecendo de preenche algum campo");
        return;
      }
      await validateCPF(register.value.person);
      console.log("Aqui os dados->", statusPerson);
      if (statusPerson.value) ctx.emit("step-current", 2);
    };

    return {
      register,
      loading,
      isPwd,
      personRule,
      nameRef,
      lastnameRef,
      emailRef,
      birthdayRef,
      personRef,
      genreRef,
      phoneRef,
      telephoneRef,
      optionGenre,
      onSubmit,
      nameRule,
      emailRule,
      requiredRole,
      phoneRole,
    };
  },
});
</script>
<style></style>
