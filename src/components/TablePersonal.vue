<template>
  <div class="TablePersonal">
    <!-- <q-scroll-area> -->
    <div
      class="row q-py-lg q-my-lg no-wrap before-class"
      v-for="(row, i) in rows"
      :key="row[i]"
    >
      <!-- :class="{ 'border-table': i != 0 }" -->
      <div
        class="text-control col-md-4 col-xs-4 q-pr-md-xl self-end"
        :class="{ 'border-table': i != 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.name }}
        </span>
      </div>

      <div
        class="text-control col-md-2 col-xs-4 self-end"
        :class="{ 'border-table': i != 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.acumulado }}
        </span>
      </div>
      <div
        class="text-control col-md-2 col-xs-4 self-end"
        :class="{ 'border-table': i != 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.ano }}
        </span>
      </div>
      <div
        class="text-control col-md-2 col-xs-4 self-end"
        :class="{ 'border-table': i != 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.calendario }}
        </span>
      </div>
      <div
        class="text-control col-md-2 col-xs-4 self-end"
        :class="{ 'border-table': i != 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.five }}
        </span>
      </div>
      <div class="text-control col-md-2 col-xs-4 self-end">
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.six }}
        </span>
      </div>
      <div class="text-control col-md-2 col-xs-4 self-end">
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.seven }}
        </span>
      </div>
      <div class="text-control col-md-2 col-xs-4 self-end">
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.eight }}
        </span>
      </div>
      <div class="text-control col-md-2 col-xs-4 self-end">
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.nine }}
        </span>
      </div>
      <div class="text-control col-md-2 col-xs-4 self-end">
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.ten }}
        </span>
      </div>
    </div>
    <!-- </q-scroll-area> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TablePersonal",
  props: { rows: { type: Array } },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */

.text-header {
  font-size: 15px;

  font-weight: 400;
  line-height: 102.945%; /* 46.325px */
}
.text-header-b {
  font-size: 22px;
  font-style: normal;
  text-align: start;
  font-weight: 400;
  line-height: 102.945%; /* 46.325px */
}
.border-table {
  border-bottom: solid 2px #fffffa12;
}
.control {
  width: 503px;
  height: 51px;
  flex-shrink: 0;
}
.border-0 {
  border-bottom: solid 1px;
}
.before-class::after {
  content: "";
  border-bottom: solid 3px #ddd;
}
@media (max-width: 768px) {
  /* .text-header {
    font-size: 10px !important;
  } */
  /* .text-control {
    font-size: 5px;
  } */
  .control-span {
    display: block;
    width: 70px;
  }
}
.TablePersonal {
  min-height: 350px;
}
</style>
