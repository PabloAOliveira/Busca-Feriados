import { ref } from "vue";

const feriadoController = (buscaFeriadoUseCase) => () => {
  const feriados = ref([]);
  const textoFeriado = ref("");
  const formRef = ref(null);

  const validaFormulario = async () => {
    const { valid } = await formRef.value.validate();
    return valid;
  };

  const mostraFeriado = async (event) => {
    try {
      event.preventDefault()
      const formularioValido = await validaFormulario();
      if (!formularioValido) return;

      feriados.value = await buscaFeriadoUseCase(textoFeriado.value);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    feriados,
    textoFeriado,
    mostraFeriado,
    formRef,
  };
};

export default feriadoController;
