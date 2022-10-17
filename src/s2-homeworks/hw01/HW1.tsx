import React from "react";
import Message from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import KotAvatar from "./mr-Kot.jpg";
import KoshAvatar from "./mrs-Kosh.jpg";

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

// нужно создать правильный тип вместо any
export type MessageType = {
  id: number;
  user: UserType;
  message: MessageInfoType;
};
type UserType = {
  avatar: string;
  name: string;
};
type MessageInfoType = {
  text: string;
  time: string;
};

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: KotAvatar, // можно менять
    name: "Mr Kot", // можно менять
  },
  message: {
    text: "Good evening, sweetie", // можно менять
    time: "22:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: KoshAvatar, // можно менять
    name: "Mrs Kosh", // можно менять
  },
  message: {
    text: "Hi dear! How you're doing?", // можно менять

    time: "22:10", // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hwBorder}>
        <div className={s2.hw}>
          {/*проверка отображения (не менять)*/}
          <div>
            <Message message={message0} />
            <FriendMessage message={friendMessage0} />
          </div>

          {/*для автоматической проверки дз (не менять)*/}
          <MessageSender M={Message} />
        </div>
      </div>
    </div>
  );
};

export default HW1;
