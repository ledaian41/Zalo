import React from "react";
import { Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import AutoHeightImage from 'react-native-auto-height-image';

const screenWidth = Dimensions.get('window').width;

export default function ConversationScreen(props) {
  const { message } = props.navigation.state.params;
  const { avatar_url, first_name, last_name, last_message_content } = message;
  const imageSource = { uri: avatar_url };
  const fullName = `${ first_name } ${ last_name }`;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <AutoHeightImage source={ imageSource } width={ screenWidth } />
      <Text style={ styles.title }>{ fullName }</Text>
      <Text>{ last_message_content }</Text>
    </ScrollView>
  );
}

ConversationScreen.navigationOptions = {
  title: "Conversation"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 8,
  }
});