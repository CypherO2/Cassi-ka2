import { useEffect } from "react";
import axios from "axios";
import { FormEvent, useState } from "react";

function TemperaturePage() {
  useEffect(() => {
    document.title = "KA2 - Temp Check";
  });

  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    // const params = {
    //   key: "b2c3cced809641fca2d4b55ce3a865d8",
    // };
    try {
      const response = await axios.get(
        "https://api.weatherbit.io/v2.0/current?b2c3cced809641fca2d4b55ce3a865d8&city="+{location},
        // {
        //   params: params,
        // }
      );
      console.log(response?.data);
      const tempSeries = response?.data["data"];
      if (tempSeries) {
        const latestTemp = Object.keys(tempSeries)[13];
        setTemperature(tempSeries[latestTemp]["app_temp"]);
      } else {
        throw Error("Invalid Response Format");
      }
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  return (
    <>
    </>
  );
}
export default TemperaturePage;
