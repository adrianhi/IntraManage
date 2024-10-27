import { privateAxios, AxiosError } from "../axios";

export async function getAllDepartments(headerToken: string) {
  try {
    const response = await privateAxios(headerToken).get("/Department");
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

export async function getDepartmentById(headerToken: string, id: number) {
  try {
    const response = await privateAxios(headerToken).get(`/Department/${id}`);
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
