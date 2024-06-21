"use client";

import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <button onClick={handleLogout}>
      <h2>Logout</h2>
    </button>
  );
};

export default LogoutBtn;
