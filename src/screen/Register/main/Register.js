import React from 'react';
import { StyleSheet, ImageBackground, TextInput, View, TouchableOpacity, Image } from 'react-native';
import wall from './register-screen-wall.png';
import loginBtn from './login-btn.png';
import registerBtn from './register-btn.png';
import firebase from 'react-native-firebase'


class Register extends React.Component {
    state = { fullName: '', email: '', phone: '', password: '', confirmPassword: '', errorMessage: null }

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('DashBoard'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    onPressLoginBtn = () => {
        this.props.navigation.navigate("Login");
    };


    render() {
        return (
            <ImageBackground source={wall} style={styles.backgroundImage}>
                <View style={styles.loginContainer}>
                    <TextInput
                        autoCapitalize='none'
                        placeholder='Full name'
                        style={styles.fullNameInput}
                        onChangeText={fullName => this.setState({ fullName })}
                        value={this.state.fullName}
                    />
                    <TextInput
                        autoCapitalize='none'
                        placeholder='Email address'
                        style={styles.userInputText}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <TextInput
                        autoCapitalize='none'
                        placeholder='Phone number'
                        style={styles.userInputText}
                        onChangeText={phone => this.setState({ phone })}
                        value={this.state.phone}
                    />
                    <TextInput
                        autoCapitalize='none'
                        secureTextEntry
                        placeholder='Password'
                        style={styles.userInputText}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <TextInput
                        autoCapitalize='none'
                        secureTextEntry
                        placeholder='Confirm password'
                        style={styles.userInputText}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        value={this.state.confirmPassword}
                    />
                    <View style={styles.flexContainer}>

                        <TouchableOpacity style={styles.loginIcon} activeOpacity={0.5} onPress={this.handleSignUp}>
                            <Image
                                source={registerBtn}
                                style={styles.loginIconStyle}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.loginIcon} activeOpacity={0.5} onPress={this.onPressLoginBtn}>
                            <Image
                                source={loginBtn}
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
    fullNameInput: {
        marginTop: 200,
        height: 50,
        borderColor: '#F59549',
        borderWidth: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
    },
    userInputText: {
        marginTop: 15,
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
    flexContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 50,
    },
});

export default Register;