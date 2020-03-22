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
import DashBoard from "./src/screen/DashBoard/main/DashBoard";
import Login from "./src/screen/Login/main/Login";

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
                    <Stack.Screen name="DashBoard" component={DashBoard} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

AppRegistry.registerComponent('OrangeJuice', () => OrangeJuice);
