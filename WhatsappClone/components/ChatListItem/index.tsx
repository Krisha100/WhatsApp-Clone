import React from "react";
import { ChatRoom } from "../../types";
import { View, Text, Image, TouchableWithoutFeedbackBase, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import styles from './style';
import Users from "../../data/Users";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    const navigation = useNavigation();
    const user = chatRoom.users[1];
    

    // <TouchableOpacity
    //         onPress={() => alert("Clicked on ${user.name}")}
            
    //       >
    
    // </TouchableOpacity>

    // const onClick = () => {
    //     navigation.navigate('ChatRoom')
    // }
    
    return(
        // <TouchableWithoutFeedback onPress={onClick}> 
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('ChatRoom', 
        {id: chatRoom.id,
        name: user.name
        })}> 
         <View style={styles.container}>
            <Image source={{uri: user.imageUri}} style={styles.avatar}/>
            <View> 
                <Text style={styles.username}> {user.name } </Text>
                <Text style={styles.lastMessage}> {chatRoom.lastMessage.content} </Text>
            </View>

            <Text style={styles.time }> {moment(chatRoom.lastMessage.createdAt).format("MM/DD/YY")} </Text>
        </View>
        </TouchableWithoutFeedback>
       

    )
}

export default ChatListItem;