import { useState } from "react";

function multiplerTracker() {
  const storedMultiplier = localStorage.getItem("multiplier");
  const [multiplier, setMultiplier] = useState(
    storedMultiplier ? storedMultiplier : ""
  );

  const saveMultiplier = (multiplier: string) => {
    localStorage.setItem("multiplier", multiplier);
    setMultiplier(multiplier);
  };
  return { multiplier, setMultiplier: saveMultiplier };
}
export default multiplerTracker;

// var number = parseInt(id.substring(indexPos) , 10 )