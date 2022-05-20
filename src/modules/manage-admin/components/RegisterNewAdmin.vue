<template>
  <div>
    <h3>Cadastrar no admin</h3>

    <q-btn label="Confirm" color="primary" @click="confirm = true" />

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'RegisterNewAdmin',

  data() {
    return {
      confirm: true,
    };
  },
};
</script>
