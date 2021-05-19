// Zhanel Turlybaiyeva

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorsContext } from './ColorsContext';
import HomeScreen from './HomeScreen';
import ColorsScreen from './ColorsScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          title: 'Red',
          code: '#FF0000'
        }, {
          title: 'Yellow',
          code: '#FFFF00',
        }, {
          title: 'Green',
          code: '#145A32',
        }, {
          title: 'Gray',
          code: '#7B7D7D',
        }, {
          title: 'White',
          code: '#FDFEFE'
        },
      ],
      currentColors: [],
    }
  }

  addColor = (index) => {
    const {
      currentColors,
      colors,
    } = this.state

    const addedColor = colors.splice(index, 1)

    currentColors.push(addedColor)

    this.setState({
      currentColors,
      colors,
    })
  }

  render() {
    return (
      <ColorsContext.Provider
        value={
          {
            currentColors: this.state.currentColors,
            colors: this.state.colors,
            addColor: this.addColor
          }
        }
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Colors"
              component={ColorsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ColorsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
