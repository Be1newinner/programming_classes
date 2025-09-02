import React, { useState } from "react";

import type { ChangeEvent, FormEvent } from "react";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const passwordsMatch =
    form.password.length > 0 && form.password === form.confirmPassword;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordsMatch) {
      alert("Passwords do not match");
      return;
    }
    console.log("Register:", form);
  };

  const strengthLabel = "Strong";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
      <header className="mx-auto flex max-w-md items-center justify-between px-4 py-6">
        <h1 className="text-xl font-semibold tracking-tight">Create account</h1>
      </header>

      <main className="mx-auto w-full max-w-md px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800">
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            Fill the details to register.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Vijay Kumar"
                autoComplete="name"
                required
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none ring-0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 invalid:[&:not(:focus):not(:placeholder-shown)]:border-red-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                autoComplete="email"
                required
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none ring-0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 invalid:[&:not(:focus):not(:placeholder-shown)]:border-red-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                required
                minLength={8}
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none ring-0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 invalid:[&:not(:focus):not(:placeholder-shown)]:border-red-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
              <div className="mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Password strength: {strengthLabel}</span>
                <div className="ml-2 h-1 w-32 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                  <div
                    className={`h-full transition-all w-full rounded bg-emerald-500`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-sm font-medium"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                autoComplete="new-password"
                required
                minLength={8}
                className={`block w-full rounded-lg border px-3 py-2 outline-none ring-0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 ${
                  passwordsMatch || form.confirmPassword.length === 0
                    ? "border-gray-300 bg-white text-gray-900 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
                    : "border-red-500 bg-white text-gray-900 placeholder-gray-400 dark:border-red-500 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
                }`}
              />
              {!passwordsMatch && form.confirmPassword.length > 0 && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                  Passwords do not match.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
              disabled={!passwordsMatch}
            >
              Create account
            </button>
          </form>
        </div>

        <p className="mx-auto mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          By creating an account, acceptance of Terms and Privacy Policy is
          implied.
        </p>
      </main>
    </div>
  );
};

export default RegisterPage;
