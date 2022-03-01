import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterStore'
import {globalStyles} from "../styles/global";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Button, FAB} from 'react-native-elements';


export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                {/*<Text>POC for Redux with Persist Storage and React Native Elements</Text>*/}
                <View style={styles.container}>
                    <FAB
                        style={styles.flexItem}
                        onPress={() => dispatch(increment())}
                        icon={{ name: 'add', color: 'white', type: 'material' }}
                        size="small"
                        color="blue"
                    />
                    <Text style={styles.paragraph}>{count}</Text>
                    <FAB
                        style={styles.flexItem}
                        onPress={() => dispatch(decrement())}
                        icon={{ name: 'minus', color: 'white', type: 'material-community' }}
                        size="small"
                        color="red"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    flexItem:{
        marginHorizontal: 20
    },
    paragraph:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})