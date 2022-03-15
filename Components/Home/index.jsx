import React, { useState } from 'react'
import styles from './style.modules.css'

const Home = () => {

    const [count, setCount] = useState(0);

const IncNum = () => {
  setCount(count + 1);
};
  return (

    <>
    <h1>{count}</h1>
    <button onClick={IncNum}> Click Me </button>
    </>
  );
}

export default Home;