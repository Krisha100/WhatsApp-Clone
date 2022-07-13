import React from "react";
import { FlatList, ImageBackground, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Chats from "../data/Chats";
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
   
      <FlatList
        data={Chats.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />
   
  );
};

export default ChatRoomScreen;
