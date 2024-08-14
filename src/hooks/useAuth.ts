import { isAxiosError } from "axios";
import api from "@/config/axios";
import { userSchema } from "@/types";
interface DataType {
  email: string;
  password: string;
}

export async function login(datos: DataType) {
  try {
    const { data } = await api.post("/api/login", datos);
    localStorage.setItem("AUTH_TOKEN", data.token);
    return data;
    //
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data.errors?.invalid?.[0] || "Error desconocido";
      throw new Error(errorMessage);
    }
    throw new Error("An unknown error occurred");
  }
}

export async function getUser() {
  try {
    const { data } = await api.get("/api/user");
    const response = userSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
