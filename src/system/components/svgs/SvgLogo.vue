<template>
  <div class="SvgLogo">
    <svg
      width="45"
      height="37"
      viewBox="0 0 45 37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="LOGO">
        <mask
          id="mask0_2363_6707"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="45"
          height="37"
        >
          <rect id="Rectangle 19" width="45" height="37" fill="currentColor" />
        </mask>
        <g mask="url(#mask0_2363_6707)">
          <g id="Camada 7">
            <g id="Camada 2-2">
              <g id="Camada 5">
                <g id="Camada 4">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M15.8998 22.3453L12.0273 30.266C12.6726 30.3813 13.1493 30.4136 13.8376 30.4136C15.6153 30.4136 17.2588 30.0835 18.8206 29.0258C20.5149 27.8791 20.1506 26.2013 20.1506 26.2013C19.7626 24.4667 17.9067 23.3383 15.8998 22.3444V22.3453Z"
                      :fill="dark ? 'white' : 'dark'"
                    />
                    <path
                      id="Vector_2"
                      d="M26.0615 1.56226L18.8206 16.3713C20.5869 17.1827 22.1715 18.022 23.4647 19.0404L26.0606 13.4508L37.3048 36.55H43.552L26.0615 1.56226Z"
                      :fill="dark ? 'white' : 'dark'"
                    />
                  </g>
                </g>
              </g>
              <g id="Camada 3">
                <path
                  id="Vector_3"
                  d="M16.4098 16.0989C11.9685 14.3102 8.59123 13.3512 8.59123 10.6682C8.59123 8.24017 11.2653 6.28117 14.6189 6.28117C17.2324 6.28117 19.7134 7.54408 20.8687 9.80352L23.4928 4.43745C21.514 2.27234 18.3974 0.999817 14.5741 0.999817C8.00216 0.999817 2.81287 4.91869 2.81287 10.5407C2.81287 16.1626 7.57199 18.0159 11.8553 19.8046C16.1157 21.5296 20.9196 23.4466 20.9196 26.6196C20.9196 29.2389 17.8154 31.0922 13.7129 31.0922C10.2004 31.0922 7.16376 29.5586 5.53174 26.8756L1 29.921C3.08502 33.8818 7.63958 36.5229 13.6453 36.5229C21.0557 36.5229 26.676 32.6041 26.676 26.514C26.676 21.1042 22.1891 18.485 16.4107 16.0997L16.4098 16.0989Z"
                  :fill="dark ? 'white' : 'dark'"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SvgLogo",
  props: { dark: { type: Boolean } },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
