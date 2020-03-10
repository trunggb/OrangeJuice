/**
 * @author: B Sama
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

import React, { Component } from 'react';
import {
    View, AppRegistry, Text, StyleSheet, Image, Button
} from "react-native";

class OrangeJuice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           </View>

        );
    }
}

var ss = StyleSheet.create({
    title: {
        fontWeight: "500",
        fontSize: 40,
        color: 'orange'
    },
    descrip: {
        fontSize: 20,
        color: "green"
    },
    logo: {
        width: 200,
        height: 200
    },
});

AppRegistry.registerComponent('OrangeJuice', () => OrangeJuice);
