<template>
  <q-card class="ChangePhoto tool" flat>
    <q-card-section horizontal>
      <avatar-new />
      <q-card-section class="q-pa-lg">
        <div class="">
          <b class="text-nunito-15-600-white text-uppercase">
            {{ name }}
          </b>
          <br />
          <span class="text-nunito-13-400-accent">
            {{ typeInvest }}
          </span>
        </div>
        <div class="flex gap-sm q-mt-sm">
          <q-icon name="phone" class="q-mr-md" size="1.2rem" />
          <p class="text-nunito-13-400">{{ phone }}</p>
        </div>
        <div class="flex gap-sm">
          <q-icon name="mail" class="q-mr-md" size="1.2rem" />
          <p class="text-nunito-13-400">{{ mail }}</p>
        </div>
        <div class="flex gap-sm">
          <q-icon name="mail" class="q-mr-md" size="1.2rem" />
          <p class="text-nunito-13-400">{{ address }}</p>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import AvatarNew from "../upload/AvatarNew.vue";
export default defineComponent({
  name: "ChangePhoto",
  components: { AvatarNew },
  props: {
    name: { type: String },
    phone: { type: String },
    mail: { type: String },
    address: { type: String },
    typeInvest: { type: String, default: "Investidor Obsidian" },
  },
});
</script>
<style lang="sass"></style>
