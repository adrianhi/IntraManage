import type { CreateEmployee } from "@/interfaces";
import { AxiosError, privateAxios, publicAxios } from "../axios";
import axios from "axios";


export const createEmployee = async (headerToken: string, formData) => {
  try {
    const response = await privateAxios(headerToken).post('/Employee/addEmploye', formData);
    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};
export async function getAllEmployees(headerToken: string) {
  try {
    const { data } = await privateAxios(headerToken).get('/Employee');
    if (data != undefined && data != null) return data
    throw new Error("Something goes wrong (getAllUsers)")
  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError) {
      return error.response
    }
    return error
  }
}

export async function getEmployeeById(headerToken: string, id: number) {
  try {
    const { data } = await privateAxios(headerToken).get(`/Employee/${id}`);
    if (data != undefined && data != null) return data
    throw new Error("Something goes wrong (getAllUsers)")
  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError) {
      return error.response
    }
    return error
  }
}

export async function getCedulaFile(userId: number, headerToken: string) {
  try {


    const data = await privateAxios(headerToken).get(`http://localhost:5214/api/Employee/file/${userId}`,
      {
        responseType: "blob"
      }
    );
    return data
    throw new Error("Something goes wrong (getAllUsers)")
  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError) {
      return error.response
    }
    return error
  }
}