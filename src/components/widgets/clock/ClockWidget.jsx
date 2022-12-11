import React, { useState } from "react";

export default function ClockWidget() {
  const [time, setTime] = useState(new Date());
  const [clock, setClock] = useState("--:--:--");
  const [date, setDate] = useState("--/--/----");

  let hours, minutes, seconds, dd, mm, yyyy;

  const updateTime = () => {
    setTime(new Date());

    hours = String(time.getHours()).padStart(2, "0");
    minutes = String(time.getMinutes() + 1).padStart(2, "0");
    seconds = String(time.getSeconds()).padStart(2, "0");

    dd = time.getDate();
    mm = String(time.getMonth() + 1); //January is 0!
    yyyy = time.getFullYear();

    setClock(`${hours}:${minutes}:${seconds}`);
    setDate(`${dd}/${mm}/${yyyy}`);
  };

  setTimeout(updateTime, 1000);

  return (
    <div>
      <h2>{clock}</h2>
      <h5>{date}</h5>
    </div>
  );
}
