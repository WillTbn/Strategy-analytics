<template>
  <div class="row justify-center text-center items-center" style="height: 50vh">
    <div class="col-12">
      <title-description
        title="Entraremos em contato!"
        description="Obrigado por escolher a Strategy Analytics."
      ></title-description>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TitleDescription from "./TitleDescription.vue";

export default defineComponent({
  name: "MsgFinal",
  components: { TitleDescription },
});
</script>
