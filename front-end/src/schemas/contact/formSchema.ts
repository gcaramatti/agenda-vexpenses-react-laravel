import * as yup from "yup";

export const NewAddressFormSchema = yup.object().shape({
  zip_code: yup.string().required("O CEP deve estar preenchido"),
  state: yup.string().required("Campo estado obrigatório"),
  address: yup.string().required("Campo endereço obrigatório"),
  district: yup.string().required("Campo bairro obrigatório"),
  city: yup.string().required("Campo cidade obrigatório"),
  complement: yup.string().required("Campo complemento obrigatório"),
});

export const NewPhoneFormSchema = yup.object().shape({
  cellphone: yup.string().required("Campo telefone obrigatório"),
});

export const EditContactSchema = yup.object().shape({
  name: yup.string().required("O nome não pode ser vazio"),
});

export const NewContactSchema = yup.object().shape({
  name: yup.string().required("O nome não pode ser vazio"),
  cellphone: yup.string().required("Campo telefone obrigatório"),
  zip_code: yup.string().required("O CEP deve estar preenchido"),
  complement: yup.string().required("Campo complemento obrigatório"),
});
