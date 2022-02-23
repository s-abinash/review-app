import React from 'react';
import { View, Text} from "react-native";
import {globalStyles} from "../styles/global";


export default function Home({route,navigation})
{
    const item=route.params;
    return (
        <View style={globalStyles.container}>
            <Text>Review Detail</Text>
            <Text>{item.title}</Text>
            <Text>{item.rating}</Text>
            <Text>{item.body}</Text>
        </View>
    )
}
