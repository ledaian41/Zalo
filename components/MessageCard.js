import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';

export default function MessageCard( props ) {
  const { message, onGoToConversation } = props;
  const avatar = { uri: message.avatar_url };
  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ () => { onGoToConversation( 'Conversation', { ...props } ); } }
    >
      <View style={ styles.avatar }>
        <Image source={ avatar } resizeMode='cover' style={ styles.image } />
      </View>
      <View style={ styles.content }>
        <View style={ styles.title }>
          <Text style={ styles.name }>{ message.first_name } { message.last_name }</Text>
          <Text style={ styles.time }>{ message.last_message_date }</Text>
        </View>
        <Text numberOfLines={4} style={ styles.text }>{ message.last_message_content }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    height: 100,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  content: {
    flex: 0.8,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingStart: 8,
    paddingVertical: 4,
    height: 100,
  },
  title: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    flex: 0.7,
    marginTop: 4,
    fontSize: 12,
  },
  time: {
    fontSize: 14,
  }
});
