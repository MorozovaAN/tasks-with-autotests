import React from "react";
import s from "./Message.module.css";
import messageTail from "./message-tail.svg";

export type MessagePropsType = any;

const Message = (props: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-" + props.message.id}
          className={s.avatar}
          src={props.message.user.avatar}
          alt="user avatar"
        />
        <div className={s.text}>
          <p id={"hw1-name-" + props.message.id} className={s.name}>
            {props.message.user.name}
          </p>
          <pre id={"hw1-text-" + props.message.id} className={s.messageText}>
            {props.message.message.text}
          </pre>
          <img src={messageTail} className={s.messageTail} />
        </div>
      </div>
      <p id={"hw1-time-" + props.message.id} className={s.time}>
        {props.message.message.time}
      </p>
    </div>
  );
};

export default Message;
