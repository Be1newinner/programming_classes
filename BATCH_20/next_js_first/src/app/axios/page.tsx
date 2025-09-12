"use client";

// import axios from "axios";
import { Axios } from "../services/axios";

export default function AxiosPage() {
  const SKIP = 0;
  const LIMIT = 10;
  async function getTodos() {
    try {
      //   const data = await Axios.get(`/api/v1/leads?skip=${SKIP}&limit=${LIMIT}`);
      const data = await Axios.get(`/api/v1/leads`, {
        params: {
          limit: LIMIT,
          skip: SKIP,
        },
      });
      // for fetching data
      if (data.status < 299) {
        console.log(data.data);
      }
    } catch (error: unknown) {
      console.warn("API ERROR => ", (error as Error).message);
    }
  }

  async function getPosts() {
    const response = await Axios.post("/api/v1/leads", {
      name: "string",
      email: "user@example.com",
      phone: "string",
      subject: "string",
      message: "string",
    });

    if (response.status < 299) {
      console.log(response.data);
    }
  }

  return (
    <div>
      <h1>AXIOS</h1>
      <button onClick={getTodos}>CALL TODOS</button>
      <br />
      <button onClick={getPosts}>CALL POSTS</button>
    </div>
  );
}
