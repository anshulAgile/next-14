"use client";

import { signIn } from "next-auth/react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/_utils/routes";
import useClientSession from "@/_utils/getClientSession";

const Login = () => {
  const router = useRouter();
  const { session } = useClientSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log("result: ", result);

      if (result?.ok) {
        router.push(ROUTES.home);
      }
    } catch (error: any) {
      console.log("error: ", error);
    }
  };

  if (session) {
    return router.replace(ROUTES.home);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
