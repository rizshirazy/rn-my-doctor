import React from 'react';
import MessageIn from './MessageIn';
import MessageOut from './MessageOut';

const ChatItem = ({ self }) => {
  if (self) {
    return <MessageOut />;
  }
  return <MessageIn />;
};

export default ChatItem;
