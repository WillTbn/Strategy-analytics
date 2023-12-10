<template>
  <div class="text-white control">
    <span class="text-title">{{ title }}</span
    ><br />
    <span>{{ description }}</span
    ><br />
    <span>{{ description2 }}</span>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleDescription",
  props: {
    title: { type: String, default: "Titulo" },
    description: { type: String },
    description2: { type: String },
  },
});
</script>
<style scoped>
.control {
  max-width: 1002px;
  height: 194px;
  flex-shrink: 0;
}
.text-title {
  color: #fff;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 54px */
}
@media (max-width: 768px) {
  .text-title {
    font-size: 28px !important;
  }
}
/* @media (max-width: 768px){
    footer {
        padding-top: 15rem;
    }
    .finaly{
        padding-top:5rem;
    }
} */
</style>
