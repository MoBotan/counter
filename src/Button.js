import React, { useContext } from "react";
import { CountContext } from "./CounterHooks";
import { ThemeContext } from "./App";

export default function Button({ changeCount: { amount, text } }) {
  const setCount = useContext(CountContext);
  const style = useContext(ThemeContext);

  return (
    <button style={style} onClick={() => setCount((prevCount) => prevCount + amount)}>
      {text}
    </button>
  );
}
