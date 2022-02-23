import React from 'react';
import { View, Text, Image, StyleSheet} from "react-native";
import {globalStyles, images} from "../styles/global";
import Card from "../shared/card";


export default function Home({route,navigation})
{
    const rating=route.params.rating;
    const item = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    { item.title }
                </Text>
                <Text>{ item.body }</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});
