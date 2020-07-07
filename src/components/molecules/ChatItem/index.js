import React from 'react';
import MessageIn from './MessageIn';
import MessageOut from './MessageOut';

const ChatItem = ({ self, text, date }) => {
  if (self) {
    return <MessageOut text={text} date={date} />;
  }
  return <MessageIn text={text} date={date} />;
};

export default ChatItem;
