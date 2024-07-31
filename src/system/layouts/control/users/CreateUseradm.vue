<template>
  <div class="CreateUseradm row justify-around">
    <form @submit.prevent.stop="onSubmit" class="col-lg-6 col-sm-12">
      <div class="row justify-around">
        <div class="col-12">
          <q-btn
            flat
            color="primary"
            icon="fa-solid fa-arrow-left"
            @click="$emit('step-view', 'list')"
            size="sm"
          >
            <q-tooltip class="bg-indigo" :offset="[10, 10]">
              Voltar para lista de usuários
            </q-tooltip>
          </q-btn>
        </div>
      </div>
      <div class="row justify-around">
        <div class="col-12">
          <h5>Criando usuário</h5>
        </div>
      </div>
      <!-- Campos essenciais table User -->
      <div class="row q-px-sm q-col-gutter-lg">
        <div class="col-12">
          <span class="text-grey-5">Dados pessoais</span>
        </div>
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="nameRef"
          v-model="newUser.firstname"
          label="Nome*"
          hint="obrigatório"
          lazy-rules
          :rules="emptyRule"
          class="col-11 col-md-3"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="lastnameRef"
          v-model="newUser.lastname"
          hint="obrigatório"
          label="Sobrenome*"
          lazy-rules
          :rules="emptyRule"
          class="col-11 col-md-3"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="emailRef"
          v-model="newUser.email"
          label="Digite o e-mail*"
          lazy-rules
          :rules="emptyRule"
          hint="obrigatório"
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
          type="email"
        />
      </div>

      <!-- Campo Essenvial table Account -->
      <div class="row q-col-gutter-lg q-my-sm q-px-sm">
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="personRef"
          v-model="newUser.person"
          label="CPF*"
          hint="obrigatório"
          lazy-rules
          :rules="emptyRule"
          class="col-11 col-md-4"
          mask="###.###.###-##"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="birthdayRef"
          v-model="newUser.birthday"
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
          type="date"
          mask="DD/MM/YYYY"
        />

        <!-- v-bind="{...$inputStyle}"> -->
        <!-- <q-input
         v-bind="{...$inputStyle}"
          ref="telephoneRef"
          v-model="newUser.telephone"
          label="Telefone"
          lazy-rules
          class="col-11 col-md-3"
          mask="(##) ####-####"
          :loading="loading"
          :disable="loading"
        /> -->
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="phoneRef"
          hint="obrigatório"
          v-model="newUser.phone"
          label="Celular de contato*"
          lazy-rules
          :rules="emptyRule"
          class="col-11 col-md-3"
          mask="(##) # ####-####"
          :loading="loading"
          :disable="loading"
        />
        <q-select
          ref="genreRef"
          v-model="newUser.genre"
          transition-show="flip-up"
          transition-hide="flip-down"
          input-class="white"
          :options="optionGenre"
          option-value="value"
          option-label="label"
          emit-value
          map-options
          label="Qual genero se identificar?"
          lazy-rules
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
        />
        <!-- hint="obrigatório" -->
      </div>
      <!-- dados essenciais para o sistema -->
      <q-separator color="indigo" spaced="lg" />
      <div class="row q-gutter-lg q-my-sm">
        <div class="col-12">
          <span class="text-grey-5">Dados essenciais para o sistema</span>
        </div>
        <q-select
          ref="roleRef"
          v-model="newUser.role_id"
          transition-show="flip-up"
          transition-hide="flip-down"
          :options="optionRole"
          label="Permissões*"
          hint="obrigatório, papel do usuário"
          option-value="id"
          option-label="label"
          emit-value
          map-options
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
        />
        <q-select
          ref="notificationsRef"
          v-model="newUser.notifications"
          transition-show="flip-up"
          transition-hide="flip-down"
          label="Receber notificações por e-mail*"
          hint="campo obrigatório"
          lazy-rules
          :options="optionNot"
          option-value="id"
          option-label="label"
          emit-value
          map-options
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
        />
      </div>
      <q-separator color="indigo" spaced="lg" />
      <div class="row q-gutter-lg q-my-sm">
        <div class="col-12">
          <span class="text-grey-5">Dados Complementares</span>
        </div>
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="streetRef"
          v-model="newUser.address_street"
          label="Rua"
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="numberstreetRef"
          v-model="newUser.address_numbers"
          label="Numero"
          class="col-5 col-md-3"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="districtRef"
          v-model="newUser.address_district"
          label="Bairro"
          class="col-5 col-md-3"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="zipcodeRef"
          v-model="newUser.address_zip_code"
          label="CEP"
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="cityRef"
          v-model="newUser.address_city"
          label="Cidade"
          class="col-11 col-md-4"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="statestreetRef"
          v-model="newUser.address_state"
          label="Estado"
          class="col-5 col-md-3"
          :loading="loading"
          :disable="loading"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          ref="countryRef"
          v-model="newUser.address_country"
          label="Pais"
          class="col-5 col-md-3"
          :loading="loading"
          :disable="loading"
        />
      </div>
      <div class="row justify-end q-mb-lg">
        <div class="col-12">
          <span class="text-grey-5 text-subtitle2">
            <i class="fa-solid fa-circle-exclamation q-mr-sm"></i>
            Será enviado um e-mail para o usuário cadastra senha, fazer
            verificação de e-mail e fazer o primeiro acesso.
          </span>
        </div>
        <div class="col-5 col-lg-4 col-sm-6 self-end">
          <q-btn
            type="submit"
            color="green-14"
            label="Criar"
            icon-right="send"
            :loading="loading"
            :disable="loading"
          ></q-btn>
        </div>
      </div>
      <!-- <q-btn
        @click.prevent="onTest"
        color="indigo-14"
        label="Dados de teste"
        icon-right="send"
        :loading="loading"
        :disable="loading"
      ></q-btn> -->
    </form>
  </div>
</template>
<script>
import useAdm from "src/composables/system/Requests/useAdm";
import useRefForm from "src/composables/system/Requests/useRefForm";
import useNotify from "src/composables/useNotify";
import { defineComponent, ref } from "vue";
export default defineComponent({
  emits: ["step-view"],
  setup() {
    const { createAdm, loading } = useAdm();
    const { infoNotify } = useNotify();
    const {
      nameRef,
      lastnameRef,
      emailRef,
      birthdayRef,
      personRef,
      genreRef,
      phoneRef,
      roleRef,
      telephoneRef,
      streetRef,
      numberstreetRef,
      districtRef,
      zipcodeRef,
      cityRef,
      countryRef,
      optionGenre,
      optionRole,
      optionNot,
      validateInput,
      validateErrorMsg,
    } = useRefForm();

    const newUser = ref({
      firstname: "",
      lastname: "",
      name: "",
      email: "",
      person: "",
      birthday: "",
      notifications: "",
      telephone: "",
      phone: "",
      genre: "",
      address_street: "",
      address_state: "",
      address_district: "",
      address_zip_code: "",
      address_city: "",
      address_numbers: "",
      address_country: "",
      role_id: "",
    });
    const onTest = () => {
      (newUser.value.firstname = "Teste"),
        (newUser.value.lastname = "Teste Sobrenome"),
        (newUser.value.email = "teste@live.com"),
        (newUser.value.person = "111.000.123-12"),
        (newUser.value.birthday = "1990/12/20"),
        (newUser.value.notifications = "aceitar"),
        (newUser.value.telephone = "21 2323-3232"),
        (newUser.value.phone = "21 9 93232-2314"),
        (newUser.value.genre = "O"),
        (newUser.value.address_street = "Teste"),
        (newUser.value.address_state = "Teste"),
        (newUser.value.address_district = "Teste"),
        (newUser.value.address_zip_code = "Teste"),
        (newUser.value.address_city = "Teste"),
        (newUser.value.address_country = "Teste"),
        (newUser.value.address_numbers = 123),
        (newUser.value.role_id = "Teste");
      console.log(newUser.value);
    };
    const onSubmit = async () => {
      validateInput();
      if (validateErrorMsg()) {
        infoNotify("Esta esquecendo de preenche algum campo");
        return;
      }
      newUser.value.name =
        newUser.value.firstname + " " + newUser.value.lastname;

      await createAdm(newUser.value);
    };
    return {
      newUser,
      nameRef,
      emailRef,
      lastnameRef,
      personRef,
      birthdayRef,
      genreRef,
      roleRef,
      phoneRef,
      telephoneRef,
      streetRef,
      numberstreetRef,
      districtRef,
      zipcodeRef,
      cityRef,
      countryRef,
      onSubmit,
      optionGenre,
      optionRole,
      optionNot,
      loading,
      onTest,
      emptyRule: [(val) => (val && val.length > 0) || "Por favor digite algo"],
    };
  },
});
</script>
<style></style>
