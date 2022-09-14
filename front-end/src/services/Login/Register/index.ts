import api from "../../api";

export const RegisterRequest = async (data: Object) => {
  try {
    console.log(data);
    return api.post("/register", data);
  } catch (error) {
    console.log(error);
    alert("Erro ao cadastrar usuário");
  }
};
