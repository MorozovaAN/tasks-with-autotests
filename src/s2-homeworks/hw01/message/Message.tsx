import React from "react";
import s from "./Message.module.css";
import messageTail from "./message-tail.svg";

// нужно создать правильный тип вместо any
export type MessagePropsType = any;

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-" + props.message.id}
          className={s.avatar}
          // создаёт студент
          src={props.message.user.avatar}
          alt="user avatar"
          //
        />
        <div className={s.text}>
          <div id={"hw1-name-" + props.message.id} className={s.name}>
            {/*создаёт студент*/}
            {props.message.user.name}
            {/**/}
          </div>
          <pre id={"hw1-text-" + props.message.id} className={s.messageText}>
            {/*создаёт студент*/}
            {props.message.message.text}
            {/**/}
          </pre>
          <img src={messageTail} className={s.messageTail} />
        </div>
      </div>
      <div id={"hw1-time-" + props.message.id} className={s.time}>
        {/*создаёт студент*/}
        {props.message.message.time}
        {/**/}
      </div>
    </div>
  );
};

export default Message;
