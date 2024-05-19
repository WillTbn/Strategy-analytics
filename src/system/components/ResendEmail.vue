<template>
  <div class="resendEmail">
    <q-btn
      v-if="statusStopWatch"
      color="green"
      label="Resend email 2"
      @click="resend()"
      :disabled="loading"
    />
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
import { defineComponent, ref } from "vue";
import useStopwatch from "../../composables/system/useStopwatch";
import useNotify from "../../composables/useNotify";
import useToken from "../../composables/system/Requests/useToken";

export default defineComponent({
  props: {
    token: { type: Number },
  },
  setup(props) {
    const { errorNotify, successNotify } = useNotify();

    const { loading, resendToken } = useToken();
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
      await resendToken(props.token);
    };
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
