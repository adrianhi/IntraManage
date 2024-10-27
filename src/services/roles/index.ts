import { AxiosError, privateAxios } from "../axios";

export async function getRoles(headerToken: string) {
  try {
    const response = await privateAxios(headerToken).get("/Role");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error al realizar la solicitud GET:", error.message);
      throw error;
    } else {
      throw new Error("Error desconocido al realizar la solicitud GET");
    }
  }
}
export async function getRolesById(headerToken: string, id: number) {
  try {
    const response = await privateAxios(headerToken).get(`/Role/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error al realizar la solicitud GET:", error.message);
      throw error;
    } else {
      throw new Error("Error desconocido al realizar la solicitud GET");
    }
  }
}