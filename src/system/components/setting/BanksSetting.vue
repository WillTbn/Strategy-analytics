<template>
  <div class="BanksSetting">
    <p
      style="display: flex; align-content: center; align-items: center"
      v-if="data.role_id == 3"
    >
      <textarea-title text="Conta cadastradas" />
    </p>
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
    <!-- :disabled="loading"
    :loading="loading" -->
    <q-btn
      flat
      round
      color="primary"
      icon="fa-solid fa-plus"
      size="16px"
      @click.prevent="editBank(0)"
    />
    <q-dialog v-model="cardStatus" persistent>
      <editbank-layout :bankEdit="idEdit" :deleteAction="deleteAction" />
    </q-dialog>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import EditbankLayout from "src/system/layouts/EditbankLayout.vue";
import TextareaTitle from "src/system/components/TextareaTitle.vue";

export default defineComponent({
  name: "PersonalsetupLayout",
  components: { EditbankLayout, EditbankLayout, TextareaTitle },
  setup() {
    const cardStatus = ref(false);
    const edit = ref();
    const store = useUserStore();
    const { data } = storeToRefs(store);
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
    return {
      data,
      cardStatus,
      edit,
      editBank,
      deleteAction,
      idEdit,
    };
  },
  // Outras configurações do componente aqui
});
</script>
<style lang=""></style>
