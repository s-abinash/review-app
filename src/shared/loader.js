import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loader = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
});

export default Loader