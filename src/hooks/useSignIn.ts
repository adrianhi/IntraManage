import type { ApiResponse, Employee } from "@/interfaces";
import { useState } from "react";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signIn = async ({ email, password }) => {
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/SignIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result: ApiResponse<Employee> = await response.json();

      if (!response.ok || result.hasError) {
        throw new Error("Failed to sign in. Please try again.");
      }
      if (result.payload.roleName.toLocaleLowerCase() === "administrador") {

        window.location.replace("/employees");
      }
      else {
        window.location.replace("/myInfo");

      }



    } catch (err) {
      setError(err.message || "Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
};
