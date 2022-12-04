<template>
  <q-page class="row justify-center items-center">

    <div class="row justify-center">
      <q-card
        class="bg-grey-2 column justify-center"
        style="min-width:350px; min-height: 200px; max-width: 800px"
      >
        <q-card-section>
          <h5 class="text-center"> {{ title }} </h5>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'ContentAlertComponent',

  props: {
    type: {
      type: String,
      required: false,
      default: 'danger',
    },
    title: {
      type: String,
      required: false,
      default: 'Não encontramos nenhum resultado para essa busca.',
    },
  },
};
</script>
