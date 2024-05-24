import { ref } from 'vue'

export default function useRoles() {
  const personRef = ref(null)
  const passwordRef = ref(null);
  const passwordConfirmRef = ref(null);
  const fiedValidate = ref([
    { id: 1, name: "Contém letra maiuscula", status: false },
    { id: 2, name: "Contém letra minuscula", status: false },
    { id: 3, name: "Contém caracters Especiais", status: false },
    { id: 4, name: "Contém números", status: false },
    { id: 5, name: "Contém tamanho superior a 8", status: false },
  ]);

  const personRule =
    [
      (val) => !!val || "Campo é obrigatorio.",
      (val) => val.length == 14 || "Campo incompleto",
    ];

  return {
    personRef,
    passwordRef,
    passwordConfirmRef,
    personRule,
    fiedValidate,
  }
}
