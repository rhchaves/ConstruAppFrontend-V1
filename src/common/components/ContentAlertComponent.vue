<template>
  <div
    class="row justify-center q-gutter-md"
    style="width: 2000px; height: 300px"
  >
    <q-card
      class="q-ma-xl bg-grey-2"
      style="min-width:350px; max-width: 800px; max-height: 200px"
    >
      <q-card-section>
        <h5 class="q-ma-xl"> {{ content }} </h5>
      </q-card-section>
    </q-card>
  </div>
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
    content: {
      type: String,
      required: false,
      default: 'Não encontramos nenhum resultado para essa busca.',
    },
  },
};
</script>
