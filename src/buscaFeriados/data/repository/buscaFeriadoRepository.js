import Feriado from "@/buscaFeriados/domain/model/feriado";

const buscaFeriadoRepository = (axios) => async (ano) => {
    try {
      const response = await axios.get(`/feriados/v1/${ano}`);
      
      return response?.data?.map(item => new Feriado(item) ) ?? [];
    } catch (error) {
      throw error;
    }
  };
  
  export default buscaFeriadoRepository;