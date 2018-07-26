import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class Hero extends Component {
    render() {
        return (
            <Image
                style={styles.heroImage}
                source={require('./img/img2.png')}
            />
        )
    }
}

const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: 20,
        flex: 4
    }
})