<template>
  <div class="AvatarNew">
    <q-inner-loading
      :showing="loading"
      label="Please wait..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
    <q-avatar
      size="12rem"
      @mouseover="setUpload()"
      @mouseleave="hoverImage = false"
      class="avatar-control q-ma-sm"
      v-if="data.account"
      square
    >
      <img
        :src="data.account.avatar"
        :class="{ 'avatar-control-h': hoverImage }"
      />
      <q-icon
        name="fa-solid fa-pen absolute"
        v-if="hoverImage"
        color="primary"
        @click.prevent="openFile()"
      />
      <input
        type="file"
        class="invisible"
        id="image"
        accept="image/*"
        ref="avatar"
        name="avatar"
        @change="getImage($event)"
        :disabled="loading"
      />
    </q-avatar>
    <q-btn
      label="upload"
      color="indigo-14"
      @click="upload"
      v-if="buttonSubmit"
      :disabled="loading"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "../../../stores/user";
import { storeToRefs } from "pinia";
import useLogin from "../../../composables/useLogin";
import useAccount from "../../../composables/system/Requests/useAccount";
export default defineComponent({
  name: "AvatarNew",
  setup() {
    const hoverImage = ref(false);
    const setUpload = () => {
      hoverImage.value = true;
    };
    const form = ref({ name: "" });
    const setImage = ref(true);
    const useStore = useUserStore();
    const { data } = storeToRefs(useStore);
    const selectFile = ref("");
    const avatar = ref(null);
    const { UploadAvatar } = useLogin();
    const { loading, sendAvatar, buttonSubmit } = useAccount();
    const openFile = () => {
      avatar.value.click();
    };
    const getImage = (e) => {
      let image = e.target.files[0];
      console.log(" .....", image);
      selectFile.value = image;
      form.value.name = selectFile.value.name;
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        UploadAvatar(e.target.result);
        setImage.value = false;
        buttonSubmit.value = true;
      };
    };
    const upload = async () => {
      loading.value = true;
      let formData = new FormData();
      formData.append("avatar", selectFile.value, selectFile.value.name);
      // setTimeout(() => {
      //   loading.value = false;
      // }, 1500);
      await sendAvatar(formData);
      // const url = `${baseApiUrl}/${this.user.type}/avatar`;
      // const auth = JSON.parse(localStorage.getItem(userKey));
      // axios.defaults.headers.common["Authorization"] = `bearer ${auth.token}`;
      // axios.defaults.headers.common["Accept"] = "form-data";
      // axios
      //   .post(url, formData)
      //   .then((res) => {
      //     this.setImage = true;
      //     showSuccess(res.data.success);
      //   })
      //   .catch((e) => showError(e));
      console.log(formData);
    };

    return {
      avatar,
      data,
      selectFile,
      setImage,
      form,
      hoverImage,
      openFile,
      getImage,
      upload,
      setUpload,
      buttonSubmit,
      loading,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */

.avatar-control {
  cursor: pointer;
}
.rounded:hover {
  opacity: 0.2;
}
.edit-avatar {
  cursor: pointer;
  margin-left: -57px;
  margin-right: 47px;
  opacity: 0;
}
.avatar-control-h {
  opacity: 0.2;
}
.custom-file {
  width: 70%;
  height: 2rem;
}
.custom-file-label {
  border: 1px solid #4855bb !important;
  border-radius: 0.5rem !important;
}
</style>
