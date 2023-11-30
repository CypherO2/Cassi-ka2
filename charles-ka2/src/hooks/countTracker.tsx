import { useState } from "react";

function countTracker() {
  const storedCount = localStorage.getItem("count");
  const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
  const [count, setCount] = useState<number>(initialCount);

  const saveCount = (newCount: number) => {
    localStorage.setItem("count", newCount.toString());
    setCount(newCount);
  };

  return { count, setCount: saveCount };
}

export default countTracker;
