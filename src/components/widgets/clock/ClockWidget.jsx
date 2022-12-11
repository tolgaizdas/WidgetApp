import React, { useState } from "react";

export default function ClockWidget() {
  const [time, setTime] = useState(new Date());
  const [clock, setClock] = useState("--:--:--");
  const [date, setDate] = useState("--/--/----");
  const [day, setDay] = useState("-");

  let hours, minutes, seconds, dd, mm, yyyy, dayName;

  const updateTime = () => {
    setTime(new Date());

    hours = String(time.getHours()).padStart(2, "0");
    minutes = String(time.getMinutes() + 1).padStart(2, "0");
    seconds = String(time.getSeconds()).padStart(2, "0");

    dd = time.getDate();
    mm = String(time.getMonth() + 1); //January is 0!
    yyyy = time.getFullYear();

    switch (time.getDay()) {
      case 0:
        dayName = "Sunday";
        break;
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      default:
        dayName = "";
    }
    setClock(`${hours}:${minutes}:${seconds}`);
    setDate(`${dd}/${mm}/${yyyy}`);
    setDay(dayName);
  };

  setTimeout(updateTime, 1000);

  return (
    <div>
      <h3>{clock}</h3>
      <h5>{day}</h5>
      <h6>{date}</h6>
    </div>
  );
}
