<template>
  <div class="resendauthEmail">
    <div class="" v-if="statusStopWatch">
      <p>Caso não tenha recebido, nem na caixa de spam</p>
      <q-btn
        dense
        label="reenviar"
        color="primary"
        @click="resend()"
        :disabled="loading"
        icon="mail"
        icon-right="fa-regular fa-paper-plane"
      >
        <q-tooltip class="bg-indigo" :offset="[10, 10]">
          reenviar e-mail
        </q-tooltip>
      </q-btn>
    </div>
    <div class="" v-else>
      <span class="text-overline">Tempo para reenvio</span>
      <br />
      <span class="text-weight-bolder">
        {{ hourNow }}:{{ minuteNow }}:{{ secondNow }}
      </span>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import useStopwatch from "../../composables/system/useStopwatch";
import useNotify from "../../composables/useNotify";
import useToken from "../../composables/system/Requests/useToken";

export default defineComponent({
  name: "resendauthEmail",
  props: {
    email: { type: String },
  },
  setup(props) {
    const { errorNotify, successNotify } = useNotify();

    const { loading, verifyEmail } = useToken();
    const { getDate } = useStopwatch();
    const hourNow = ref(0);
    const minuteNow = ref(0);
    const secondNow = ref(0);
    const statusStopWatch = ref(true);
    const showTime = () => {
      let now = new Date();
      var tempLast = new Date(now.setMinutes(now.getMinutes() + 1));

      let timer = setInterval(() => {
        let { dia, hour, minutes, seconds, status } = getDate(tempLast);
        hourNow.value = hour;
        secondNow.value = seconds;
        minuteNow.value = minutes;
        statusStopWatch.value = status;
        if (getDate(tempLast).status) {
          clearInterval(timer);
        }
      }, 1000);
    };

    const resend = async () => {
      showTime();
      await verifyEmail(props.email);
    };
    onMounted(() => {
      showTime();
    });
    return {
      loading,
      resend,
      hourNow,
      secondNow,
      minuteNow,
      statusStopWatch,
    };
  },
});
</script>
<style lang=""></style>
