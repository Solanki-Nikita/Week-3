import React from 'react'

export default function UserList() {
    const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
   
    const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Headphones", price: 199 }
    ]
  return (
    <div>
        <h2>User List</h2>
         <ul>
            {users.map((user, index) => (
                <li key = {index}>{user}</li>
            ))}
        </ul> 
        
        <h2>Product List</h2>
        <ul>
            {products.map (products => (
                <div key = {products.id}>
                <h3>{products.name}</h3>
                <p>${products.price}</p>
                </div>
            ))}
        </ul>

{/* conditional rendering */}
     {/* { users.length === 0 ? ( 
     <p>No users found.</p>) :(
        users.map(users => <li key={users.id}>{users.name}</li>)
     )} */}


{/* filtering + mapping */}
{/* 
{ users
.filter(user => user.isActive)
.map(user => (<li key={user.id}>{user.name}</li>))} */}


        

    </div>
  )
}
