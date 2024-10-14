import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return <h1 className="text-2xl">{time.toLocaleTimeString()}</h1>;
};

export default Clock;
