// import React from "react";
// import { Button, View, Text, } from 'react-native'

// // function DetailsScreen({ navigation }) {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Details Screen</Text>
// //         <Button
// //           title="Go to Details... again"
// //           onPress={() => navigation.navigate('Details')}
// //         />
// //       </View>
// //     );
// //   }

//   //lugie test1 with params

//   function DetailsScreen({ route, navigation }) {
//     /* 2. Get the param */
//     const { itemId, otherParam, lucaParam } = route.params;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         <Text>lucaParam: {JSON.stringify(lucaParam)}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() =>
//             navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })
//           }
//         />
//         <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//       </View>
//     );
//   }


//  export default  DetailsScreen;