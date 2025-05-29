import { useEffect, useState } from "react";

export default function FormsElementsAdvanced() {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: 0,
    hobby: 0,
  });

  function submitForm(event: unknown) {
    // alert("CALLED");
    console.log(event);
  }

  // function actionFun(data) {
  //   console.log(data);
  // }

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  function handleInputChnage(key: string, value: string | number) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-xl border">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form
        className="space-y-4"
        onSubmit={submitForm}
        // method="POST"
        // action={actionFun}
      >
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullname"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your full name"
            value={inputs.fullname}
            onChange={(e) => handleInputChnage("fullname", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your email"
            value={inputs.email}
            onChange={(e) => handleInputChnage("email", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
            value={inputs.password}
            onChange={(e) => handleInputChnage("password", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={inputs.gender === 0 ? true : false}
                onChange={() => handleInputChnage("gender", 0)}
              />{" "}
              Male
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={inputs.gender === 1 ? true : false}
                onChange={() => handleInputChnage("gender", 1)}
              />{" "}
              Female
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={inputs.gender === 2 ? true : false}
                onChange={() => handleInputChnage("gender", 2)}
              />{" "}
              Other
            </label>
          </div>
        </div>

        {/* <div>
          <label className="block text-sm font-medium mb-1">Hobby</label>
          <select
            name="hobby"
            className="w-full px-3 py-2 border rounded"
            onChange={(e) => {
              switch (e.target.value) {
                case "coding":
                  setHobby(1);
                  break;
                case "music":
                  setHobby(2);
                  break;
                case "sports":
                  setHobby(3);
                  break;
                case "traveling":
                  setHobby(4);
                  break;
                default:
                  setHobby(0);
              }
            }}
          >
            <option value="">
              Select a hobby
            </option>
            <option value="coding" >
              Coding
            </option>
            <option value="music" >
              Music
            </option>
            <option value="sports" >
              Sports
            </option>
            <option
              value="traveling"
            >
              Traveling
            </option>
          </select>
        </div> */}

        <div>
          <label className="block text-sm font-medium mb-1">Hobby</label>
          <select
            name="hobby"
            className="w-full px-3 py-2 border rounded"
            onChange={(e) => handleInputChnage("hobby", Number(e.target.value))}
          >
            <option value="0">Select a hobby</option>
            <option value="1">Coding</option>
            <option value="2">Music</option>
            <option value="3">Sports</option>
            <option value="4">Traveling</option>
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
