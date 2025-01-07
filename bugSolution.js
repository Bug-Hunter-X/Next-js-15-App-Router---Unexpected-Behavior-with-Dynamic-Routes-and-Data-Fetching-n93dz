```javascript
// pages/users/[id].js

import { Suspense } from 'react';

export default async function User({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();
  return (
    <div><h1>{user.name}</h1></div>
  );
}

export async function generateMetadata({params}){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();
  return {
    title: `${user.name} - User Profile`
  };
}
```