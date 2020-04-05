import React from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import Sound from 'react-native-sound';
import icon from './play-icon.png'
import left from './left.png'
import right from './right.png'


class LessionDetail extends React.Component {
    state = { index: 0 }
    oncPressVocab = (param) => {
        param = param.replace(/\s/g, '%20')
        const sound = new Sound(param, null, (error) => {
            if (error) {
                console.log(param)
            }
            sound.play();
        });

    }

    fixExample = (example) => {
        let start = example.search('">')
        let end = example.search('</')
        return example.substring(start + 2, end - 1)
    }

    render() {

        let index = this.state.index
        let param = this.props.route.params.list
        return (
            <ScrollView style={styles.body}>
                <View style={styles.paginator}>
                    <View style={styles.naviPointContainer}>
                        <View style={styles.naviPoint}>
                            <Text>{index + 1} / {param.length}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.vocabCard}>
                    <View style={styles.left}>
                        <TouchableOpacity style={styles.left} activeOpacity={0.5} onPress={() => {
                            if (index > 0) {
                                index = index - 1
                                this.setState({ index: index })
                            }
                        }}>
                            <Image style={styles.dirIcon} source={left}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.main}>
                        <View style={styles.vocabContent}>

                            <View style={styles.contentContainer}>
                                <Text style={styles.word}>{param[index].word}</Text>
                                <Text>{param[index].phonetic}</Text>
                                <Text>{param[index].clas}</Text>
                                <Text>{param[index].mean}</Text>
                            </View>
                            <TouchableOpacity style={styles.playIconContainer} activeOpacity={0.5} onPress={() => {
                                this.oncPressVocab(param[index].audio)
                            }}>
                                <Image style={styles.playIcon} source={icon}></Image>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.exContent}>
                            <View style={styles.contentContainer}>
                                <Text>{this.fixExample(param[index].example)}</Text>
                            </View>
                            <TouchableOpacity style={styles.playIconContainer} activeOpacity={0.5} onPress={() => {
                                this.oncPressVocab(param[index].ex_audio)
                            }}>
                                <Image style={styles.playIcon} source={icon}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.right}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            if (index < param.length - 1) {
                                index = index + 1
                                this.setState({ index: index })
                            }
                        }}>
                            <Image style={styles.dirIcon} source={right}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    vocabCard: {
        margin: 15,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        height: 500,
    },
    playIcon: {
        width: 50,
        height: 50,
    },
    vocabContent: {
        flexDirection: 'row',
        height: '50%',
    },
    exContent: {
        flexDirection: 'row',
        height: '50%',
    },
    body: {
        backgroundColor: '#FCE19C'
    },
    paginator: {
        margin: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        flex: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
    },
    naviPointContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    main: {
        padding: '5%',
        flex: 5,
    },
    right: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    dirIcon: {
        width: 20,
        height: 40,
    },
    playIconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 2,
    },
    word: {
        fontSize: 20,
    }
});


export default LessionDetail;