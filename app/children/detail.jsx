import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FlashList } from '@shopify/flash-list'




const detail = () => {

    const sizeDrinks = [
        {
            id: "1",
            content: 'S'
        },
        {
            id: "2",
            content: 'M'
        },
        {
            id: "3",
            content: 'L'
        }
    ];

    const [sizeData, setSizeData] = useState(sizeDrinks);

    const renderSizeDrinks = ({ item, index }) => {
        const { content } = item;
        return (
            <TouchableOpacity style={styles.sizeButton}>
                <Text style={styles.textItem}>{item.content}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.generalInf}>
                <Image style={styles.productImage} source={require("@/assets/images/cappuccino.png")} />
                <View style={styles.navbar}>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.icon} source={require("@/assets/images/back.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.icon} source={require("@/assets/images/like.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.information}>
                    <View style={styles.productName}>
                        <View>
                            <Text style={styles.textinfo}>Cappuccino</Text>
                            <Text style={styles.productDescription}>With Steamed Milk</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Image style={styles.star} source={require("@/assets/images/star.png")} />
                            <Text style={styles.rating}>4.5</Text>
                            <Text style={styles.ratingCount}>(6.876)</Text>
                        </View>
                    </View>
                    <View style={styles.productInfo}>
                        <View style={styles.general}>
                            <View style={styles.general1}>
                                <Image style={styles.generalBean} source={require("@/assets/images/beans.png")} />
                                <Text style={styles.textGeneral}>Coffee</Text>
                            </View>
                            <View style={styles.general1}>
                                <Image style={styles.generalBean} source={require("@/assets/images/beans.png")} />
                                <Text style={styles.textGeneral}>Milk</Text>
                            </View>
                        </View>
                        <View style={styles.coffeeType}>
                            <Text style={styles.textGeneral}>Medium Roasted</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.detailInf}>
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>Description</Text>
                    <Text style={styles.content}>A cappuccino is an espresso-based coffee beverage made by combining equal parts of espresso, steamed milk, and milk foam. It is typically served in a 5-6 ounce ceramic cup (like porcelain) to help retain heat.</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>Size</Text>
                    <FlashList
                        data={sizeDrinks}
                        renderItem={renderSizeDrinks}
                        horizontal={true}
                        estimatedItemSize={200}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
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
        flex: 1,
        backgroundColor:"#0C0F14"
    },
    productImage: {
        width: "100%",
        flex: 1,
        justifyContent: "center"
    },
    productName: {
        justifyContent: "space-around"
    },
    textinfo: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 700
    },
    productDescription: {
        color: "#AEAEAE",
        fontSize: 12,
        fontWeight: 500
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    star: {
        width: 22,
        height: 22
    },
    rating: {
        fontSize: 16,
        fontWeight: 700,
        color: "#FFFFFF",
        marginHorizontal: 5
    },
    ratingCount: {
        fontSize: 10,
        fontWeight: 500,
        color: "#AEAEAE"
    },
    navbar: {
        position: "absolute",
        top: 15,
        flexDirection: "row",
        width: "90%",
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    information: {
        flex: 2,
        width: "100%",
        backgroundColor: "#000000",
        opacity: 0.7,
        position: "absolute",
        bottom: 0,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopStartRadius: 25,
        borderTopRightRadius: 25

    },
    productInfo: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "45%"
    },
    general: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    general1: {
        backgroundColor: "#141921",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        borderRadius: 10,
        paddingVertical: 5
    },
    coffeeType: {
        backgroundColor: "#141921",
        textAlign: "center",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        width: "100%",
        fontSize: 10

    },
    textGeneral: {
        color: "#EAEAEA"
    },
    button: {
        backgroundColor: "#21262E",
        padding: 10,
        borderRadius: 10,
    },
    icon: {
        width: 17,
        height: 17
    },
    detailContainer:{
        width: "100%"
    },
    sizeButton:{
        height:40,
        width:100,
        marginRight:20,
        justifyContent:"center",
        backgroundColor:"#141921",
    },
    textItem:{
        color:"#ffffff",
        textAlign:"center",
    }
})