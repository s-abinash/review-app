import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from 'react';

const Stack = createStackNavigator();

export default function HomeStack()
{
    return (
        <Stack.Navigator screenOptions={{headerStyle: {
                backgroundColor: '#d3d1d1' // Will Override the default option
            }}}>
            <Stack.Screen name="Home" component={Home} options={({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Game Zone'/>,
                }
            }}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    );
}

// const screens={
//     Home: {
//         screen: Home,
//         navigationOptions:{
//             title: 'Game Zone',
//             headerStyle: {
//                 backgroundColor: '#d3d1d1' // Will Override the default option
//             }
//         }
//     },
//     ReviewDetail:{
//         screen: ReviewDetails,
//         navigationOptions:{
//             title: 'Review Details'
//         }
//     }
// }
//
// // Navigation data will be sent to the screens in the prop, prop. navigation
//
// const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{
//         headerStyle: {backgroundColor: '#333', height: 60},
//         headerTintColor: '#444'
//     }
// })
//
// export default HomeStack;