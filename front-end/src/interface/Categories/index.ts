export default interface CategoryProps {
  catName: string;
  category: CategoriesProps[];
}

export interface CategoriesProps {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CategoryResponse {
  name: string;
}
