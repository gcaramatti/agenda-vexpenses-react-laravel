import { CategoriesProps } from "../Categories";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default interface GetContactByIdProps {
  addressList: AddressListProps[];
  categories: CategoriesProps[];
  phoneList: PhoneListProps[];
  userCategory: ContactDataProps[];
}
export interface HomeProps {
  categories: CategoriesProps[];
  contactList: ContactListProps[];
}
export interface ContactDataProps {
  cat_name: string;
  category_id: number;
  contact_id: number;
  id: number;
  name: string;
}

export interface AddressListProps {
  address: string;
  city: string;
  complement: string;
  contact_id: number;
  district: string;
  id: number;
  state: string;
  zip_code: string;
}

interface ContactListProps {
  id: number;
  contact_id: number;
  name: string;
  category_id: string;
  cellphone: string;
  is_main_phone: boolean;
  cat_name: string;
}

export interface PhoneListProps {
  cellphone: string;
  contact_id: number;
  id: number;
  is_main_phone: boolean;
}

export interface PhoneResponse {
  cellphone: string;
  contactId: number;
}

export interface PhoneFormResponse {
  phoneFormSubmit?: UseFormRegister<FieldValues>;
}

export interface ContactDataResponse {
  name: string;
  category_id: string;
}

export interface AddressResponse {
  address: string;
  city: string;
  complement: string;
  contactId: number;
  district: string;
  state: string;
  zip_code: string;
}

export interface AddressFormResponse {
  addressFormSubmit?: UseFormRegister<FieldValues>;
}

export interface ApiAddressResponse {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}
