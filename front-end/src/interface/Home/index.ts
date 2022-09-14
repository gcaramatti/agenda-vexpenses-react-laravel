export default interface HomeProps {
  categories: CategoriesProps[];
  contactList: ContactListProps[];
}

interface CategoriesProps {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
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

export interface ContactAddResponse {
  name: string;
  cellphone: string;
  category_id: string;
  zip_code: string;
  state: string;
  address: string;
  district: string;
  city: string;
  complement: string;
}
