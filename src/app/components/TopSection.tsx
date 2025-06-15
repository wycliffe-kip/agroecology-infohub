"use client";

import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function TopSection() {
  const [token, setToken] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      try {
        const payload = JSON.parse(atob(savedToken.split(".")[1]));
        const expired = payload.exp * 1000 < Date.now();
        if (!expired) setToken(savedToken);
        else localStorage.removeItem("token");
      } catch {
        localStorage.removeItem("token");
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="top-0 w-full bg-white dark:bg-zinc-800 border-b border-gray-300 dark:border-zinc-700 z-[60] flex justify-end gap-4 px-6 py-2 text-sm">
      {!token ? (
        <>
          <button onClick={() => setShowLogin(true)} className="text-blue-600 hover:underline">
            Login
          </button>
          <button onClick={() => setShowRegister(true)} className="text-green-600 hover:underline">
            Register
          </button>
        </>
      ) : (
        <button onClick={logout} className="text-red-600 hover:underline">
          Logout
        </button>
      )}

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} onSuccess={setToken} />}
      {showRegister && <RegisterForm onClose={() => setShowRegister(false)} onSuccess={setToken} />}
    </div>
  );
}
