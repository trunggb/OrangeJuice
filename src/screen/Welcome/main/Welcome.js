import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Animated, View } from 'react-native';
import wall from './wellcome-screen-wall.png';
import firebase from 'react-native-firebase'

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
    }, [])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

class WelcomeScreen extends React.Component {
    state = { spinner: true }

    componentDidMount() {
        setTimeout(() => {
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? 'DashBoard' : 'Login')
            })
        },
            4500
        )

    }
    render() {
        return (
            <View>
                <FadeInView >
                    <ImageBackground source={wall} style={styles.backgroundImage}>
                    </ImageBackground>
                </FadeInView>
            </View>

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