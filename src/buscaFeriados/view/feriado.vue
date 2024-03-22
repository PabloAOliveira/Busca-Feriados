<template>
  <dialog-form :controller="controller" />
</template>

<script setup>
import { feriadoControllerImpl } from "../di/di";
import DialogForm from "../components/dialog-form.vue";

const controller = feriadoControllerImpl();
console.log(controller);
</script>
