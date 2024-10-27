import { AxiosError, publicAxios } from "../axios";

type Credentials = {
  email: string
  password: string
}

export async function login(credentials: Credentials) {
  try {
    const { data } = await publicAxios.post('/Login/SignIn', credentials);
    if (data) return data;
    throw new Error('Something went wrong on request');
  } catch (error) {
    // Check if it's an Axios error
    if (error instanceof AxiosError) {
      // Handle 400 Bad Request or 401 Unauthorized
      if (error.response?.status === 400 || error.response?.status === 401) {
        console.log(`Error: ${error.response.status} - ${error.response.data?.message || 'Unauthorized'}`);
        return { error: 'Invalid credentials. Please try again.' };
      }
    }
    // For other errors
    console.error('An error occurred:', error);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}