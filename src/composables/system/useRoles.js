import { ref } from 'vue'

export default function useRoles() {
  const personRef = ref(null)
  const passwordRef = ref(null);
  const passwordConfirmRef = ref(null);
  const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const stringSerialize = (string) => {
    return string.replace(
      /[^0-9]/g,
      ""
    );
  }
  const fiedValidate = ref([
    { id: 1, name: "Contém letra maiuscula", status: false },
    { id: 2, name: "Contém letra minuscula", status: false },
    { id: 3, name: "Contém caracters Especiais", status: false },
    { id: 4, name: "Contém números", status: false },
    { id: 5, name: "Contém tamanho superior a 8", status: false },
  ]);

  const patternsRules = {
    length20: (val) => val.length < 20 || 'Tem que ser maior que 20 caracetres',
  }
  const verifyExist = (value) => {
    return value != null && value != undefined && value != ""
  }

  const personRule =
    [
      (val) => !!val || "Campo é obrigatorio.",
      (val) => val.length == 14 || "Campo incompleto",
    ];
  const nameRule =
    [
      (val) => !!val || "Campo é obrigatorio.",
      (val) => val.length >= 3 || "Campo não tem mímino",
      (val) => !/\d/.test(val) || "Adicione um Nome válido!",
    ];
  const emailRule = [
    (val) => !!val || "Campo é obrigatorio.",
    (val) => emailRe.test(val) || "Campo invalido!"
  ]
  const requiredRole = [
    (val) => !!val || "Campo é obrigatorio.",
  ]
  const phoneRole = [
    (val) => !!val || "Campo é obrigatorio.",
    (val) => val.length == 16 || "Campo incompleto",
  ]
  const zipCodeRule = [
    (val) => !!val || "Campo é obrigatorio.",
    (val) => val.length == 9 || "Campo incompleto",
  ]
  const lengthRule = () => {

  }
  const validateID = (e) => {
    if (verifyExist(e)) {
      if (patternsRules['length20'](e)) {
        return false;
      }
    }
    return true;
  };
  return {
    personRef,
    passwordRef,
    passwordConfirmRef,
    personRule,
    fiedValidate, requiredRole,
    nameRule, emailRule, phoneRole, zipCodeRule, stringSerialize,
    validateID
  }
}
