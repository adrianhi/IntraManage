import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  cedula: File | null;
  roleId: string;
  departmentId: string;
}

const useCreateUser = () => {
  const [message, setMessage] = useState("");

  const createUser = async (formData: FormData) => {
    try {
      const data = new FormData();
      data.append("Name", formData.name);
      data.append("Email", formData.email);
      data.append("PasswordHash", formData.password);
      data.append("RoleId", formData.roleId);
      data.append("DepartmentId", formData.departmentId);

      if (formData.cedula) {
        data.append("CedulaFile", formData.cedula);
      }

      const response = await fetch("/employees/create", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setMessage("User created successfully!");
        window.location.href = "/employees";
      } else {
        const result = await response.json();
        setMessage(result.message || "Failed to create user.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Error creating user.");
    }
  };

  return { createUser, message };
};

export default useCreateUser;
