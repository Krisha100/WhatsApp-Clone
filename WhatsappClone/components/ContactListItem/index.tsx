import React from "react";
import {  User } from "../../types";
import { View, Text, Image, TouchableWithoutFeedbackBase, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import styles from './style';
import users from "../../data/Users";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
    user: User ;
}

const ContactListItem = (props: ContactListItemProps) => {
    const {user} = props;
    const navigation = useNavigation();
   
    
    const onClick = () => {
        
    }
    
    return(
        <TouchableWithoutFeedback onPress={onClick}>
       
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
  
            <View style = {styles.midContainer}>
            <Text style={styles.username}> {user.name} </Text>
            <Text style={styles.lastMessage}>
            {" "}
            {user.status}{" "}
          </Text>
            
          </View>
  
            </View>
  
          
        </View>
      </TouchableWithoutFeedback>
       

    )
}

export default ContactListItem;