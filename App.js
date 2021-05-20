import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home'
import Question from './src/addQuestion'
import Quiz from './src/Quiz'



const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'For Kayosys' }}
          />
          <Stack.Screen
            name="Question"
            component={Question}
            options={{ title: 'Add Question' }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ title: 'Poll' }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;