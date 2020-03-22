import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Image, View, Text } from 'react-native';
import wall from './wellcome-screen-wall.png';
import icon from './wellcom-screen-icon.png';
class WelcomeScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={wall} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.goIcon} activeOpacity={0.5} onPress={this.onPressIcon}>
                    <Image
                        source={icon}
                        style={styles.imageIconStyle}
                    />
                </TouchableOpacity>
            </ImageBackground>
        )
    }

    onPressIcon = () => {
        this.props.navigation.navigate("Login");
    };

}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    goIcon:{
        marginTop: 500,
        marginLeft: 180,
    },
    imageIconStyle:{
        width: 70,
        height: 70
    }
});


export default WelcomeScreen;