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
                <View >
                    <Image style={ss.logo} source={require('/Users/trung/OrangeJuice/logo.png')}></Image>
                </View>
                <Text style={ss.title}>ORANGE JUICE</Text>
                <Text style={ss.descrip}>
                    Play, Learn & Grow together!
                </Text>
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
