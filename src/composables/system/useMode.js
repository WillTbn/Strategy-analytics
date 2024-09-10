import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import { ref } from 'vue'
export default function useMode() {

  const clientNavList = [
    {
      toName: { name: "inicio" },
      name: "Inicio",
      inative: false
    },
    {
      // toName: { name: "perfomance" },
      toName: { name: "inicio" },
      name: "Perfomance",
      inative: true
    },
    {
      // toName: { name: "graphic" },
      toName: { name: "inicio" },
      name: "Graficos",
      inative: true
    },
    {
      // toName: { name: "calendar" },
      toName: { name: "inicio" },
      name: "Calendário",
      inative: true
    },
    {
      // toName: { name: "report" },
      toName: { name: "inicio" },
      name: "Relatório",
      inative: true
    },
    {
      // toName: { name: "loan" },
      toName: { name: "inicio" },
      name: "Emprestimo",
      inative: true
    },
  ]


  return {
    // isMenuList,
    clientNavList,
  };
}
