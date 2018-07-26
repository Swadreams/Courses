import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';

export default class Home extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>                
                <Header navigate={navigate} message="Press to Login"/>
                <Hero />
                <Menu navigate={navigate}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})