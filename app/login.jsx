import { Link } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function Login(){
    return(
        <View style={myStyles.container}>
            <Image style={myStyles.logo} source={require('../assets/images/logoapp.png')}/>
            <Text style={myStyles.welcome}>Welcome to Lungo!!</Text>
            <Text style={myStyles.register}>Login to Continue</Text>
            <View style={myStyles.inputcontainer}>
                <TextInput 
                    style={myStyles.input}
                    placeholder="Email Address"
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
                <View style={myStyles.buttonContainer}>
                    <TouchableOpacity style={myStyles.signInButton}>
                        <Text style={myStyles.registerContent}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={myStyles.signInGGButton}>
                        <Image style={myStyles.google} source={require('../assets/images/google.png')}/>
                        <Text style={myStyles.googleContent}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={myStyles.signIn}>
                <Text style={myStyles.text1}>Don't have an account? Click </Text>
                <Link href="./register">
                    <Text style={myStyles.text2}>Register</Text>
                </Link>
                
            </View>
            <View style={myStyles.signIn}>
                <Text style={myStyles.text1}>Forget Password? Click </Text>
                <Text style={myStyles.text2}>Reset</Text>
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
    buttonContainer:{
        marginVertical: 30
    },
    signInButton:{
        width:"100%",
        height:57,
        backgroundColor:"#D17842",
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
    },
    registerContent:{
        color:"#fff",
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 26
    },
    signIn:{
        flexDirection:"row",
        marginVertical: 5
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
    },
    signInGGButton:{
        width:"100%",
        height:57,
        backgroundColor:"#fff",
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10  
    },
    googleContent:{
        color:"#000000",
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 26
    },
    google:{
        position: "absolute",
        top:20,
        left: 30
    }
});