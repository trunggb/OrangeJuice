import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'react-native-firebase'

class DashBoard extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
            </View>
        )
    }



}

const styles = StyleSheet.create({
});


export default DashBoard;