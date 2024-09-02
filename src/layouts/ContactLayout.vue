<template>
  <transition name="fade" appear mode="out-in">
    <q-form
      class="container-form"
      ref="contactRef"
      @submit="onSubmit"
      v-if="!view"
      key="form"
    >
      <div class="row q-mt-lg">
        <div class="col-12">
          <title-description
            class="text-center q-mb-xl"
            title=" Preencha o formulário"
            description="Seus dados estarão seguros."
          />
        </div>
      </div>
      <!-- <div class="justify-between text-white row q-px-lg q-mx-lg"> -->
      <div
        class="justify-center text-white row items-center content-center q-gutter-sm"
      >
        <div class="col-md-6 col-12 q-mr-sm">
          <span class="text-h7">Nome completo *</span>
          <q-input
            input-class="text-white"
            color="white"
            bg-color="secondary"
            v-model="contact.name"
            lazy-rules
            dense
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
            standout
          />
        </div>
        <div class="col-md-5 col-12">
          <span class="text-h7">E-mail *</span>
          <q-input
            input-class="text-white"
            color="white"
            bg-color="secondary"
            v-model="contact.email"
            lazy-rules
            dense
            standout
            type="email"
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
          />
        </div>
      </div>
      <div
        class="justify-center text-white row items-center content-center q-gutter-sm"
      >
        <div class="col-md-3 col-12">
          <span class="text-h7">CPF ou CNPJ *</span>
          <q-input
            input-class="text-white"
            color="white"
            bg-color="secondary"
            v-model="contact.person"
            lazy-rules
            dense
            standout
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
          />
        </div>
        <div class="col-md-3 col-12">
          <span class="text-h7">RG ou RNE *</span>
          <q-input
            input-class="text-white"
            color="white"
            bg-color="secondary"
            v-model="contact.rg"
            lazy-rules
            dense
            standout
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
          />
        </div>
        <div class="col-md-4 col-12">
          <span class="text-h7">Data de nascimento *</span>
          <q-input
            filled
            v-model="dateEx"
            mask="##/##/####"
            :rules="[rules.required]"
            dense
            standout
            bg-color="secondary"
          >
          </q-input>
        </div>
        <div class="col-1 self-center btn-bg control-calendar desktop-only">
          <!-- style="margin-top: 0.9rem" -->
          <!-- <q-icon name="event" color="primary" size="1.8rem"></q-icon> -->
          <q-icon
            name="fa-solid fa-calendar-days"
            color="primary"
            size="1.8rem"
          ></q-icon>
          <!-- <q-btn icon="event" color="secondary" /> -->
        </div>
      </div>
      <div
        class="justify-center text-white row items-center content-center q-gutter-sm"
      >
        <div class="col-md-3 col-12">
          <span class="text-h7">Estado Civil *</span>
          <q-select
            class="input-simulator"
            transition-show="flip-up"
            transition-hide="flip-down"
            input-class="white"
            bg-color="secondary"
            dense
            standout
            v-model="contact.maritalStatus"
            :options="options"
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
          />
        </div>
        <div class="col-md-4 col-12">
          <span class="text-h7">Telefone (opcional)</span>
          <q-input
            input-class="text-white"
            color="white"
            bg-color="secondary"
            v-model="contact.telephone"
            lazy-rules
            dense
            standout
            class="mb-telephone"
          />
        </div>
        <div class="col-md-4 col-12">
          <span class="text-h7">Celular *</span>
          <q-input
            input-class="text-white"
            color="white"
            bg-color="secondary"
            v-model="contact.cellphone"
            lazy-rules
            dense
            standout
            mask="## # ####-####"
          />
        </div>
      </div>
      <div class="row text-center justify-center">
        <div class="col-3 text-700">
          <q-btn
            label="Concluir"
            color="secondary"
            padding="2px 20px 2px 20px"
            unelevated
            size="1.2rem"
            style="font-weight: 700; font-size: 20px; text-align: center"
            type="submit"
          />
        </div>
      </div>
    </q-form>

    <msg-final v-else key="finally" />
  </transition>
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, onMounted, ref } from "vue";
import TitleDescription from "../components/TitleDescription.vue";
import MsgFinal from "../components/MsgFinal.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ContactLayout",
  components: { TitleDescription, MsgFinal },
  setup() {
    const contact = ref({
      name: "Paulo Ricardo de Oliveira Fernandes",
      email: "paulo@strategyanalytics.com",
      person: "00.6.237.183/0001-87",
      rg: "25.590.784-9",
      birth: "",
      //status civil
      maritalStatus: "Solteiro",
      telephone: "12 3233-4455",
      cellphone: "12 9 9799-5566",
    });
    const contactRef = ref(null);
    const route = useRouter();
    const onSubmit = () => {
      contactRef.value.validate().then((success) => {
        if (success) {
          view.value = true;
          setTimeout(() => {
            route.replace({ path: "/" });
          }, 4000);
        } else {
          console.log("TEM ALGO FALTANDO.");
        }
      });
    };
    const view = ref(false);
    let year = new Date().getFullYear() - 18;
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    const DateMin = `${year}/${month}`;
    const dateEx = ref();
    const options = ["Solteiro", "Casado", "Divorciado", "Viúvo"];
    const $q = useQuasar();
    const proxyDate = ref();
    onMounted(() => {
      console.log("Lang ->", $q.lang.getLocale());
    });
    const rules = {
      required: (value) => !!value || "Campo obrigatório.",
      min: (v) => v.length >= 8 || "Minino 8 caracteres",
      nameRequired: (v) => !!v || "Nome completo obrigatório.",
      personValidated: (v) => v.length == 11 || "Tem que conter 11 números",
      numberValidation: (v) =>
        /^[\s\d]+$/.test(v) || "Somente números são permitidos",
    };

    const optionsData = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formatador = new Intl.DateTimeFormat("pt-BR", optionsData);
    const dataFormatada = formatador.format(contact.value.birth);
    return {
      contact,
      dateEx,
      options,
      proxyDate,
      contactRef,
      onSubmit,
      updateProxy() {
        proxyDate.value = contact.value.birth;
      },
      save() {
        contact.value.birth = proxyDate.value;
      },
      DateMin,
      rules,
      view,
    };
  },
});
</script>
<style>
#q-app
  > div
  > div.q-page-container
  > main
  > div.container-form
  > div:nth-child(3)
  > div.col-3
  > label
  > div
  > div
  > div.q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip
  > i.q-select__dropdown-icon {
  -webkit-text-fill-color: #0085ff;
  -webkit-text-stroke: thin;
  -webkit-text-size-adjust: unset;
  -webkit-text-stroke: 0.2rem #0085ff;
  -webkit-text-size-adjust: 10%;
  margin-right: 0.4rem;
}
</style>
<style lang="sass">
.control-calendar
  padding: 0.4rem
  max-width: 2rem
  height: 3rem
  margin-top: 1.5rem
  display: flex
  justify-content: center
  /* align-content: center */
  align-items: center

.fade-enter-active,
.fade-leave-active
  transition: opacity 2s

.fade-enter,
.fade-leave-to
  opacity: 0

.container-form
  padding-inline: 4rem

.mb-telephone
  margin-bottom: 1.3rem

body:not(.mobile)
  .container-form
    padding-inline: 280px
</style>
