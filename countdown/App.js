import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import EventList from './src/EventList';
import EventForm from './src/EventForm';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  // list: {
  //   screen: EventList,
  //   navigationOptions: () => {
  //     title: 'Your Events'
  //   }
  // },
  // form: {
  //   screen: EventForm,
  //   navigationOptions: () => {
  //     title: 'Add an Event'
  //   }
  // }

  list: { screen: EventList},
  form: { screen: EventForm },

})


// export default class App extends React.Component {
//   render() {
//     return (
//       // <View style={styles.container}>
//       //   <Text> Hello! Welcome... </Text>
//       //   <Text>Open up App.js to start working on your app!</Text>
//       //   <Text>Changes you make will automatically reload.</Text>
//       //   <Text>Shake your phone to open the developer menu.</Text>
//       // </View>
//       <EventList/>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
