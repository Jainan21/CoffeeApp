import { Image, StyleSheet, View } from "react-native"


export default function Splash(){
    return(
        <View style={myStyles.container}>
            <Image
                source={require('../assets/images/logoapp.png')}
                style={myStyles.logo}
            />
        </View> 
    );
    
}

const myStyles = StyleSheet.create({
    container: {
        backgroundColor: "#0C0F14",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 123,
        height: 103,
        padding: 50
    },
});