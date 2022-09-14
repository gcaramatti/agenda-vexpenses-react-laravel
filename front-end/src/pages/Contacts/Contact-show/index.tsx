import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import CardComponent from "../../../components/cards";
import { MaxWidth } from "../../../globalStyles";
import {
  getContactByIdRequest,
  storeAddressRequest,
  storePhoneRequest,
  getAddressRequest,
  destroyAddressRequest,
  destroyPhoneRequest,
  updateContactRequest,
} from "../../../services/Contact/Contact-Details";
import ModalComponent from "../../../components/Modal";
import { maskPhone, maskCEP } from "../../../services/regex";
import { TrashIcon } from "../../../components/icons";
import InputMask from "react-input-mask";
import { CategoriesProps } from "../../../interface/Categories";
import {
  ContactDataProps,
  PhoneListProps,
  AddressListProps,
  AddressFormResponse,
  PhoneFormResponse,
} from "../../../interface/Contacts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  NewAddressFormSchema,
  NewPhoneFormSchema,
  EditContactSchema,
} from "../../../schemas/contact/formSchema";
import ErrorValidation from "../../../components/inputErrors";

export default function ContactShow() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<string>("");
  const { id } = useParams<string>();
  const idNumber = parseInt(id!);

  const {
    register: registerPhoneData,
    handleSubmit: phoneFormSubmit,
    reset: resetPhoneForm,
    formState: { errors: errorsFormPhone },
  } = useForm({ resolver: yupResolver(NewPhoneFormSchema) });

  const {
    register: registerAddressData,
    handleSubmit: addressFormSubmit,
    setValue,
    reset: resetAddressForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(NewAddressFormSchema) });

  const {
    register: registerContactData,
    handleSubmit: contactFormSubmit,
    formState: { errors: errorsContactForm },
  } = useForm({ resolver: yupResolver(EditContactSchema) });

  const [contactData, setContactData] = useState<ContactDataProps[] | null>(
    null
  );
  const [allCategories, setAllCategories] = useState<CategoriesProps[] | null>(
    null
  );
  const [phoneList, setPhoneList] = useState<PhoneListProps[]>([]);
  const [addressList, setAddressList] = useState<AddressListProps[]>([]);

  async function storePhone(data: PhoneFormResponse) {
    await storePhoneRequest(data);
    getContactById();
  }

  async function storeAddress(data: AddressFormResponse) {
    await storeAddressRequest(data);

    getContactById();
  }

  async function getAddress(zip_code: string) {
    const response = await getAddressRequest(zip_code);

    setValue("city", response.localidade);
    setValue("district", response.bairro);
    setValue("address", response.logradouro);
    setValue("state", response.uf);
  }

  const getContactById = useCallback(async () => {
    let response = await getContactByIdRequest(idNumber);

    setContactData(response.userCategory);
    setPhoneList(response.phoneList);
    setAddressList(response.addressList);
    setAllCategories(response.categories);
    setName(response.userCategory[0].name);
    setCategory(String(response.userCategory[0].category_id));
  }, [idNumber]);

  async function updateContact(data: any) {
    await updateContactRequest(data, idNumber);
    getContactById();
  }

  async function destroyAddress(idAddress: number) {
    await destroyAddressRequest(idAddress);
    getContactById();
  }

  async function destroyPhone(idPhone: number) {
    await destroyPhoneRequest(idPhone);
    getContactById();
  }

  useEffect(() => {
    getContactById();
  }, [getContactById]);

  return (
    <MaxWidth>
      <div className="flex">
        <ModalComponent
          TextTitleModal="Cadastar telefone"
          TextBtnModal="Adicionar telefone"
          onSubmitFunction={phoneFormSubmit((data) => {
            storePhone(data);
            resetPhoneForm();
          })}
          edit={false}
        >
          <InputMask
            mask={"(99) 99999-9999"}
            className="input wd100"
            type="text"
            placeholder="(00) 00000-0000"
            {...registerPhoneData("cellphone")}
          />
          {errorsFormPhone?.cellphone?.message && (
            <ErrorValidation text={String(errorsFormPhone.cellphone.message)} />
          )}
          <input
            type="hidden"
            {...registerPhoneData("contactId")}
            value={idNumber}
          />
        </ModalComponent>
        <ModalComponent
          TextTitleModal="Cadastar endereço"
          TextBtnModal="Novo endereço"
          onSubmitFunction={addressFormSubmit((data) => {
            storeAddress(data);
            resetAddressForm();
          })}
          edit={false}
        >
          {" "}
          <p>Endereço</p>
          <InputMask
            mask={"99999-999"}
            className="input mr-4"
            type="text"
            placeholder="CEP"
            {...registerAddressData("zip_code")}
            onBlur={(e) => getAddress(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Estado"
            {...registerAddressData("state")}
            onBlur={(e) => setValue("state", e.target.value)}
          />
          {errors?.zip_code?.message && (
            <ErrorValidation text={String(errors.zip_code.message)} />
          )}
          <input
            className="input wd100"
            type="text"
            placeholder="Endereço"
            {...registerAddressData("address")}
            onBlur={(e) => setValue("address", e.target.value)}
          />
          <input
            className="input mr-4"
            type="text"
            placeholder="Bairro"
            {...registerAddressData("district")}
            onBlur={(e) => setValue("district", e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Cidade"
            {...registerAddressData("city")}
            onChange={(e) => setValue("city", e.target.value)}
          />
          <input
            className="input wd100"
            type="text"
            placeholder="Complemento"
            {...registerAddressData("complement")}
          />
          {errors?.complement?.message && (
            <ErrorValidation text={String(errors.complement.message)} />
          )}
          <input
            type="hidden"
            {...registerAddressData("contactId")}
            value={idNumber}
          />
        </ModalComponent>
      </div>
      <CardComponent cardTitle="Detalhes" linkPath="/" linkText="Home">
        <>
          <div>
            <div className="flex">
              <h3>Contato:</h3>
              <ModalComponent
                TextBtnModal=""
                edit={true}
                TextTitleModal="Editar"
                onSubmitFunction={contactFormSubmit((data) => {
                  updateContact(data);
                })}
              >
                <input
                  type="text"
                  className="input wd100"
                  placeholder="Nome"
                  value={name}
                  {...registerContactData("name")}
                  onChange={(e) => setName(e.target.value)}
                />
                {errorsContactForm?.name?.message && (
                  <ErrorValidation
                    text={String(errorsContactForm.name.message)}
                  />
                )}
                <select
                  className="input wd100"
                  value={category}
                  {...registerContactData("category_id")}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {allCategories?.map((list) => (
                    <option
                      key={list.id}
                      value={list.id}
                      style={{ color: "black" }}
                    >
                      {list.name}
                    </option>
                  ))}
                </select>
                <input
                  type="hidden"
                  {...registerContactData("contactId")}
                  value={idNumber}
                />
              </ModalComponent>
            </div>
            {contactData?.map((list) => (
              <div key={list.id}>
                <p>{list.name}</p>
                <p>{list.cat_name}</p>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <h3>Telefones:</h3>
            {phoneList?.map((list: any) => (
              <div className="flex" key={list.id}>
                <p>{maskPhone(list.cellphone)}</p>
                <button
                  className="iconAtRight"
                  onClick={() => destroyPhone(list.id)}
                >
                  <TrashIcon pxsize={18} />
                </button>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <h3>Endereços:</h3>
            {addressList?.map((list: any) => (
              <div className="flex" key={list.id}>
                <p>{`${list.address}, ${list.complement} - ${list.district} - ${
                  list.city
                } / ${list.state}, ${maskCEP(list.zip_code)}`}</p>
                <button
                  className="iconAtRight"
                  onClick={() => destroyAddress(list.id)}
                >
                  <TrashIcon pxsize={18} />
                </button>
              </div>
            ))}
          </div>
        </>
      </CardComponent>
    </MaxWidth>
  );
}
