import React from "react";
import { FlatList, ImageBackground, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Chats from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import { View } from "../components/Themed";

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
   
      <View> 
        <FlatList
        data={Chats.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />
        <InputBox/>
        
      </View>

      

   
   
  );
};

export default ChatRoomScreen;
