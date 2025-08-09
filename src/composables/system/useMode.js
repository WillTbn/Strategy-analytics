import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import { ref } from 'vue'
export default function useMode() {

  const clientNavList = [
    {
      toName: { name: "inicio" },
      name: "Home",
      inative: false
    },
    {
      // toName: { name: "perfomance" },
      toName: { name: "inicio" },
      name: "Contratos",
      inative: true
    },
    {
      // toName: { name: "graphic" },
      toName: { name: "inicio" },
      name: "Comunicação",
      inative: true
    },
    {
      // toName: { name: "calendar" },
      toName: { name: "inicio" },
      name: "Empréstimos",
      inative: true
    }
  ]


  return {
    // isMenuList,
    clientNavList,
  };
}
