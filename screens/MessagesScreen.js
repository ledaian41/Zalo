import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import MessageCard from '../components/MessageCard';
import messages from '../messages.json';

export default function MessagesScreen( props ) {
  return (
    <FlatList
      data={ messages }
      renderItem={({item}) => (
        <MessageCard message={ item } onGoToConversation={ props.navigation.navigate }/>
      )}
      keyExtractor={ (item, index) => index.toString() }
    />
  )
}

MessagesScreen.navigationOptions = props => {
  return {
    title: "Messages",
    headerLeft: () => {
      return (
        <TouchableOpacity style={ styles.headerLeft } onPress={props.navigation.openDrawer}>
          <Ionicons name='ios-menu' size={25} />
        </TouchableOpacity>
      );
    }
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    paddingStart: 10,
  }
});