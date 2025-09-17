"use client";

import { useState } from "react";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ReactForm() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      username: "***",
      password: "***",
    },
  });
  //   const [email, setEmail] = useState("");
  function submitForm(data) {
    console.table(data);
  }

  console.log("Hello");

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          {...register("email", { required: true })}
          placeholder="email"
          //   aria-invalid={false}
          className={formState.errors.email ? "border-red-500" : ""}
        />
        <p>{formState.errors.email && formState.errors.email?.type}</p>
        <input {...register("username")} placeholder="username" />
        <input {...register("password")} placeholder="password" />
        {/* <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="password"
        /> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
