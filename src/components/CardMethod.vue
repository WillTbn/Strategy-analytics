<template>
  <div class="CardMethod text-white">
    <span>{{ name }}</span>
    <q-card class="bg-secondary q-px-lg" :class="className">
      <q-card-section>
        <div class="text-title">{{ title }}</div>
      </q-card-section>

      <q-card-actions class="row control-content">
        <div class="col-md-4 col-sm-6">
          <p class="text-weight-thin">Preço unitário</p>
          <p class="text-method">BRL {{ price }}</p>
        </div>
        <div class="control-margin col-md-4 col-sm-6">
          <p class="text-weight-thin">Retorno ano corrente</p>
          <p class="text-method">
            <q-icon name="fa-solid fa-chevron-up" color="green" /> {{ current }}
          </p>
        </div>
        <div class="col-md-4 col-sm-6">
          <p class="text-weight-thin">Distribuições</p>
          <p class="text-method">
            <q-icon name="fa-solid fa-chevron-up" color="green" /> {{ distri }}
          </p>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardMethod",
  props: {
    name: { type: String },
    title: { type: String },
    price: { type: String },
    current: { type: String },
    distri: { type: String },
    className: { type: String },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.text-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.btn-red {
  border-bottom: solid 5px rgba(255, 0, 0, 0.72);
}
.btn-blue {
  border-bottom: solid 5px #0085ff;
}

.btn-white {
  border-bottom: solid 5px #f1f3fb;
}
.control-content {
  justify-content: space-between;
}

@media (max-width: 768px) {
  .control-content {
    justify-content: center;
  }
  .control-margin {
    margin-left: 2rem;
  }
}
</style>
