import api from "../api";
import CategoryProps, { CategoryResponse } from "../../interface/Categories";

/**
 * Recupera a lista de categorias
 */
export const categoryListRequest = async (): Promise<CategoryProps> => {
  const response = await api.get("/categorias");
  return response.data;
};

/**
 * Deleta uma categoria pelo id
 */
export const deleteCategoryByIdRequest = async (id: number): Promise<void> => {
  if (window.confirm(`Você realmente quer apagar a categoria ${id}?`)) {
    await api.delete(`/apagar-categoria/${id}`);
    alert("Categoria apagada com sucesso");
  }
};

/**
 * Adiciona uma nova categoria
 */
export const addNewCategoryRequest = async (
  data: CategoryResponse
): Promise<void> => {
  await api.post("/nova-categoria", data);
};
