import React from 'react';
import { StyleSheet, ImageBackground, TextInput, View, TouchableOpacity, Image } from 'react-native';
import wall from './login-screen-wall.png';
import loginBtn from './login-btn.png';
import registerBtn from './register-btn.png';
import facebook from './facebook.png';
import google from './google.png';
import twitter from './twitter.png';


class Login extends React.Component {
    onPressLoginBtn = () => {
        this.props.navigation.navigate("DashBoard");
    };
    onPressRegisterBtn = () => {
        this.props.navigation.navigate("Register");
    };


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
                        <TouchableOpacity style={styles.loginIcon} activeOpacity={0.5} onPress={this.onPressLoginBtn}>
                            <Image
                                source={loginBtn}
                                style={styles.loginIconStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginIcon} activeOpacity={0.5} onPress={this.onPressRegisterBtn}>
                            <Image
                                source={registerBtn}
                                style={styles.loginIconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialIcon} activeOpacity={0.5}>
                            <Image
                                source={facebook}
                                style={styles.socialIconStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon} activeOpacity={0.5}>
                            <Image
                                source={google}
                                style={styles.socialIconStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon} activeOpacity={0.5}>
                            <Image
                                source={twitter}
                                style={styles.socialIconStyle}
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
    },
    socialIconStyle:{
        width: 50,
        height: 50,
    },
    socialIcon:{
        paddingRight: 10,
        paddingLeft: 10,
    },
    socialContainer: {
        flexDirection:"row",
        justifyContent: "center",
        paddingTop:20,
        marginTop:60,
    }

});

export default Login;