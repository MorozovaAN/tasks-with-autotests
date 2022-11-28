import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(
    new Date(restoreState("hw9-date", Date.now()))
  );
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    let id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(+id);
  };

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    clearInterval(timerId);
    setTimerId(undefined);
  };

  const onMouseEnter = () => {
    // показать дату если наведена мышка
    setShow(true);
  };
  const onMouseLeave = () => {
    // спрятать дату если мышка не наведена
    setShow(false);
  };

  const stringTime = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date) || <br />; // часы24:минуты:секунды (01:02:03)
  const stringDate = new Intl.DateTimeFormat("ru").format(date) || <br />; // день.месяц.год (01.02.2022)

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date) || <br />; // пишут студенты
  const stringMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date) || <br />; // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={"hw9-month"}>{stringMonth}</span>,{" "}
              <span id={"hw9-date"}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          xType={"green"}
          disabled={Boolean(timerId)} // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          xType={"red"}
          disabled={!Boolean(timerId)} // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
