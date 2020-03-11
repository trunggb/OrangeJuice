/**
 * @author: B Sama
 */

import React, { Component } from 'react';
import {
    View, AppRegistry, Text, StyleSheet, Image
} from "react-native";
import { ThemeProvider, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from "./src/screen/Home/main/HomeMain";
import Welcome from "./src/screen/Welcome/main/Welcome";

const Stack = createStackNavigator();

class OrangeJuice extends Component {
    constructor(props) {
        super(props);
        Icon.loadFont();
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="HomeMain" component={HomeMain} />
                    <Stack.Screen name="Welcome" component={Welcome} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

AppRegistry.registerComponent('OrangeJuice', () => OrangeJuice);
