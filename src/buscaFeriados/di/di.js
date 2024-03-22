import axiosInstance from "./axios";

import buscaFeriadoRepository from "../data/repository/buscaFeriadoRepository";
import buscaFeriadoUseCase from "../domain/usecase/buscaFeriadoUseCase";
import feriadoController from "../controller/feriadoController";

const instance = axiosInstance;

const buscaFeriadoRepositoryImpl = buscaFeriadoRepository(instance);
const buscaFeriadoUseCaseImpl = buscaFeriadoUseCase(buscaFeriadoRepositoryImpl);

const feriadoControllerImpl = feriadoController(buscaFeriadoUseCaseImpl);

export { feriadoControllerImpl };