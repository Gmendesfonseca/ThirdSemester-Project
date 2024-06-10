import React, { FC, PropsWithChildren, useState } from 'react';
import { ChatType } from '../services/chats';

type ChatContextType = {
  chatList: ChatType[];
  setChatList: React.Dispatch<React.SetStateAction<ChatType[]>>;
};

const ChatContext = React.createContext({} as ChatContextType);

const ChatProvider: FC<PropsWithChildren> = ({ children }) => {
  const [chatList, setChatList] = useState<ChatType[]>([]);

  return (
    <ChatContext.Provider value={{ chatList, setChatList }}>
      {children}
    </ChatContext.Provider>
  );
};

export function useChat() {
  return React.useContext(ChatContext);
}

export default ChatProvider;
