import React from 'react'

export default async function UserDetailPage(params: PageProps<"/users/[slug]">) {
  const {slug} = await params.params;
  console.log(slug);

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
  const data = await response.json();
  console.log(data);


  return <div>
    <h1>UserDetailPage</h1>
    <h2>{data.name}</h2>
    <p>{data.email}</p>
    <p>{data.phone}</p>
    <p>{data.website}</p>
    <p>{data.company.name}</p>
    <p>{data.company.catchPhrase}</p>
    </div>;
}
