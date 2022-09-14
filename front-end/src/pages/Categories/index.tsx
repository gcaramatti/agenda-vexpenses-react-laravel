import { useEffect, useState } from "react";
import { MaxWidth } from "../../globalStyles";
import CardComponent from "../../components/cards";
import ModalComponent from "../../components/Modal";
import { THead, TH, TD } from "../../components/cards/styles";
import {
  categoryListRequest,
  deleteCategoryByIdRequest,
  addNewCategoryRequest,
} from "../../services/Categories";
import { TransparentButton } from "../../components/icons/styles";
import { TrashIcon } from "../../components/icons";
import CategoryProps from "../../interface/Categories";
import { format } from "date-fns";

export default function Categories() {
  const [name, setCatName] = useState("");
  const data = {
    name,
  };
  const [categoryList, setCategoryList] = useState<CategoryProps | null>(null);

  async function getCategoryList() {
    let response = await categoryListRequest();
    setCategoryList(response);
  }

  async function deleteCategoryById(id: number) {
    await deleteCategoryByIdRequest(id);
    getCategoryList();
  }

  async function addNewCategory() {
    await addNewCategoryRequest(data);
    setCatName("");
    getCategoryList();
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <MaxWidth>
      <ModalComponent
        TextBtnModal="Nova Categoria"
        TextTitleModal="Cadastrar categoria"
        onSubmitFunction={addNewCategory}
        edit={false}
      >
        <input
          type="text"
          className="input wd100"
          placeholder="Nome da categoria"
          value={name}
          onChange={(e) => setCatName(e.target.value)}
        />
      </ModalComponent>
      <CardComponent cardTitle="Categorias" linkText="Home" linkPath="/">
        <table>
          <THead>
            <tr>
              <TH>N°</TH>
              <TH>Nome</TH>
              <TH>Data</TH>
              <TH>Ações</TH>
            </tr>
          </THead>
          <tbody>
            {categoryList?.category?.map((list) => (
              <tr key={list.id}>
                <TD>{list.id}</TD>
                <TD>{list.name}</TD>
                {/* format(new Date(list.created_at), "YYYY-MM-DD hh:mm:ss.SSS") */}
                <TD>{format(new Date(list.created_at), "dd/MM/yyyy")}</TD>
                <TD>
                  <TransparentButton
                    onClick={() => deleteCategoryById(list.id)}
                  >
                    <TrashIcon pxsize={18} />
                  </TransparentButton>
                </TD>
              </tr>
            ))}
          </tbody>
        </table>
      </CardComponent>
    </MaxWidth>
  );
}
