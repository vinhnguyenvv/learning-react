import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ISwmLableProps {
    title: string;
    color?: string
}

const SwmLable = (props: ISwmLableProps) => {
    const { color = "blue", title = "" } = props;
    return <View style={styles.container}>
        <Text style={{ color: props.color }}> {props.title}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SwmLable;