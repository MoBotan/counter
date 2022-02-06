import React, { useState } from "react";
import Button from "./Button";

export const CountContext = React.createContext();

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <CountContext.Provider value={setCount}>
      <>
        {/* <button style={style} onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <span>{count}</span>
        <button style={style} onClick={() => setCount((prevCount) => prevCount + 1)}>
        -
      </button> */}
        <Button changeCount={{ amount: -1, text: "-" }} />
        <span>{count}</span>
        <Button changeCount={{ amount: 1, text: "+" }} />
      </>
    </CountContext.Provider>
  );
}
