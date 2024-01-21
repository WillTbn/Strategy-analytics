<template>
  <div class="PersonalsetupLayout">
    <q-card class="my-card bg-transparent" flat>
      <q-item>
        <q-item-section avatar>
          <q-avatar size="9rem">
            <img :src="data.avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h4">{{ data.name }}</q-item-label>
          <q-item-label caption class="q-ma-sm">
            <q-icon name="fa-solid fa-user" size="1rem" />
            {{ data.investidor }}
          </q-item-label>
          <q-item-label caption class="q-ma-sm">
            <q-icon name="fa-solid fa-envelope" size="1rem" />
            {{ data.email }}
          </q-item-label>
          <!-- <FontAwesomeIcon icon="fa-solid fa-earth-americas" /> -->
          <q-item-label caption class="q-ma-sm">
            <q-icon name="fa-solid fa-earth-americas" size="1rem" />
            {{ data.state }} - {{ data.country }}
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
    <q-form>
      <div class="q-mb-lg">
        <span class="text-primary text-weight-bold">Nome completo:</span><br />
        <input type="text" name="name" v-model="data.name" id="name" />
      </div>
      <div class="q-mb-lg">
        <span class="text-primary text-weight-bold">E-mail:</span><br />
        <input type="text" name="name" v-model="data.email" id="name" />
      </div>
      <div class="q-mb-lg">
        <span class="text-primary text-weight-bold">Telefone:</span><br />
        <input type="text" name="name" v-model="data.phone" id="name" />
      </div>
    </q-form>
    <p style="display: flex; align-content: center; align-items: center">
      <textarea-title text="Conta bancária" />
      <q-btn
        flat
        round
        color="primary"
        icon="fa-solid fa-plus"
        size="16px"
        @click.prevent="editBank(0)"
      />
    </p>

    <p
      v-for="item in data.account"
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
        class="q-pl-sm"
        size="6px"
        icon="fa-solid fa-pen"
      />
    </p>

    <q-dialog v-model="cardStatus">
      <editbank-layout />
    </q-dialog>
  </div>
</template>

<script>
import EditbankLayout from "../layouts/EditbankLayout.vue";
import { defineComponent, ref } from "vue";
import TextareaTitle from "../components/TextareaTitle.vue";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";

// import InputSystem from "../components/InputSystem.vue";

export default defineComponent({
  name: "PersonalsetupLayout",
  components: { TextareaTitle, EditbankLayout },
  setup() {
    const cardStatus = ref(false);
    const edit = ref();
    const store = useUserStore();
    const { data } = storeToRefs(store);

    const editBank = (item) => {
      cardStatus.value = true;
      store.getAccount(item.id);
      // edit.value = item.id;
      // console.log("edit vale ", edit.value);
    };
    return { data, cardStatus, edit, editBank };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
