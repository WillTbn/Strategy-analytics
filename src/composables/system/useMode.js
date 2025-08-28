import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import { ref } from 'vue'
export default function useMode() {

  const clientNavList = [
    {
      toName: { name: "inicio" },
      name: "Home",
      inative: false,
      icon: 'IconHome'
    },
    {
      // toName: { name: "perfomance" },
      toName: { name: "contracts" },
      name: "Contratos",
      inative: false,
      icon: 'IconFileDollar'
    },
    {
      // toName: { name: "graphic" },
      toName: { name: "inicio" },
      name: "Comunicação",
      inative: true,
      icon: "IconSpeakerphone"
    },
    {
      // toName: { name: "calendar" },
      toName: { name: "inicio" },
      name: "Empréstimos",
      inative: true,
      icon: 'IconReceipt2'
    }
  ]


  return {
    // isMenuList,
    clientNavList,
  };
}
