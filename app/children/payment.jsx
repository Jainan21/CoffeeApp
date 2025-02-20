import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconButton, TextInput } from 'react-native-paper'
import { router } from 'expo-router'

const payment = () => {
  return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={()=>{router.push("/children/profile")}}>
                    <Image style={styles.icon} source={require("@/assets/images/back.png")} />
                </TouchableOpacity>
                <Text style={styles.headerName}>Payment</Text>
            </View>
        </View>
    )
}

export default payment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141921',
        paddingHorizontal: 20,

    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: "#21262E",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 20
    },
    icon: {
        width: 15,
        height: 15,
    },
    headerName: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 700,
        color: "#FFFFFF"
    },

})