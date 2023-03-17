import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NativeBaseProvider, Box } from "native-base";

interface ISwmLableProps {
    title: string;
    color?: string
}

const SwmLable = (props: ISwmLableProps) => {
    const { color = "blue", title = "" } = props;
    return <NativeBaseProvider>
    <Box flex={1} bg={props.color} alignItems="center" justifyContent="center" >
      <Text style={{color: props.color}}>{props.title}</Text>
    </Box>
  </NativeBaseProvider>
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