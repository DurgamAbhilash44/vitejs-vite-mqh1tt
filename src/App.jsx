import React, { useMemo, useState } from 'react'
import './App.css'
const App = () => {
  const [add,setAdd]=useState(0);

  const [sub,setSub]=useState(100);



   const multiplication=useMemo(()=>{
    console.log('running')
    return add*10;
   },[add])


  return (
    <div className='top'>
        {multiplication}
      <button onClick={()=>setAdd(add+1)}>addition</button>
      <span>{add}</span>

      <button onClick={()=>setSub(sub-1)}>subtract</button>
      <span>{sub}</span>
    </div>
  )
}

export default App