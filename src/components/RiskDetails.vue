<template>
  <div
    class="RiskDetails row text-center justify-center items-center"
    :class="borderColor"
  >
    <q-avatar class="control-img col-md-2 col-sm-6">
      <img :src="image" />
    </q-avatar>
    <span
      class="q-pa-md-lg q-pa-sm-sm col-md-1 col-sm-6 font-typ"
      :class="colorText"
      >{{ risk }}</span
    >
    <div class="col-12 desktop-hide"></div>
    <span class="q-pa-md-lg q-pa-sm-sm col-md-1 col-sm-12 font-typ text"
      >=</span
    >
    <span class="q-pa-md-lg q-pa-sm-sm col-md-2 col-sm-6 font-typ exposure">{{
      exposure
    }}</span>
    <span class="q-pa-md-lg q-pa-sm-sm col-md-1 col-sm-12 font-typ text"
      >=</span
    >
    <div class="col-12 desktop-hide"></div>
    <span class="q-pa-md-lg q-pa-sm-sm col-md-4 col-sm-12 font-typ">{{
      chances
    }}</span>
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
    borderColor: { type: String },
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

@media (max-width: 768px) {
  .control-img {
    width: 45.436px;
    height: 36.16px;
  }
  .RiskDetails {
    margin: 0.5rem;
  }
  .red-border {
    border: solid #ec5252;
  }
  .yellow-border {
    border: solid #f5e556;
  }
  .green-border {
    border: solid #7fe47e;
  }
}
</style>
