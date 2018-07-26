import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

export default class Menu extends Component {
    onPress = () => {
        Alert.alert('You tapped the button');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=> this.props.navigate('Lesson')}>
                        <Text style={styles.buttonText}> LESSONS </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('Register')}>
                        <Text style={styles.buttonText}> REGISTER </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('Blog')}>
                        <Text style={styles.buttonText}> BLOG </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('Contact')}>
                        <Text style={styles.buttonText}> CONTACT </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('Quiz')}>
                        <Text style={styles.buttonText}> QUIZ </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('About')}>
                        <Text style={styles.buttonText}> ABOUT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#35605A'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605A',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }

})