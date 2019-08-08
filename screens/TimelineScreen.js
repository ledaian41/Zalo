import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TimelineScreen( props ) {
  return (
    <View style={ styles.container }>
      <Text>Timeline Screen</Text>
    </View>
  )
}

TimelineScreen.navigationOptions = {
  title: 'Messages'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});