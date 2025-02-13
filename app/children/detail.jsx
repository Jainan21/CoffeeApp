import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const detail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.generalInf}>
                <Image style={styles.productImage} source={require("@/assets/images/cappuccino.png")} />
                <View style={styles.information}>
                    <View style={styles.productName}>
                        <Text style={styles.textinfo}>Cappuccino</Text>
                        <Text style={styles.productDescription}>With Steamed Milk</Text>
                        <Text style={styles.rating}>4.5 (6.876)</Text>
                    </View>
                    <View style={styles.productInfo}>
                        <View style={styles.general}>
                            <View style={styles.general1}>
                                <Image style={styles.generalBean} source={require("@/assets/images/beans.png")} />
                                <Text style={styles.generalCf}>Coffee</Text>
                            </View>
                            <View style={styles.general1}>
                                <Image style={styles.generalBean} source={require("@/assets/images/beans.png")} />
                                <Text style={styles.generalCf}>Coffee</Text>
                            </View>
                        </View>
                        <View style={styles.coffeeType}>
                            <Text>Medium Roasted</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.detailInf}>

            </View>
        </View>
    )
}

export default detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141921'
    },
    generalInf: {
        flex: 2,
    },
    detailInf: {
        flex: 1
    },
    productImage: {
        width: "100%",
        flex: 1
    },
    information: {
        flex: 2,
        width: "100%",
        backgroundColor: "#141921",
        position: "absolute",
        opacity: 0.7,
        bottom: 0,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row"

    },
    productInfo: {
        
    },
    general: {

    }
})