export interface ApiResponse<T> {
  hasError: boolean;
  code: number;
  payload: T;
}

export interface department {
  id: number;
  departmentName: string;
}

export interface role {
  id: number;
  roleName: string;
}
export interface CreateEmployee {
  id: number;
  name: string;
  email: string;
  password: string;
  cedula: string;
  roleId: number;
  deparmentId: number;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  cedula: string;
  roleName: string;
  departmentName: string;
}

export interface Login extends Employee {
  token: string;
}

export interface IconProps {
  className: string;
}