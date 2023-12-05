<template>
  <transition-group name="slide" appear>
    <q-form
      @submit="onSubmit"
      ref="simulatorRef"
      class="col-md-4 col-sm-8 q-mx-lg control-trans"
      key="1"
    >
      <div class="q-mt-lg">
        <span class="text-h7">Quanto deseja investir pra <b>começar</b>?</span>
        <q-input
          class="input-simulator"
          input-class="text-white"
          color="white"
          bg-
          bg-color="secondary"
          v-model="simulator.data.value"
          lazy-rules
          dense
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Por favor, precisamos de um valor',
          ]"
        />
      </div>

      <add-number
        @increase-data="addYear($event)"
        @decrease-data="decYear($event)"
        :number="simulator.data.year"
        sub="Anos"
      >
        <span class="text-h7"> Quanto <b>tempo</b> planeja investir? </span>
      </add-number>
      <div class="q-my-lg">
        <span class="q-mt-lg text-h7">Como deseja receber?</span>
        <q-select
          class="input-simulator"
          transition-show="flip-up"
          transition-hide="flip-down"
          input-class="white"
          bg-color="secondary"
          dense
          v-model="simulator.data.toReceiver"
          :options="options"
        />
      </div>
      <add-number
        @increase-data="addPercentage($event)"
        @decrease-data="decPercentage($event)"
        :number="simulator.data.percentage"
        sub="%"
        col="col-2"
      >
        <span class="text-h7"> Qual <b>%</b> de retorno mensal deseja? </span>
      </add-number>

      <q-btn
        @click.prevent="stepSend"
        label="Realizar Simulação"
        class="q-mt-lg text-weight-bold"
        v-if="!chart"
        color="secondary"
      ></q-btn>
      <div class="text-center" v-else>
        <!-- <investment-description
          :year="simulator.data.year"
          :percentage="simulator.data.perceFinal"
        /> -->
        <animater-interger
          :year="simulator.data.year"
          :percentage="simulator.data.perceFinal"
        />
        <q-btn
          type="submit"
          label="Invistar agora"
          color="secondary"
          class="q-mt-lg text-weight-bold"
          to="/contact"
        ></q-btn>
      </div>
      <!-- <q-btn label="cancel" @click="chart = false" /> -->
    </q-form>
    <chart-simulator-new
      v-if="chart"
      key="2"
      class="col-md-6 col-5 col-sm-12"
      :start="aniStart"
    />
    <!-- <chart-simulator v-if="chart" key="2" class="col-7"></chart-simulator> -->
  </transition-group>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import AddNumber from "../components/addNumber.vue";
// import ChartSimulator from "../components/ChartSimulator.vue";
// import InvestmentDescription from "../components/InvestmentDescription.vue";

import { useSimulatorStore } from "../stores/simulator";
import AnimaterInterger from "../components/AnimaterInterger.vue";
import ChartSimulatorNew from "../components/ChartSimulatorNew.vue";

export default defineComponent({
  name: "SimuladorLayout",
  components: {
    AddNumber,
    // ChartSimulator,
    ChartSimulatorNew,
    AnimaterInterger,
    // InvestmentDescription,
  },
  setup() {
    const aniStart = ref(true);
    const simulator = useSimulatorStore();
    const simulatorRef = ref(null);
    const increaseYear = () => {
      simulator.value.year + 1;
    };
    const intervalId = ref();
    const reiniciar = () => {
      simulator.data.perceFinal = 0;
      intervalId.value = setInterval(contarEExibir, 500);
    };
    const stepSend = () => {
      simulatorRef.value.validate().then((success) => {
        if (success) {
          chart.value = true;

          // intervalId();
          intervalId.value = setInterval(contarEExibir, 500);
        } else {
          console.log("TEM ALGO FALTANDO");
        }
      });
    };

    const onSubmit = () => {
      console.log("OLA SUBMIT ->>>>>");
      aniStart.value = true;
      chart.value = true;
    };
    const contarEExibir = () => {
      if (simulator.data.perceFinal >= 100) {
        clearInterval(intervalId.value); // Parar a contagem quando atingir 100
      } else {
        simulator.data.perceFinal = simulator.data.perceFinal + 10;
      }
    };
    const chart = ref(false);
    const cancelSubmit = () => {
      chart.value = false;
    };
    const options = [
      "Receber retornos mensal",
      "Receber retornos Trimestral",
      "Receber retornos Semestral",
      "Receber retornos Anual",
    ];
    return {
      chart,
      simulator,
      options,
      simulatorRef,
      aniStart,
      onSubmit,
      stepSend,
      increaseYear,
      cancelSubmit,
      reiniciar,
      addYear: simulator.incrementYear,
      decYear: simulator.decreaseYear,
      addPercentage: simulator.incrementPercentage,
      decPercentage: simulator.decreasePercentage,
    };
  },
});
</script>
<style scoped>
.input-simulator {
  max-width: 400px;
}

@keyframes slide-in {
  from {
    transform: translateX(1240px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(240px);
  }
}
.slide-enter-active {
  animation: slide-in 4s ease;
}
.slide-leave-active {
  position: absolute;
  animation: slide-out 4s ease;
}
.control-trans {
  transition: all 4s ease;
}
.slide-move {
  transition: transform 3s;
}
</style>
