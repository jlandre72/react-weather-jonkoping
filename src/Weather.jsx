import { useState } from "react";

export default function Weather() {
  const [lati, setLati] = useState("57.77");
  const [long, setLong] = useState("14.16");
  const [temperature, setTemperature] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState();

  const handleClick = () => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&current_weather=true`)
      .then((response) => response.json())
      .then((data) => {
        console.log("The data is there...");
        console.log(`data: ${JSON.stringify(data)}`);
        setTemperature(data.current_weather.temperature);
        setWindSpeed(data.current_weather.windspeed);
        setWindDirection(data.current_weather.winddirection);
      })
      .catch((error) => console.error("Error: ", error))
  }

  return (
    <div className="Weather">
      <h3>Weather in Jönköping</h3>
      <button onClick={handleClick}>Update Weather</button>{" "}
      <span>Temperature: {temperature} &deg;C - </span>
      <span>Wind speed: {windSpeed} m/s - </span>
      <span>Wind direction: {windDirection}</span>
    </div>
  );
}


