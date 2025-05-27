import { useState } from "react";

export default function FormsElements() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-xl border">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullname"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Hobby</label>
          <select name="hobby" className="w-full px-3 py-2 border rounded">
            <option value="">Select a hobby</option>
            <option value="coding">Coding</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="traveling">Traveling</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
