<template>
  <div class="RiskDetails row text-center justify-center items-center">
    <q-avatar class="control-img col-2">
      <img :src="image" />
    </q-avatar>
    <span class="q-pa-lg col-1 font-typ" :class="colorText">{{ risk }}</span>
    <span class="q-pa-lg col-1 font-typ text">=</span>
    <span class="q-pa-lg col-2 font-typ exposure">{{ exposure }}</span>
    <span class="q-pa-lg col-1 font-typ text">=</span>
    <span class="q-pa-lg col-4 font-typ">{{ chances }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "RiskDetails",
  props: {
    risk: { type: String },
    image: { type: String },
    exposure: { type: String },
    chances: { type: String },
    colorText: { type: String },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.control-img {
  width: 135.436px;
  height: 116.16px;
}
.RiskDetails {
  text-transform: uppercase;
}
.risk {
  width: 102.403px;
  height: 79.28px;
}
.exposure {
  /* width: 341.068px;
  height: 79.28px; */
  text-align: center;

  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.chances {
  width: 477.329px;
  height: 79.28px;
}
.font-typ {
  display: inline-block;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
}
.text {
  /* width: 64px;
  height: 86px; */
  font-size: 48px;
}
.color-yellow {
  color: #f5e556;
}
.color-red {
  color: #ec5252;
}
.color-green {
  color: #7fe47e;
}
</style>
