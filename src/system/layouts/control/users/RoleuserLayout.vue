<template>
  <q-card class="roleuserLayout q-px-lg">
    <q-card-section>
      <header-card :titleCard="'Troca permissões do ' + user.name" />
    </q-card-section>
    <form @submit.prevent.stop="onSubmit" class="row">
      <q-select
        ref="roleRef"
        v-model="newRole"
        transition-show="flip-up"
        transition-hide="flip-down"
        input-class="white"
        filled
        :options="data"
        option-value="id"
        option-label="name"
        emit-value
        map-options
        label="Qual permissão?"
        lazy-rules
        class="col-10"
        :loading="loading"
        :disable="loading"
      />
      <q-card-actions align="right" class="col-12">
        <!-- <q-btn flat label="fechar" color="red-14" v-close-popup /> -->
        <q-btn label="atualizar" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import HeaderCard from "src/system/components/cardDialog/HeaderCard.vue";
import { defineComponent, onMounted, ref } from "vue";
import useroleUsers from "src/composables/system/Requests/useroleUsers";
import { useRoleStore } from "src/stores/role";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    HeaderCard,
  },
  props: {
    user: { type: Object },
  },
  setup(props) {
    const roleRef = ref(null);
    const newRole = ref("");
    const { getAll, setRoleUser } = useroleUsers();
    const storeRole = useRoleStore();
    const { data, loading } = storeToRefs(storeRole);
    const onSubmit = async () => {
      await setRoleUser(props.user.id, newRole.value);
      // console.log("Vamos ver o props -> ", newRole.value);
    };
    onMounted(async () => {
      await getAll();
    });
    return {
      roleRef,
      newRole,
      data,
      loading,
      onSubmit,
    };
  },
});
</script>
<style lang=""></style>
