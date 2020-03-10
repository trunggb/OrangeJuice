import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    AppRegistry
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from './src/screen/Home/main/HomeMain';

const Stack = createStackNavigator();

class OrangeJuice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeMain" component={HomeMain} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

AppRegistry.registerComponent('OrangeJuice', () => OrangeJuice);
