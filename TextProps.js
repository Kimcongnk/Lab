import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
const TextProps = (props) => {
    return (
        <View >
            <Text
                style={StyleSheet.create(
                    {
                        fontSize: 45,
                        color: '#de6870'
                    }
                )}
                onPress={props.updateState}>

                {props.myState}

            </Text>
        </View>
    )
}
export default TextProps