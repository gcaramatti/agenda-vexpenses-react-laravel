import { useEffect, useState } from "react";
import { MaxWidth } from "../../globalStyles";
import CardComponent from "../../components/cards";
import {
  contactListRequest,
  deleteContactRequest,
  addNewContactRequest,
} from "../../services/Contact";
import { HomeProps } from "../../interface/Contacts";
import { THead, TD, TH } from "../../components/cards/styles";
import { TrashIcon, EyeIcon } from "../../components/icons";
import { TransparentButton } from "../../components/icons/styles";
import ModalComponent from "../../components/Modal";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { getAddressRequest } from "../../services/Contact/Contact-Details";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewContactSchema } from "../../schemas/contact/formSchema";
import { maskPhone } from "../../services/regex";

export default function Home() {
  const [listContacts, setListContacts] = useState<HomeProps | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(NewContactSchema) });

  async function getAddress(zip_code: string) {
    const response = await getAddressRequest(zip_code);

    setValue("state", response.uf);
    setValue("address", response.logradouro);
    setValue("district", response.bairro);
    setValue("city", response.localidade);
  }

  async function getContactList() {
    try {
      let response = await contactListRequest();
      setListContacts(response);
    } catch (e) {
      console.log(e);
    }
  }

  //esse any foi substituido na branch seguinte
  async function addNewContact(data: any) {
    try {
      await addNewContactRequest(data);
      getContactList();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getContactList();
  }, []);

  async function deleteContactById(id: number) {
    try {
      await deleteContactRequest(id);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MaxWidth>
      <div>
        <ModalComponent
          TextBtnModal="Novo Contato"
          TextTitleModal="Cadastrar contato"
          onSubmitFunction={handleSubmit((data) => {
            addNewContact(data);
            reset();
          })}
          edit={false}
        >
          <p>Contato</p>
          <input
            className="input wd100"
            type="text"
            placeholder="Nome"
            {...register("name")}
          />
          <InputMask
            mask={"(99)99999-9999"}
            className="input mr-4"
            type="text"
            placeholder="Telefone"
            {...register("cellphone")}
          />
          <select className="input" {...register("category_id")}>
            {listContacts?.categories?.map((list) => (
              <option key={list.id} value={list.id} style={{ color: "black" }}>
                {list.name}
              </option>
            ))}
          </select>
          <hr />
          <p>Endereço</p>

          <InputMask
            mask={"99999-999"}
            className="input mr-4"
            type="text"
            placeholder="CEP"
            {...register("zip_code")}
            onBlur={(e) => getAddress(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Estado"
            {...register("state")}
          />
          <input
            className="input wd100"
            type="text"
            placeholder="Endereço"
            {...register("address")}
            onChange={(e) => setValue("address", e.target.value)}
          />
          <input
            className="input mr-4"
            type="text"
            placeholder="Bairro"
            {...register("district")}
            onChange={(e) => setValue("district", e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Cidade"
            {...register("city")}
            onChange={(e) => setValue("city", e.target.value)}
          />
          <input
            className="input wd100"
            type="text"
            placeholder="Complemento"
            {...register("complement")}
            onChange={(e) => setValue("complement", e.target.value)}
          />
        </ModalComponent>
        <CardComponent
          cardTitle="Contatos"
          linkText="Gerenciar Categorias"
          linkPath="/categorias"
        >
          <table>
            <THead>
              <tr>
                <TH>N°</TH>
                <TH>Nome</TH>
                <TH>Telefone Principal</TH>
                <TH>Categoria</TH>
                <TH>Ações</TH>
              </tr>
            </THead>
            <tbody>
              {listContacts?.contactList?.map((list) => (
                <tr key={list.contact_id}>
                  <TD>{list.contact_id}</TD>
                  <TD>{list.name}</TD>
                  <TD>{maskPhone(list.cellphone)}</TD>
                  <TD>{list.cat_name}</TD>
                  <TD>
                    <Link
                      to={`/contato/${list.contact_id}`}
                      className="eyeIcon"
                    >
                      <EyeIcon pxsize={18} />
                    </Link>
                    <TransparentButton
                      onClick={() => deleteContactById(list.contact_id)}
                    >
                      <TrashIcon pxsize={18} />
                    </TransparentButton>
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </CardComponent>
      </div>
    </MaxWidth>
  );
}
