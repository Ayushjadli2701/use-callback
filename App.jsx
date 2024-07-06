import React, { useCallback, useMemo, useState } from 'react'
import ChildA from './components/ChildA';
const App = () => {

  const [count, setCount] = useState(0);
  
  // function increaseCount(){
  //     setCount(count+1);
  // }
const hello = useCallback(() => {
},[])

  return (
    <div>
        <h1>useCallback Hook</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <ChildA hello = {hello} />

    </div>
  )
}

export default App
