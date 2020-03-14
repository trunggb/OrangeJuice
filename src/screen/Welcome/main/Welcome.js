import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import logo from './logo.png';


class WelcomeScreen extends React.Component {
    onPressGoBtn = () => {
        this.props.navigation.navigate("HomeMain");
    };
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.imgContainer}>
                    <Image source={logo}
                        style={styles.logo}>

                    </Image>
                </View>
                <View style={styles.textContainer}>
                    <View>
                        <Text h3 style={styles.welcomeTitle}>ORANGE JUICE</Text>
                        <Text style={styles.welcomeSlogan} >Play, Learn & Grow together!</Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <Button title="Go" onPress={this.onPressGoBtn} style={styles.goBtn}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        justifyContent: "space-around",
        alignContent: "center",
        backgroundColor: "white",
        backgroundColor: "white",
        paddingBottom: 100,
    },
    welcomeTitle: {
        color: "orange"
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    welcomeSlogan: {
        fontSize: 18,
        color:"green",
    },
    logo: {
        width: 200,
        height: 200
    },
    imgContainer: {
        justifyContent: "center",
        flexDirection: "row",
    },
    btnContainer: {
        flexDirection:"row",
        justifyContent: "center",
    },
    goBtn:{
        width: 100,
    }
});


export default WelcomeScreen;