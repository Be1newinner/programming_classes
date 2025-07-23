import { useState } from "react";

export function meta() {
  return [
    { title: "Form Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function FormPage() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    fullname: "",
    password: "",
    gender: 0,
  });

  function submitForm(event) {
    event.preventDefault();
    console.log(formInputs);
  }

  function HandleFormInputChange(key, input) {
    setFormInputs((prev) => ({
      ...prev,
      [key]: input,
    }));
  }

  return (
    <div className="min-h-screen ">
      <div className="flex justify-center items-center py-10 text-white">
        <div className="bg-slate-800 shadow-lg rounded-xl w-full max-w-md p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>

          <form className="space-y-5" onSubmit={submitForm}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={formInputs.email}
                onChange={(e) => HandleFormInputChange("email", e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="fullname" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={formInputs.fullname}
                onChange={(e) =>
                  HandleFormInputChange("fullname", e.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={formInputs.password}
                onChange={(e) =>
                  HandleFormInputChange("password", e.target.value)
                }
              />
            </div>

            <div>
              <span className="block text-sm font-medium">Gender</span>
              <div className="flex items-center space-x-4 mt-2">
                <label className="inline-flex items-center text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio text-blue-500"
                    checked={formInputs.gender === 0 ? true : false}
                    onChange={() => HandleFormInputChange("gender", 0)}
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio text-pink-500"
                    checked={formInputs.gender === 1 ? true : false}
                    onChange={() => HandleFormInputChange("gender", 1)}
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="inline-flex items-center text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="form-radio text-purple-500"
                    checked={formInputs.gender === 2 ? true : false}
                    onChange={() => HandleFormInputChange("gender", 2)}
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
