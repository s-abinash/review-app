import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import {Image} from "react-native";
import React from 'react';

const Stack = createStackNavigator();

export default function HomeStack()
{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Game Zone'/>, headerBackground: () => <Image source={require('../assets/images/game_bg.png')} style={{height: '100%'}}/>,
                }
            }}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    );
}
