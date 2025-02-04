import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-web";


export default function Register(){
    return(
        <View style={myStyles.container}>
            <Image style={myStyles.logo} source={require('../assets/images/logoapp.png')}/>
            <Text style={myStyles.welcome}>Welcome to Lungo!!</Text>
            <Text style={myStyles.register}>Register to Continue</Text>
            <View style={myStyles.inputcontainer}>
                <TextInput 
                    style={myStyles.input}
                    placeholder="Name"
                />
                <TextInput
                    style={myStyles.input}
                    placeholder="Email"
                />
                <View>
                    <TextInput
                        style={myStyles.input}
                        placeholder="Password"
                    />
                    <Image
                        style={myStyles.eye}
                        source={require('../assets/images/eye.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={myStyles.input}
                        placeholder="Re - type Password"
                    />
                    <Image
                        style={myStyles.eye}
                        source={require('../assets/images/eye.png')}
                    />
                </View>
                <TouchableOpacity style={myStyles.registerButton}>
                    <Text style={myStyles.registerContent}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={myStyles.signIn}>
                <Text style={myStyles.text1}>You have an account? Click</Text>
                <Text style={myStyles.text2}> Sign in</Text>
            </View>
        </View>
    );
}

const myStyles = StyleSheet.create({
    container:{
        backgroundColor: "#0C0F14",
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 14,
        fontFamily: 'Poppins'
    },
    logo:{
        width: 93,
        height: 78,
    },
    welcome:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 26,
    },
    register:{
        color: "#828282",
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 26
    },
    inputcontainer:{
        width: '100%',
        marginTop: 31
    },
    input:{
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#828282",
        color: "#828282",
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginVertical: 8
    },
    eye:{
        position: 'absolute',
        right: 10,
        top: 22,
        width: 30,
        height: 18
    },
    registerButton:{
        width:"100%",
        height:57,
        backgroundColor:"#D17842",
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20  
    },
    registerContent:{
        color:"#fff",
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 26
    },
    signIn:{
        flexDirection:"row",
        
    },
    text1:{
        fontSize:12,
        color:"#828282",
        fontWeight:"bold"
    },
    text2:{
        fontSize:12,
        color:"#D17842",
        fontWeight:"bold"
    }
});