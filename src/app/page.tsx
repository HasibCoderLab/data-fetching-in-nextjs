import React from 'react'

async function page() {

  //  ============== SSR==============
  // let response = await fetch('http://localhost:3000/api/user',{
  //   cache:'no-store'
  // });
  // let data = await response.json()
  // console.log(data);
  //   =================       SSG   ==================
    let response = await fetch('http://localhost:3000/api/user',{
    cache:"force-cache"
  });
  let data = await response.json()
  console.log(data);
  
  return (
    <div> 

    </div>
  )
}


export default  page