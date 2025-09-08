"use client";

import { useState } from "react";

function ButtonLike() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Like
      {count > 0 && ` (${count})`}
    </button>
  );
}

export default ButtonLike;
