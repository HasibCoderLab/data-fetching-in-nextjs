import React from 'react'

async function page() {
  let response = await fetch('http://localhost:3000/api/user',{
    cache:'no-store'
  });
  let data = await response.json()
  console.log(data);
  
  return (
    <div> 

    </div>
  )
}


export default  page