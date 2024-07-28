<template>
  <div class="FirstStep">
    <span class="text-muted-register">
      Já tem uma conta?
      <b
        class="text-hover text-weight-bolder forgot text-white"
        @click="goLogin"
      >
        Entre aqui!
      </b>
    </span>
    <q-form
      @submit.prevent.stop="onSubmit"
      class="row justify-center text-white"
    >
      <div class="col-md-12 col-sm-10 self-center">
        <div class="column q-my-lg q-gutter-md">
          <div class="">
            <span class="text-label">Nome Completo</span>
            <q-input
              v-bind="{ ...$inputStyle }"
              v-model.lazy="register.name"
              placeholder="Digite o nome conforme seu documento"
              :rules="nameRule"
              ref="nameRef"
              :loading="loading"
              :disable="loading"
            />
          </div>
          <div class="">
            <span class="text-label">CPF</span>
            <q-input
              v-model="register.person"
              v-bind="{ ...$inputStyle }"
              mask="###.###.###-##"
              placeholder="000.000.000-00"
              :rules="personRule"
              ref="personRef"
              :loading="loading"
              :disable="loading"
            />
          </div>
          <div class="">
            <span class="text-label">Data nascimento</span>
            <q-input
              v-bind="{ ...$inputStyle }"
              navigation-min-year-month="1990/07"
              ref="birthdayRef"
              v-model="register.birthday"
              :loading="loading"
              :disable="loading"
              type="date"
              :rules="requiredRole"
            />
          </div>
          <div class="">
            <span class="text-label">Email</span>
            <q-input
              v-model="register.email"
              v-bind="{ ...$inputStyle }"
              placeholder="Digite seu e-mail"
              type="email"
              ref="emailRef"
              :loading="loading"
              :disable="loading"
              :rules="emailRule"
            />
          </div>
          <div class="">
            <span class="text-label">Criar senha</span>
            <q-input
              v-model="register.password"
              placeholder="Digite sua senha"
              v-bind="{ ...$inputStyle }"
              :type="isPwd ? 'password' : 'text'"
              :rules="[(val) => !!val || 'Campo não atende os requisitos.']"
              :loading="loading"
              :disable="loading"
              ref="passwordRef"
            >
              <template v-slot:append>
                <q-icon
                  color="secondary"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div class="q-pa-sm q-mt-sm">
              <itens-password
                v-for="(item, index) in fiedValidate"
                :text="item.name"
                :status="item.status"
                :key="index"
              />
            </div>
            <span class="text-label">Confirmar senha</span>
            <q-input
              v-model="register.password_confirmation"
              placeholder="Confirme sua senha"
              v-bind="{ ...$inputStyle }"
              :type="isPwd ? 'password' : 'text'"
              :rules="passwordConfirmRule"
              ref="passwordConfirmRef"
              :loading="loading"
              :disable="loading"
            >
              <template v-slot:append>
                <q-icon
                  color="secondary"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>

          <div class="">
            <span class="text-label">Número de celular</span>
            <q-input
              v-model="register.phone"
              v-bind="{ ...$inputStyle }"
              :rules="phoneRole"
              mask="(##) # ####-####"
              ref="phoneRef"
              :loading="loading"
              :disable="loading"
            >
              <template v-slot:prepend>
                <q-select
                  v-model="countryNumber"
                  :options="options"
                  borderless
                  dense
                >
                  <template v-slot:selected>
                    <q-chip
                      size="md"
                      v-if="countryNumber"
                      :icon="countryNumber.icon"
                    >
                      <!-- class="q-my-none q-ml-xs q-mr-none" -->
                      {{ countryNumber.label }}
                    </q-chip>
                    <q-badge v-else>*none*</q-badge>
                  </template>
                  <template v-slot:option="scope">
                    <q-item v-bind="scope.itemProps">
                      <q-item-section avatar>
                        <q-icon :name="scope.opt.icon" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ scope.opt.label }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </template>
            </q-input>
          </div>
          <q-btn
            color="primary"
            padding="14.9px 179.23px 15.5px 179.22px"
            text-color="white"
            label="Continuar"
            type="submit"
            :disabled="loading"
            :loading="loading"
            class="col-12 text-weight-bolder"
            no-caps
            style="border-radius: 8px"
          >
            <template v-slot:loading>
              <q-spinner-pie size="3em" />
            </template>
          </q-btn>
        </div>
        <!-- <q-btn
          color="secondary"
          padding="0.5rem 3rem"
          label="continuar"
          type="submit"
          :disabled="loading"
          :loading="loading"
        >
          <template v-slot:loading>
            <q-spinner-pie size="3em" />
          </template>
        </q-btn> -->
      </div>
    </q-form>
    <q-inner-loading
      dark
      :showing="loading"
      label="Por favor, aguarde..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </div>
</template>
<script>
import { defineComponent, ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import useRoles from "src/composables/system/useRoles";
import useRefForm from "src/composables/system/Requests/useRefForm";
import useRegister from "src/composables/system/Requests/useRegister";
import useNotify from "src/composables/useNotify";
import ItensPassword from "src/system/components/auth/ItensPassword.vue";
export default defineComponent({
  name: "FirstStep",
  emits: ["step-current"],
  components: { ItensPassword },
  setup(props, ctx) {
    const {
      nameRef,
      lastnameRef,
      emailRef,
      birthdayRef,
      personRef,
      phoneRef,
      telephoneRef,
      optionGenre,
      passwordConfirmRef,
      passwordRef,
      validateDataErrorMsg,
      validateDataInitial,
    } = useRefForm();
    const isPwd = ref(true);
    const {
      personRule,
      nameRule,
      emailRule,
      requiredRole,
      phoneRole,
      fiedValidate,
      notificationRules,
    } = useRoles();
    const passwordConfirmRule = [
      (value) => !!value || notificationRules("Campo é obrigatorio"),
      (value) =>
        value == register.value.password ||
        notificationRules("Senhas não conferem"),
    ];
    const userStore = useUserStore();
    const { register } = storeToRefs(userStore);
    const { infoNotify, errorNotify } = useNotify();
    const { validateCPF, statusPerson, loading } = useRegister();
    const verifyValue = computed(() => register.value.password);

    watch(verifyValue, (n, o) => {
      /\d/.test(n)
        ? (fiedValidate.value[3].status = true)
        : (fiedValidate.value[3].status = false);
      /[^\w\s]/.test(n)
        ? (fiedValidate.value[2].status = true)
        : (fiedValidate.value[2].status = false);
      /[A-Z]/.test(n)
        ? (fiedValidate.value[1].status = true)
        : (fiedValidate.value[1].status = false);
      /[a-z]/.test(n)
        ? (fiedValidate.value[0].status = true)
        : (fiedValidate.value[0].status = false);
      n.length > 8
        ? (fiedValidate.value[4].status = true)
        : (fiedValidate.value[4].status = false);
    });
    const countryNumber = ref({
      label: "+55",
      value: "goog",
      icon: "img:../../system/icons/country/brasil.png",
    });
    const options = [
      {
        label: "+55",
        value: "+55",
        icon: "img:../../system/icons/country/brasil.png",
      },
      {
        label: "+54",
        value: "+54",
        icon: "img:../../system/icons/country/argentina.png",
      },
      {
        label: "+351",
        value: "+351",
        icon: "img:../../system/icons/country/portugal.png",
      },
      {
        label: "+1",
        value: "+1",
        icon: "img:../../system/icons/country/united_states.png",
      },
      {
        label: "+1",
        value: "+1+",
        icon: "img:../../system/icons/country/new-zealand.png",
      },
    ];
    const onSubmit = async () => {
      console.log("OLA");
      validateDataInitial();
      console.log("OLA");
      if (validateDataErrorMsg()) {
        console.log("AMIDGO ESTOU AQUI");
        infoNotify("Esta esquecendo de preenche algum campo");
        return;
      }
      const rulesDetect = fiedValidate.value.filter((e) => e.status == false);
      passwordRef.value.validate();
      passwordConfirmRef.value.validate();
      if (rulesDetect.length > 0) {
        errorNotify("Campo Senha não atende a os requisitos minímos.", 30000);
        return;
      }
      try {
        await validateCPF(
          register.value.person,
          register.value.email,
          register.value.birthday
        );
      } catch (e) {
        console.log(e);
      } finally {
        if (statusPerson.value) ctx.emit("step-current", 2);
        console.log("Aqui os dados->", statusPerson.value);
      }
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
      phoneRef,
      telephoneRef,
      optionGenre,
      onSubmit,
      nameRule,
      emailRule,
      requiredRole,
      phoneRole,
      passwordConfirmRule,
      passwordConfirmRef,
      passwordRef,
      verifyValue,
      fiedValidate,
      options,
      countryNumber,
    };
  },
});
</script>
<style scoped>
.q-chip {
  vertical-align: middle;
  outline: 0;
  position: relative;
  max-width: 100%;
  margin: 4px;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  padding: 0.5em 0.9em;
}
</style>
