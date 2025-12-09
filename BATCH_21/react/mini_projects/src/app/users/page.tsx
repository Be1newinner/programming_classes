"use client"
import React, { useEffect, useState } from 'react'

export default function UserPage() {
  const [users, setUsers] = useState([]);

    async function getUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);
  
    return (
    <div>
      <h1>UserPage</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}

    </div>
  );
}
