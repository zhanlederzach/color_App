import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorBadgeComponent from './ColorBadgeComponent';
import { ColorsContext } from './ColorsContext';

class ColorsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add colors here!</Text>
        <Text>Click on item to add color</Text>
        <View style={styles.items}>
          {
            this.context.colors.map((color, index) => (
              <ColorBadgeComponent
                color={color}
                key={index}
                onPress={() =>
                  this.context.addColor(index)
                }
              ></ColorBadgeComponent>
            ))
          }
        </View>

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}
ColorsScreen.contextType = ColorsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    height: '100%',
  },
});

export default ColorsScreen;
