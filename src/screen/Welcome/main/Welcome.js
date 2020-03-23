import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import wall from './wellcome-screen-wall.png';
import firebase from 'react-native-firebase'
class WelcomeScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'DashBoard' : 'Login')
        })
    }
    render() {
        return (
            <ImageBackground source={wall} style={styles.backgroundImage}>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
});


export default WelcomeScreen;