
import { ref } from "vue";

export default function useRefForm() {
  const nameRef = ref(null);
  const lastnameRef = ref(null);
  const emailRef = ref(null);
  const birthdayRef = ref(null);
  const personRef = ref(null);
  const genreRef = ref(null);
  const phoneRef = ref(null);
  const roleRef = ref(null);
  const telephoneRef = ref(null);
  const streetRef = ref(null);
  const numberstreetRef = ref(null);
  const districtRef = ref(null);
  const zipcodeRef = ref(null);
  const cityRef = ref(null);
  const countryRef = ref(null);
  const statestreetRef = ref(null)

  const validateInput = () => {
    nameRef.value.validate();
    lastnameRef.value.validate();
    emailRef.value.validate();
    birthdayRef.value.validate();
    personRef.value.validate();
    genreRef.value.validate();
    phoneRef.value.validate();
    roleRef.value.validate();
  };
  const validateDataInitial = () => {
    nameRef.value.validate();
    lastnameRef.value.validate();
    emailRef.value.validate();
    birthdayRef.value.validate();
    personRef.value.validate();
    genreRef.value.validate();
    phoneRef.value.validate();
  }
  const validateRegisterAddress = () => {
    zipcodeRef.value.validate()
    streetRef.value.validate()
    districtRef.value.validate()
    statestreetRef.value.validate()
    cityRef.value.validate()
    numberstreetRef.value.validate()
  }
  const validateDataAddresMsg = () => {
    return (
      zipcodeRef.value.hasError ||
      streetRef.value.hasError ||
      districtRef.value.hasError ||
      statestreetRef.value.hasError ||
      cityRef.value.hasError ||
      numberstreetRef.value.hasError
    );
  }
  const validateDataErrorMsg = () => {
    return (
      nameRef.value.hasError ||
      lastnameRef.value.hasError ||
      emailRef.value.hasError ||
      birthdayRef.value.hasError ||
      personRef.value.hasError ||
      genreRef.value.hasError ||
      phoneRef.value.hasError
    );
  }
  const validateErrorMsg = () => {
    return (
      nameRef.value.hasError ||
      lastnameRef.value.hasError ||
      emailRef.value.hasError ||
      birthdayRef.value.hasError ||
      personRef.value.hasError ||
      genreRef.value.hasError ||
      phoneRef.value.hasError ||
      roleRef.value.hasError
    );
  };
  const optionGenre = [
    { label: "Homem", value: "M", id: 0 },
    { label: "Mulher", value: "W", id: 1 },
    { label: "LGBTQIAP+", value: "L", id: 2 },
    { label: "Não informa", value: "O", id: 3 },
  ];
  const optionRole = [
    { label: "Master", value: "1", id: 1 },
    { label: "Funcionário", value: "2", id: 2 },
  ];
  const optionNot = ["accepted", "refused"];
  return {
    validateInput,
    validateErrorMsg,
    validateDataInitial,
    validateDataErrorMsg,
    validateRegisterAddress,
    validateDataAddresMsg,
    nameRef,
    lastnameRef,
    emailRef,
    birthdayRef,
    personRef,
    genreRef,
    phoneRef,
    roleRef,
    optionGenre,
    optionRole,
    optionNot,
    telephoneRef,
    streetRef,
    numberstreetRef,
    districtRef,
    zipcodeRef,
    cityRef,
    countryRef,
    statestreetRef
  }
}
