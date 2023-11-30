import React, { useState, useEffect } from "react";

const useCountTracker = () => {
  const [count, setCount] = useState<number>(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return { count, setCount };
};

export default useCountTracker;