import { useState, useEffect, useRef } from "react";

function NFTCounter({
  time,
  cTime,
  timeClass = "",
  intervalClass = "",
  intervalGapClass = "",
  handleEndEvent = () => {},
  handleBeforeEndEvent = () => {},
}) {
  const ended = useRef(false);
  const calculateTimeLeft = (input, cInput) => {
    var offset = new Date().getTimezoneOffset();
    var input_utc = new Date(input);
    input_utc.setMinutes(input_utc.getMinutes() - offset);

    let difference;
    if (cInput) {
      var cInput_utc = new Date(cInput);
      cInput_utc.setMinutes(cInput_utc.getMinutes() - offset);

      difference = +new Date(input_utc) - +new Date(cInput_utc);
    } else {
      var cInput_utc_1 = new Date();
      cInput_utc_1.setMinutes(cInput_utc_1.getMinutes() - offset);

      difference = +new Date(input_utc) - +new Date(cInput_utc_1);
    }

    var cInput_utc_2 = new Date();
    cInput_utc_2.setMinutes(cInput_utc_2.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc_2);

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0.1,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time, cTime));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(time, cTime));
      const { days, hours, minutes, seconds } = calculateTimeLeft(time, cTime);
      if (!days && !hours && !minutes && seconds <= 0.1 && !ended.current) {
        handleEndEvent();
        ended.current = true;
      }

      if (!days && !hours && !minutes && seconds === 10) {
        handleBeforeEndEvent();
        ended.current = false;
      }
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    let custom_interval = "";
    switch (interval) {
      case "days":
        custom_interval = "d";
        break;
      case "hours":
        custom_interval = "h";
        break;
      case "minutes":
        custom_interval = "m";
        break;
      case "seconds":
        custom_interval = "s";
        break;
      default:
        custom_interval = "";
        break;
    }
    const x = Math.floor(Math.random() * 100 + 1);

    timerComponents.push(
      <span
        className={`counter-time  ${timeClass}`}
        key={`${custom_interval}${x}`}
      >
        {timeLeft[interval] === 0.1 ? "" : timeLeft[interval]}

        {timeLeft[interval] !== 0.1 && (
          <span
            className={`counter-interval interval-gap ${intervalClass} ${intervalGapClass}`}
          >
            {custom_interval}
          </span>
        )}
      </span>
    );
  });

  return (
    <div className={"nft-counter"}>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className={`counter-time  ${timeClass}`}>
          0
          <span
            className={`counter-interval interval-gap ${intervalClass} ${intervalGapClass}`}
          >
            s
          </span>
        </span>
      )}
    </div>
  );
}

export default NFTCounter;
