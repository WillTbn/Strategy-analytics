<template>
  <q-card class="StatuschangeLayout">
    <q-card-section>
      <header-card titleCard="Controle de deposito" />
    </q-card-section>
    <q-card-section>
      <div class="row justify-center">
        <div class="col-12">
          <span class="text-bold">Dados do Usuário</span> <br />
        </div>
        <div class="col-12">
          <p>
            E-mail:
            <br />
            {{ deposit.email }}
          </p>
        </div>
        <div class="col-12">
          <p>
            Cpf:
            <br />
            {{ deposit.person }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span class="text-bold"> Dados do deposito </span>
        </div>
        <div class="col-6">
          <p>
            Valor:
            <br />
            {{ deposit.value }}
          </p>
        </div>
        <div class="col-6">
          <p>
            ID interno da transação:
            <br />
            {{ deposit.transaction_code }}
          </p>
        </div>
      </div>
      <div class="" v-if="deposit.image || deposit.transaction_id">
        <div class="col-12">
          <span class="text-bold">
            Dados do pagamento enviado pelo usuário
          </span>
        </div>
        <div class="col-6">
          <p>
            ID da transação:
            <q-badge color="warning" v-if="deposit.transaction_id == 'null'"
              >não informado</q-badge
            >
            <span v-else>
              <br />
              {{ deposit.transaction_id }}
            </span>
          </p>
        </div>
        <div class="col-6">
          <q-btn
            v-if="deposit.image"
            :href="deposit.image"
            target="_blank"
            label="Visualizar comprovante"
            color="primary"
          />
        </div>
      </div>
      <div class="row justify-center" v-else>
        <p class="text-weight-bolder text-negative text-caption">
          Cliente não envio comprovante ou ID da transação.
        </p>
      </div>
      <q-card-actions align="between" class="col-12 q-mt-xl">
        <q-btn
          flat
          label="recusar"
          color="red-14"
          @click.prevent="confirmRecuse = true"
        />
        <!-- v-close-popup  -->
        <q-btn
          label="confirmar"
          color="positive"
          @click="confirmPositive = true"
        />
      </q-card-actions>
    </q-card-section>
    <q-dialog
      v-model="confirmPositive"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6 text-bold">Tem certeza?</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Ao fazer isso você irá adicionar o valor: R${{ deposit.value }} na
          carteira de investimento do cliente.
        </q-card-section>
        <q-card-section class="q-pt-none">
          Ele irá ficar com o valor total na carteira de investimento

          {{ someValues(deposit.value, deposit.current) }}
        </q-card-section>

        <q-card-actions align="between">
          <q-btn flat class="text-negative" label="cancelar" v-close-popup />
          <q-btn
            flat
            label="OK"
            v-close-popup
            @click.prevent="setStatusConfirm"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="confirmRecuse"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-grey-9 text-white" style="width: 300px">
        <q-form @submit.prevent.stop="setStatusRecused">
          <q-card-section>
            <div class="text-h6 text-bold">
              Você tem certeza que irá recusa?
            </div>
          </q-card-section>
          <q-card-section>
            <span> Digite a mensagem: </span><br />
            <q-input
              bg-color="primary"
              standout
              v-model.lazy="note"
              :rules="[(val) => !!val || 'Campo é obrigatorio.']"
              ref="noteRef"
              type="textarea"
              hint="Essa mensagem será exibida para o cliente."
            />
          </q-card-section>
          <q-card-actions align="between">
            <q-btn flat label="cancelar" v-close-popup />
            <q-btn class="bg-warning" flat label="confirma" type="submit" />
            <!-- @click.prevent="setStatusConfirm" -->
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-card>
</template>
<!-- Não foi identificado o Id da transação que você nos enviou, por isso não podemos aprovar. 

Mas isso não é tudo, você pode nos enviar novamente ou melhor nos envie o comprovante, nosso site também recebe upload de pdf's. -->
<script>
import { defineComponent, ref } from "vue";
import HeaderCard from "src/system/components/cardDialog/HeaderCard.vue";
import useExtractHelpers from "src/composables/system/Helpers/useExtractHelpers";
import useDeposit from "src/composables/system/Requests/useDeposit";
import useNotify from "src/composables/useNotify";

export default defineComponent({
  name: "StatuschangeLayout",
  components: { HeaderCard },
  props: {
    deposit: { type: Object },
  },
  setup(props) {
    const confirmPositive = ref(false);
    const confirmRecuse = ref(false);
    const note = ref();
    const noteRef = ref(null);
    const { someValues } = useExtractHelpers();
    const { setConfirmDeposit, setRecusedDeposit } = useDeposit();
    const { infoNotify } = useNotify();
    const setStatusConfirm = async () => {
      await setConfirmDeposit(props.deposit);
    };
    const setStatusRecused = async () => {
      noteRef.value.validate();
      if (noteRef.value.hasError) {
        infoNotify("Digite a mensagem que deve ser exibida para o cliente.");
      }
      await setRecusedDeposit(props.deposit, note.value);
    };
    return {
      note,
      noteRef,
      confirmPositive,
      confirmRecuse,
      someValues,
      setStatusConfirm,
      setRecusedDeposit,
      setStatusRecused,
    };
  },
});
</script>
<style lang=""></style>
