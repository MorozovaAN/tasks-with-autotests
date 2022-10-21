import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  onBlur: () => void;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  error: string;
  totalUsers: number;
  lastUserName?: string;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  onEnter,
  onBlur,
  error,
  totalUsers,
  lastUserName,
}) => {
  const inputClass = error ? `${s.input} ${s.errorInput}` : s.input; // need to fix with (?:)

  return (
    <div id={"hw3-form"} className={s.greetingForm}>
      <p className={s.text}>
        {"Людей добавили: "}
        <span id={"hw3-users-total"}>{totalUsers}</span>
      </p>

      <div className={s.inputAndButtonContainer}>
        <div>
          <input
            id={"hw3-input"}
            value={name}
            onChange={setNameCallback}
            className={inputClass}
            onKeyDown={onEnter}
            onBlur={onBlur}
          />
          <p id={"hw3-error"} className={s.error}>
            {error}
          </p>
        </div>

        <button
          id={"hw3-button"}
          onClick={addUser}
          className={s.button}
          disabled={!name.trim()}
        >
          add
        </button>
      </div>

      {lastUserName && (
        <p className={s.greeting}>
          Привет <span id={"hw3-last-user"}>{lastUserName}</span>!
        </p>
      )}
    </div>
  );
};

export default Greeting;
