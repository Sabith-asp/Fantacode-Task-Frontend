import api from "./api";

interface LoginPayload {
  userName: string;
  password: string;
}

export const login = async (data: LoginPayload) => {
  const response = await api.post("/Auth/login", data);
  return response.data;
};
