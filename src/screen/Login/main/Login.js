import React from 'react';
import { StyleSheet, ImageBackground, TextInput, View, TouchableOpacity, Image } from 'react-native';
import wall from './login-screen-wall.png';
import loginBtn from './login-btn.png';
import registerBtn from './register-btn.png';
class Login extends React.Component {
    render() {
        return (
            <ImageBackground source={wall} style={styles.backgroundImage}>
                <View style={styles.loginContainer}>
                    <TextInput
                        style={styles.emailInput}
                        onChangeText={text => onChangeText(text)}
                    />
                    <TextInput
                        style={styles.passwordInput}
                        onChangeText={text => onChangeText(text)}
                    />
                    <View style={styles.flexContainer}>
                        <TouchableOpacity style={styles.loginIcon} activeOpacity={0.5}>
                            <Image
                                source={loginBtn}
                                style={styles.loginIconStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginIcon} activeOpacity={0.5}>
                            <Image
                                source={registerBtn}
                                style={styles.loginIconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    emailInput: {
        marginTop: 300,
        height: 50,
        borderColor: '#F59549',
        borderWidth: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
    },
    passwordInput: {
        marginTop: 20,
        height: 50,
        borderColor: '#F59549',
        borderWidth: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
    },
    loginContainer: {
        marginLeft: '10%',
        width: '80%',
        height: '100%',
    },
    loginIconStyle: {
        marginLeft: 10,
        marginRight: 10,
        width: 90,
        height: 50,
    },
    flexContainer:{
        flexDirection:"row",
        justifyContent: "center",
        paddingTop:20,
    }

});

export default Login;