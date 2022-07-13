import React from "react";
import { ChatRoom } from "../../types";
import { View, Text, Image } from "react-native";
import styles from './style';
import Users from "../../data/Users";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    const user = chatRoom.users[1];
    console.log(user.imageUri);
    return(
        <View style={styles.container}>
            <Image source={{uri: user.imageUri}} style={styles.avatar}/>
            <View> 
                <Text> {user.name } </Text>
                <Text> {chatRoom.lastMessage.content} </Text>
            </View>

            <Text> {chatRoom.lastMessage.createdAt} </Text>
        </View>

    )
}

export default ChatListItem;