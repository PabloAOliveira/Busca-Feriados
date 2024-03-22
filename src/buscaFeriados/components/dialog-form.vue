<template>
  <v-form :ref="controller.formRef" @submit="controller.mostraFeriado">
    <v-container>
      <v-row justify="center" class="fill-height my-15" align="center">
        <v-col cols="12" sm="7" md="6" lg="3">
          <v-text-field
            v-model="controller.textoFeriado.value"
            label="Label"
            :rules="[
              (v) => !!v || 'Preencha o Campo',
              (v) => (!!v && v.length <= 4) || 'Data Invalida',
            ]"
          >
          </v-text-field>
          <v-btn type="submit"> Button </v-btn>
        </v-col>
      </v-row>

      <v-row justify="center" class="fill-height my-15" align="center">
        <v-col cols="12" sm="7" md="6" lg="3">
          <template v-if="controller.feriados.value.length">
            <v-card
              v-for="feriado in controller.feriados.value"
              :key="feriado.name"
              class="mx-auto"
              max-width="344"
              hover
            >
              <v-card-item>
                <v-card-title>{{ feriado.name }}</v-card-title>
                <v-card-subtitle>{{ feriado.date }}</v-card-subtitle>
              </v-card-item>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
