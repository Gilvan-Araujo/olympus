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

  return (
    <p className="text-base xl:text-xl 2xl:text-2xl">
      {time.toLocaleTimeString()}
    </p>
  );
};

export default Clock;
