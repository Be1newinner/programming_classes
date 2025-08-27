import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function contactDetails({ params }) {
  console.log({ params });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log("SEARCH => ", searchParams.get("name"));
  }, [searchParams]);

  return (
    <div>
      <h1>Contact Details</h1>
      <p>You are {params.id}</p>
    </div>
  );
}
