import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MoreScreen( props ) {
  return (
    <View style={ styles.container }>
      <Text>More Screen</Text>
    </View>
  )
}

MoreScreen.navigationOptions = {
  title: 'Messages'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});