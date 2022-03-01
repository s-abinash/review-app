import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import {Counter} from "../screens/counter";

const Drawer = createDrawerNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Game Zone" component={HomeStack} options={{headerShown: false}}/>
            <Drawer.Screen name="Counter" component={Counter} options={{headerShown: true}}/>
            <Drawer.Screen name="About Page" component={AboutStack} options={{headerShown: false}} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}

// const RootDrawerNavigator = createDrawerNavigator({
//     Home: {
//         screen: HomeStack
//     },
//     About:{
//         screen: AboutStack
//     }
// })
//
// export default createAppContainer(RootDrawerNavigator)