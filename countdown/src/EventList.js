import React,  { Component } from 'react';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';
import { Text, 
         FlatList, 
         StyleSheet         
} from 'react-native';

import { getEvents } from './shared/api';


const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#F3F3F3'
    }
})

class EventList extends Component {
    state = {
        events: []
    }

    static navigationOptions = {
        title: 'Event List',
      };

    componentDidMount() {

        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now()
                }))
            })
        }, 1000)

        // const events = require('./data/db.json').events.map(e => ({
        //     ...e,
        //     date: new Date(e.date)
        // }));
        //this.setState({events});
        this.props.navigation.addListener('didFocus', () => {
            getEvents().then(events => this.setState({events}));
        })        
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    render() {
        return [
            // <Text> Hello </Text>            
            <FlatList
                key="flatlist"
                style={styles.list}
                data = {this.state.events}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                    <EventCard event={item} />
                }
            />,
            
            <ActionButton
                key="fab"
                buttonColor="rgba(231,76,60,1)"
                onPress={this.handleAddEvent}
            />,
        ];
    }
}

export default EventList;