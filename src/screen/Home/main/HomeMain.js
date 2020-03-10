import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width;

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.quizNum}>Quiz x</Text>
                </View>
                <View style={styles.quizWrapper}>
                    <Text>What is it?</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    quizNum: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    quizWrapper: {
        height: widthScreen,
        marginTop: 5,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 5
    }
});

export default HomeScreen;