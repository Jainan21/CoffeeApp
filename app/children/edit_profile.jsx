import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper';

const edit_profile = () => {
    const [name, setName] = useState("Nguyen Van A");
    const [email, setEmail] = useState("vana@gmail.com");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.icon} source={require("@/assets/images/back.png")} />
                </TouchableOpacity>
                <Text style={styles.headerName}>Setting</Text>
            </View>
            <View style={styles.informationContainer}>
                <Image style={styles.avatar} source={{ uri: "https://d2zp5xs5cp8zlg.cloudfront.net/image-79322-800.jpg" }} />
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='Fullname'
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    placeholderTextColor="#aaa"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#aaa"

                    />
                    <IconButton
                        icon={"eye"}
                        size={20}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Re-Type password"
                        placeholderTextColor="#aaa"

                    />
                    <IconButton
                        icon={"eye"}
                        size={20}
                    />
                </View>
                <TouchableOpacity style={styles.buttonSave}>
                    <Text style={styles.textSave}>Save</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default edit_profile

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
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#1E1E1E",
        color: "#fff",
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderColor: "#252A32",
        borderWidth: 1
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 20,
        alignSelf: "center",
        margin: 30
    },
    passwordContainer: {
        width: "100%",
        height: 50,
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        marginBottom: 15,
        borderColor: "#252A32",
        borderWidth: 1
    },
    passwordInput: {
        flex: 1,
        color: "#fff",

    },
    buttonSave: {
        width: "100%",
        backgroundColor: "#D17842",
        borderRadius: 20,
        paddingVertical: 20,
        marginVertical: 50
    },
    textSave: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 800,
        textAlign: "center"
    }
})