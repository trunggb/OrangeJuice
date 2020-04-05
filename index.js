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
import Welcome from "./src/screen/Welcome/main/Welcome";
import DashBoard from "./src/screen/DashBoard/main/DashBoard";
import Login from "./src/screen/Login/main/Login";
import Register from "./src/screen/Register/main/Register";
import LessionDetail from "./src/screen/LessionDetail/main/LessionDetail"

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
                    <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Home', headerShown: false}} />
                    <Stack.Screen name="DashBoard" component={DashBoard} options={{title: 'Lessions', headerShown: false}}/>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                    <Stack.Screen name="LessionDetail" component={LessionDetail} options={({ route }) => ({ title: route.params.name })}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

AppRegistry.registerComponent('OrangeJuice', () => OrangeJuice);
