import React from 'react'
import ProductCard from '../components/ProductCard'

interface User {
    id : number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    console.log("users", users)
  return (
    <div>
      UsersPage
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      
      <ProductCard />
    </div>
  )
}

export default UsersPage
