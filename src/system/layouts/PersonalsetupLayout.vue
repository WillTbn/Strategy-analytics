<template>
  <div class="PersonalsetupLayout">
    <q-inner-loading
      :showing="!data.account"
      label="Pegando seus dados..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
    <q-card class="my-card bg-transparent" flat v-if="data.account">
      <q-item>
        <q-item-section avatar>
          <avatar-new />
          <!-- <q-avatar size="9rem">
            <img :src="data.avatar" />
          </q-avatar> -->
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h4">{{ data.name }}</q-item-label>
          <q-item-label caption class="q-ma-sm">
            <q-icon name="fa-solid fa-user" size="1rem" />
            <!-- {{ data.investor }} -->
            Investido obsidian
          </q-item-label>
          <q-item-label caption class="q-ma-sm">
            <q-icon name="fa-solid fa-envelope" size="1rem" />
            {{ data.email }}
          </q-item-label>
          <!-- <FontAwesomeIcon icon="fa-solid fa-earth-americas" /> -->
          <q-item-label caption class="q-ma-sm">
            <q-icon name="fa-solid fa-earth-americas" size="1rem" />
            {{ data.account.address_state }} -
            {{ data.account.address_country }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
    <div class="row q-mt-lg">
      <div class="col-12">
        <p>
          <textarea-title text="informações pessoais" />
        </p>
      </div>
    </div>
    <q-form @submit.prevent.stop="onSubmitData">
      <q-inner-loading
        :showing="loading"
        label="Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />

      <div class="q-mb-lg row">
        <div class="col-4">
          <span class="text-primary text-weight-bold">Nome completo:</span
          ><br />

          <q-input
            dense
            standout
            v-model="data.name"
            :disabled="loading"
            :loading="loading"
          />
        </div>
      </div>
      <div class="q-mb-lg">
        <span class="text-primary text-weight-bold">E-mail:</span><br />
        <input
          type="text"
          name="name"
          v-model="data.email"
          id="email"
          disabled
        />
      </div>
      <div class="q-mb-lg row" v-if="data.account">
        <div class="col-4">
          <span class="text-primary text-weight-bold">Celular :</span><br />
          <q-input
            dense
            standout
            v-model="data.account.phone"
            mask="(##) # ####-####"
            :disabled="loading"
            :loading="loading"
          />
        </div>
      </div>
      <p class="text-muted" v-if="sameInput">{{ sameInput }}</p>
      <q-btn
        label="atualizar"
        type="submit"
        color="indigo-14"
        :disabled="loading"
        :loading="loading"
      />
    </q-form>
    <p
      style="display: flex; align-content: center; align-items: center"
      v-if="data.role_id == 3"
    >
      <textarea-title text="Conta bancária" />
      <q-btn
        :disabled="loading"
        :loading="loading"
        flat
        round
        color="primary"
        icon="fa-solid fa-plus"
        size="16px"
        @click.prevent="editBank(0)"
      />
    </p>
    <div class="" v-if="data.role_id == 3">
      <p
        v-for="item in data.user_bank_accounts"
        :key="item"
        style="display: flex; align-content: center; align-items: center"
      >
        <span class="text-second text-weight-bold"> {{ item.bank }} </span>
        <span class="text-weight-bold q-pl-sm">{{ item.number }}</span>
        <q-btn
          @click="editBank(item)"
          flat
          round
          color="primary"
          class="q-ml-sm"
          size="6px"
          icon="fa-solid fa-pen"
        />
        <q-btn
          @click="editBank(item, true)"
          flat
          round
          color="red-14"
          class="q-ml-sm"
          size="6px"
          icon="fa-solid fa-trash"
        />
      </p>
    </div>

    <q-dialog v-model="cardStatus" persistent>
      <editbank-layout :bankEdit="idEdit" :deleteAction="deleteAction" />
    </q-dialog>
  </div>
</template>

<script>
import EditbankLayout from "../layouts/EditbankLayout.vue";
import { defineComponent, ref } from "vue";
import TextareaTitle from "../components/TextareaTitle.vue";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import useCase from "src/composables/system/useCase";
import AvatarNew from "../components/upload/AvatarNew.vue";
import useNotify from "src/composables/useNotify";
import useAccount from "src/composables/system/Requests/useAccount";

// import InputSystem from "../components/InputSystem.vue";

export default defineComponent({
  name: "PersonalsetupLayout",
  components: { TextareaTitle, EditbankLayout, AvatarNew },
  setup() {
    const sameInput = ref();
    const cardStatus = ref(false);
    const edit = ref();
    const store = useUserStore();
    const { data, isDirty, isDirtyData } = storeToRefs(store);
    const { same } = useCase();
    const { infoNotify } = useNotify();
    const { updateData, loading } = useAccount();
    const deleteAction = ref();
    const idEdit = ref();

    const editBank = (item, action = false) => {
      deleteAction.value = action;
      cardStatus.value = true;
      idEdit.value = item != 0 ? item.id : item;
      store.getAccount(item.id);
      // edit.value = item.id;
      // console.log("edit vale ", edit.value);
    };
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
    return {
      data,
      cardStatus,
      edit,
      editBank,
      onSubmitData,
      sameInput,
      loading,
      deleteAction,
      idEdit,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
