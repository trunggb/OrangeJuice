import React from 'react';
import { StyleSheet, Button, Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import firebase from 'react-native-firebase'

class DashBoard extends React.Component {
    state = { currentUser: null, lessions: [], spinner: true }

    onPressLession = (param) => {
        this.props.navigation.navigate("LessionDetail", param);
    };

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser: currentUser })

        for (let i = 0; i <= 16; i++) {
            firebase.database().ref('lession ' + i.toString() + '/').on('value', snapshot => {
                let templessions = this.state.lessions
                let templession = snapshot.val()
                templession['name'] = 'Lession ' + (i + 1)
                templessions.push(templession)
                this.setState({ lessions: templessions })
            })
        }

    }

    creatLession = () => {
        let card = []
        let count = 1
        this.state.lessions.map((lession) => {
            let key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            card.push(<TouchableOpacity key={key} style={styles.loginIcon} activeOpacity={0.5} onPress={() => {
                this.onPressLession(lession);
            }}>
                <View style={styles.lessionCard} >
                    <Image
                        source={{ uri: lession ? lession.img : '' }}
                        style={styles.lessionImg}
                    />
                    <Text style={styles.lessionName}>{count > 9 ? count : '0' + count}</Text>
                </View>

            </TouchableOpacity>)
            count++
        });
        return card
    }

    render() {
        const currentUser = this.state.currentUser
        const lessions = this.state.lessions
        let spinner = this.state.spinner
        if (spinner && this.state.lessions.length >= 16) {
            spinner = false
        }
        return (
            <ScrollView style={styles.body}>
                <Spinner
                    visible={spinner}
                />
                {/* <Button onPress={() => firebase.auth().signOut()} title="Sign out"></Button> */}
                {this.creatLession()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    lessionImg: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: '#FCE19C',
        borderWidth: 2,
    },
    lessionCard: {
        flex: 1,
        flexDirection: 'row',
        margin: 15,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    lessionName: {
        fontSize: 80,
        marginTop: '15%',
        marginLeft: '8%',
        color: '#F59549',

    },
    body: {
        backgroundColor: '#FCE19C'
    }
});


export default DashBoard;