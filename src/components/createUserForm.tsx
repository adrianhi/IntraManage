import { useState } from "react";
import type { department, role } from "@/interfaces";
import useCreateUser from "@hooks/useCreateUser";

interface CreateUserFormProps {
  roles: role[];
  departments: department[];
}

const CreateUserForm = ({ roles, departments }: CreateUserFormProps) => {
  const { createUser, message } = useCreateUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cedula: null,
    roleId: "",
    departmentId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "cedula" && files) {
      setFormData({ ...formData, cedula: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      cedula: null,
      roleId: "",
      departmentId: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Cedula</label>
        <input
          type="file"
          name="cedula"
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Role</label>
        <select
          name="roleId"
          value={formData.roleId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Select a role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.roleName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Department</label>
        <select
          name="departmentId"
          value={formData.departmentId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Select a department</option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.departmentName}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Create User
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </form>
  );
};

export default CreateUserForm;
