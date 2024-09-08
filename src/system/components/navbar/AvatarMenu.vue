<template>
  <div class="AvatarMenu">
    <q-avatar size="46px" class="q-my-sm avatar-custom">
      <img :src="avatar" />
    </q-avatar>
    <q-menu
      fit
      anchor="bottom left"
      self="top middle"
      transition-show="scale"
      transition-hide="scale"
      class="tool text-weight-bold"
    >
      <q-item clickable v-ripple :to="{ name: 'config' }">
        <q-item-section class="text-white">Configurações</q-item-section>
        <q-item-section avatar>
          <q-icon color="white" name="fa-solid fa-gear" />
        </q-item-section>
      </q-item>
      <q-item clickable @click.prevent="setLogout">
        <q-item-section>Logout</q-item-section>
        <q-item-section avatar>
          <q-icon color="red" name="fa-solid fa-right-from-bracket" />
        </q-item-section>
      </q-item>
    </q-menu>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import useAuth from "src/composables/system/useAuth";

export default defineComponent({
  name: "AvatarMenu",
  props: {
    avatar: { type: String },
  },
  setup() {
    const { setLogout } = useAuth();

    return {
      setLogout,
    };
  },
});
</script>
<style lang="sass">
.avatar-custom>.q-avatar__content>img
  border: 2px solid #ddd
  cursor: pointer
</style>
