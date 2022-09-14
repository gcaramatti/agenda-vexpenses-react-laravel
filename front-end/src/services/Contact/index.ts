import api from "../api";
import HomeProps, { ContactAddResponse } from "../../interface/Home";

/**
 * Recupera a listagem de contatos para a home
 */
export const contactListRequest = async (): Promise<HomeProps> => {
  const response = await api.get("/home");
  return response.data;
};

/**
 * Deleta um contato
 */
export const deleteContactRequest = async (id: number): Promise<void> => {
  if (window.confirm(`Você realmente quer apagar o contato ${id}?`)) {
    await api.delete(`/apagar-contato/${id}`);
    alert("Contato apagado com sucesso!");
  }
};

/**
 * Adiciona um novo contato
 */
export const addNewContactRequest = async (
  data: ContactAddResponse
): Promise<void> => {
  return await api.post(`/novo-contato`, data);
};
