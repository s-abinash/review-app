import { createStackNavigator } from '@react-navigation/stack';
import About from "../screens/about";
import Header from "../shared/header";
import {Image} from "react-native";
import React from "react";

const Stack = createStackNavigator();

export default function AboutStack()
{
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} options={({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='About Zone'/>, headerBackground: () => <Image source={require('../assets/images/game_bg.png')} style={{height: '100%'}}/>,
                }
            }}/>
        </Stack.Navigator>
    );
}

// const screens={
//     About: {
//         screen: About,
//         navigationOptions:{
//             title: 'About Game Zone',
//         }
//     }
// }
//
// // Navigation data will be sent to the screens in the prop, prop. navigation
//
// const AboutStack = createStackNavigator(screens, {defaultNavigationOptions:{
//         headerStyle: {backgroundColor: '#333', height: 60},
//         headerTintColor: '#444'
//     }
// })
//
// export default AboutStack;