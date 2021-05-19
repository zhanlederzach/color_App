import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

class ColorBadgeComponent extends React.Component {
  render() {
    return (
      <Pressable 
        title={this.props.color.title}
        onPress={this.props.onPress} 
        style={styles.badge(this.props.color.code)}>
        <Text>{this.props.color.title}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  badge: (colorCode) => ({
    flex: 1,
    backgroundColor: colorCode,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 50/3,
    margin: 15,
    width: '50%',
  })
});

export default ColorBadgeComponent;
