import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ColorsContext } from './ColorsContext';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have { this.context.currentColors.length } colors.</Text>

        <Button
          title="Add some colors"
          onPress={() =>
            this.props.navigation.navigate('Colors')
          }
        />
      </View>
    );
  }
}
HomeScreen.contextType = ColorsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
