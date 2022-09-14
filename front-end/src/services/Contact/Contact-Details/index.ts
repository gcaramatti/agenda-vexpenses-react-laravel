import axios from "axios";
import GetContactByIdProps, {
  AddressFormResponse,
  ApiAddressResponse,
  ContactDataResponse,
  PhoneFormResponse,
} from "../../../interface/Contacts";
import api from "../../api";

/**
 * Faz a pesquisa pelo CEP
 */
export const getAddressRequest = async (
  zip_code: string
): Promise<ApiAddressResponse> => {
  let response = await axios.get(`https://viacep.com.br/ws/${zip_code}/json/`);
  return response.data;
};

/**
 * Faz a pesquisa pelo CEP
 */
export const getContactByIdRequest = async (
  id: number
): Promise<GetContactByIdProps> => {
  let response = await api.get(`/contato/${id}`);
  return response.data;
};

/**
 * Salva telefone de um contato específico
 */
export const storePhoneRequest = async (
  data: PhoneFormResponse
): Promise<void> => {
  return await api.post("/adicionar-telefone", data);
};

/**
 * Salva endereço de um contato específico
 */
export const storeAddressRequest = async (data: AddressFormResponse) => {
  return await api.post("/adicionar-endereco", data);
};

/**
 * Apaga telefone de um contato específico
 */
export const destroyPhoneRequest = async (id: number): Promise<void> => {
  if (window.confirm(`Você realmente quer apagar o telefone ${id}?`)) {
    return await api.delete(`/apagar-telefone/${id}`);
  }
};

/**
 * Apaga endereço de um contato específico
 */
export const destroyAddressRequest = async (id: number): Promise<void> => {
  if (window.confirm(`Você realmente quer apagar o endereço ${id}?`)) {
    return await api.delete(`/apagar-endereco/${id}`);
  }
};

/**
 *  Atualiza dados de um contato específico
 */
export const updateContactRequest = async (
  data: ContactDataResponse,
  id: number
): Promise<void> => {
  return await api.put(`/editar-contato/${id}`, data);
};
