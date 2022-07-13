import { FlatList, StyleSheet } from 'react-native';
import * as React from 'react';

import { Text, View } from '../components/Themed';

import ChatListItem from '../components/ChatListItem';
import ChatRoom from '../data/ChatRoom';
import InputBox from '../components/InputBox';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatsScreen() {
  
  return (
    <View style={styles.container}>

      <FlatList
        style={{width: '100%'}}
        data={ChatRoom}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />

      <NewMessageButton/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
