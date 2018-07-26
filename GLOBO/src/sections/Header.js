import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = () => {
        // this.setState(previousState => { 
        //     return { isLoggedIn: !previousState.isLoggedIn };
        // })

        if(this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                })
                Alert.alert("User Logged Out");
            })
        } else {
            this.props.navigate('Login');
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if ( result==='none'){
                console.log('NONE');
            }
            else if (result === null){
                AsyncStorage.setItem('userLoggedIn', 'none' , (err, result) => {
                    console.log('Set user to NONE');
                })
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }

        })

    }
    

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headerStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/img1.png')}
                />
                <Text 
                    style={styles.headerText}
                    onPress={this.toggleUser}> 
                    {display} 
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'right',
        color: '#fff',
        fontSize: 20
    },

    headerStyle: {
        paddingTop: 50,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#35605A',
        flex: 1,
        flexDirection: 'row'
    },

    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    }
})