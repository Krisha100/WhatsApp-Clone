import { StyleSheet } from 'react-native';
import * as React from 'react';

import { Text, View } from '../components/Themed';

import ChatListItem from '../components/ChatListItem';
import ChatRoom from '../data/ChatRoom';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={ChatRoom[0]}/>
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