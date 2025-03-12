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
          <q-icon class="q-mr-md" size="1.2rem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
            >
              <path
                d="M4.54158 10.5208C3.90192 10.4653 3.3049 10.2986 2.75053 10.0208C2.19616 9.74306 1.71642 9.38542 1.3113 8.94792C0.906183 8.51042 0.5828 8.01389 0.341151 7.45833C0.113717 6.88889 0 6.28472 0 5.64583C0 4.96528 0.127932 4.33333 0.383795 3.75C0.653874 3.15278 1.01279 2.63194 1.46055 2.1875C1.90832 1.74306 2.43781 1.39583 3.04904 1.14583C3.66027 0.881944 4.30704 0.75 4.98934 0.75C5.68586 0.75 6.33973 0.881944 6.95096 1.14583C7.54797 1.39583 8.07392 1.74306 8.52878 2.1875C8.98365 2.63194 9.34613 3.15278 9.6162 3.75C9.87207 4.33333 10 4.96528 10 5.64583C10 6.28472 9.87918 6.88889 9.63753 7.45833C9.41009 8.01389 9.09026 8.51042 8.67804 8.94792C8.26581 9.38542 7.78252 9.74306 7.22815 10.0208C6.68799 10.2986 6.09808 10.4653 5.45842 10.5208V16.3125C5.45842 16.4375 5.41222 16.5417 5.31983 16.625C5.22743 16.7083 5.11727 16.75 4.98934 16.75C4.86141 16.75 4.7548 16.7083 4.66951 16.625C4.58422 16.5417 4.54158 16.4375 4.54158 16.3125V10.5208ZM4.98934 9.64583C6.12651 9.64583 7.09311 9.25694 7.88913 8.47917C8.68515 7.70139 9.08316 6.75694 9.08316 5.64583C9.08316 4.53472 8.68515 3.59028 7.88913 2.8125C7.09311 2.03472 6.12651 1.64583 4.98934 1.64583C3.86638 1.64583 2.90334 2.03472 2.10021 2.8125C1.29709 3.59028 0.895522 4.53472 0.895522 5.64583C0.895522 6.75694 1.29709 7.70139 2.10021 8.47917C2.90334 9.25694 3.86638 9.64583 4.98934 9.64583Z"
                fill="white"
                fill-opacity="0.85"
              />
            </svg>
          </q-icon>
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
