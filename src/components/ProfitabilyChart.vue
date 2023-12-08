<template>
  <div class="ProfitabilyChart">
    <p class="text-h5" style="width: 271px">Crescimento hipotético de 10.000</p>
    <title-subtitle
      :upText="false"
      textTop="Desde o inicio"
      textTitle="48,7k"
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="604"
      height="300"
      viewBox="0 0 604 300"
      class="control-chat"
    >
      <g style="mix-blend-mode: multiply">
        <path
          d="M23.5 195C17 198 4.01064 207.724 0 209V300H603.98V170.486V37.4235C587.867 41.5817 574.047 43.851 570.18 35.7688C566.313 27.6866 555.571 27.6866 544.829 29.3881C534.087 31.0895 529.361 19.3918 528.502 11.3096C527.642 3.22744 526.783 0.0371094 514.322 0.0371094C501.862 0.0371086 502.721 12.7984 497.995 29.3881C493.268 45.9778 495.846 46.4032 481.667 47.0413L481.667 47.0413C467.488 47.6793 467.488 47.6793 459.754 60.2279C452.019 72.7765 449.012 72.3512 435.262 72.3512C421.512 72.3512 416.356 82.3475 411.63 92.7694C406.96 103.067 396.835 100.282 381.672 96.1106L381.123 95.9596C365.655 91.7058 362.217 92.7694 352.335 77.6684C342.452 62.5674 329.992 69.5863 324.406 78.9446C318.82 88.3029 315.812 89.579 306.359 92.7694C296.907 95.9597 287.454 96.8104 284.016 102.553C280.579 108.296 268.978 112.975 259.095 109.572C249.213 106.169 241.908 107.019 236.322 112.975C236.322 145.5 212.945 104.362 206.5 105C200.055 105.638 202.375 133.545 195.5 139.5C188.625 145.455 182.156 110.848 177 109.572C171.844 108.295 171 127.3 161.5 177.5C158.063 179.414 144.894 169.134 133.5 158.5C122.106 147.866 114 164 109.5 184.5C94.5 187 96.9529 171.552 87.5 169C83.5 167.92 71.5 173.5 62 173.5C54.6955 176.69 52.5 180.5 43.5 184.5C39 190.5 30.3747 195.638 23.5 195Z"
          fill="url(#paint0_linear_1902_4910)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1902_4910"
          x1="493.268"
          y1="0.0371094"
          x2="493.268"
          y2="221.943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5DFF63" />
          <stop offset="0.46679" stop-color="#CAFFD0" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSubtitle from "./TitleSubtitle.vue";

export default defineComponent({
  name: "ProfitabilyChart",
  components: { TitleSubtitle },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.control-chat {
  width: 603.98px;
  height: 299.963px;
  flex-shrink: 0;
  fill: linear-gradient(180deg, #5dff63 0%, #caffd0 34.53%, #fff 73.98%);

  mix-blend-mode: multiply;
}
</style>
