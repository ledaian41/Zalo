import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ContactsScreen( props ) {
  return (
    <View style={ styles.container }>
      <Text>Contacts Screen</Text>
    </View>
  )
}

ContactsScreen.navigationOptions = {
  title: 'Messages'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});