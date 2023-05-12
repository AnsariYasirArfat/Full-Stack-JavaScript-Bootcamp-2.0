import { useState, useEffect } from "react";
const DisplayDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(dateTime);

  const formattedTime = new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(dateTime);

  let color = {
    color: "rgb(79, 150, 147)",
  };

  return (
    <div className="col m-auto d-none d-md-block" style={color}>
      <p className="h5 fw-bold mb-0">{formattedTime}</p>
      <p className="fw-semibold mb-0">{formattedDate}</p>
    </div>
  );
};

export default DisplayDate;
