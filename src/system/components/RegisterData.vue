<template>
  <div class="RegisterData">
    <p>© {{ registerData }} Strategy Analytics</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      registerData: new Date().getFullYear(),
    };
  },
});
</script>
