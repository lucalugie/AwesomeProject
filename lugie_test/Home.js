// lugie test 1♥
// import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import PresentationalComponent from './PresentationalComponent';

// class Home extends Component {
//   state = {
//     myState: `Hi my name is Luca. Luca so cute ♥♥♥`,
//   };

//   updateState = () => {
//     this.setState({myState: `The state is updated, you just tap me!♥`});
//   };

//   render() {
//     return (
//         // <View>
//         //   {/* <Text onPress={this.updateState}>{this.state.myState}</Text> */}
//         //   <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
//         // </View>

//         <View style={styles.container}>
//           <View style={styles.redbox} />
//           <View style={styles.bluebox} />
//           <View style={styles.blackbox} />
//         </View>
//     );
//   }
// }

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',

//     backgroundColor: 'yellow',
//     height: 600,
//   },
//   redbox: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//   },
//   bluebox: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'pink',
//   },
//   blackbox: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'orange',
//   },
// });

//lugie test 2♥
import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToAbout = () => {
      Actions.about()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
   )
}
export default Home