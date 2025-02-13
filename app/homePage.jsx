import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AxiosInstance from "@/helpers/AxiosInstance";

const DATA = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Espresso",
    },
    {
      id: 3,
      title: "Latte",
    },
    {
      id: 4,
      title: "Mocha",
    },
    {
      id: 5,
      title: "Macchiato",
    },
    {
      id: 6,
      title: "Americano",
    },
    {
      id: 7,
      title: "Affogato",
    },
    {
      id: 8,
      title: "Cortado",
    },
    {
      id: 9,
      title: "Flat White",
    },
    {
      id: 10,
      title: "Ristretto",
    },
    {
      id: 11,
      title: "Irish Coffee",
    },
    {
      id: 12,
      title: "Turkish Coffee",
    }
  ];
const coffeeDrinks = [
    {
        id: '1',
        name: 'Cappuccino',
        description: 'With Steamed Milk',
        price: '4.20',
        rating: 4.5,
        image: 'https://th.bing.com/th/id/R.91b8d00ad03f6adef6cf7125740d5499?rik=VCTh8vTO5EY5RQ&riu=http%3a%2f%2fwww.ffactor.com%2fwp-content%2fuploads%2f2018%2f08%2fAdobeStock_202756131.jpeg&ehk=psyxmQ%2fogP7kPf5r0bj7wwbaDI4aAwg2yCTM6AMuUuI%3d&risl=1&pid=ImgRaw&r=0', // Replace with actual image URL
    },
    {
        id: '2',
        name: 'Cappuccino',
        description: 'With Foam',
        price: '4.20',
        rating: 4.2,
        image: 'https://tastycoffeemaker.com/wp-content/uploads/2019/03/Good-Cappuccino-Foam.jpg', // Replace with actual image URL
    },
    {
        id: '3',
        name: 'Latte',
        description: 'With Vanilla',
        price: '4.50',
        rating: 4.7,
        image: 'https://th.bing.com/th/id/OIP.eEpEByb5rHuIgr1ywH1nDwHaLH?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
    {
        id: '4',
        name: 'Americano',
        description: 'Black Coffee',
        price: '3.80',
        rating: 4.3,
        image: 'https://th.bing.com/th/id/R.0523f86d92749165cbceb06053f2f421?rik=0qkCdQ4XclNkyw&pid=ImgRaw&r=0', // Replace with actual image URL
    },
    {
        id: '5',
        name: 'Espresso',
        description: 'Double Shot',
        price: '3.60',
        rating: 4.6,
        image: 'https://th.bing.com/th/id/OIP.dniyPIhsZp1gPxm_OHuG7wHaHa?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
];
const coffeeBeans = [
    {
        id: '1',
        name: 'Robusta Beans',
        description: 'Medium Roasted',
        price: '4.20',
        rating: 4.2,
        image: 'https://th.bing.com/th/id/OIP.XDC2OH6yJ4vUf-bgt-zA2gHaF2?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
    {
        id: '2',
        name: 'Arabica Beans',
        description: 'Lightly Roasted',
        price: '5.00',
        rating: 4.8,
        image: 'https://th.bing.com/th/id/R.df1c8457c932a72cad8c0a994c319e02?rik=NB%2brBkfEgZCWkA&pid=ImgRaw&r=0', // Replace with actual image URL
    },
    {
        id: '3',
        name: 'Espresso Blend',
        description: 'Dark Roasted',
        price: '4.80',
        rating: 4.6,
        image: 'https://th.bing.com/th/id/OIP.0gcMQKLgBfIRaxqiO03T4wAAAA?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
    {
        id: '4',
        name: 'House Blend',
        description: 'Smooth Flavor',
        price: '4.50',
        rating: 4.7,
        image: 'https://th.bing.com/th/id/OIP.jAcKcmAiVixOJ-lgjdvv7wHaHa?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
    {
        id: '5',
        name: 'Decaf Beans',
        description: 'No Caffeine',
        price: '4.00',
        rating: 4.3,
        image: 'https://www.roastycoffee.com/wp-content/uploads/Best-Decaf-Espresso-Beans-900x601.jpg', // Replace with actual image URL
    },
];

export default function Home(){

    const [categoriesData, setData] = useState(DATA);
    const [selectedIndex, setSelectedIndex] = useState(0);
          
    const renderCategories = ({ item, index }) => {
        const { title } = item;
        return(
            <TouchableOpacity style={myStyle.categoriesContainer} onPress={()=>{
                setSelectedIndex(index);
            }}>
                <Text style={[myStyle.textItem, selectedIndex === index && { color : "#D17842"}]}>{title}</Text>
                {
                    selectedIndex === index && 
                        (<View style={myStyle.circle}></View>)
                }
            </TouchableOpacity>
              );
            }

    const [coffeeDrink, setDrinkData] = useState(coffeeDrinks);

    const renderDrinks = ({item, index}) => {
        const {name, description, price, rating, image} = item;
        return(
            <View style={myStyle.productCard}>
                <View style={myStyle.imageContainer}>
                    <Image style={myStyle.productImage} source={{uri: image}}/>
                    <View style={myStyle.ratingContainer}>
                        <Image style={myStyle.starIcon} source={require("../assets/images/star.png")}/>
                        <Text style={myStyle.rating}>{rating}</Text>
                    </View>
                </View>
                <Text style={myStyle.name}>{name}</Text>
                <Text style={myStyle.description}>{description}</Text>
                <View style={myStyle.priceContainer}>
                    <View style={myStyle.priceValue}>
                        <Text style={myStyle.dolla}>$</Text>
                        <Text style={myStyle.price}>{price}</Text>
                    </View>
                    <TouchableOpacity style={myStyle.addButton}>
                        <Image style={myStyle.addSymbol} source={require("../assets/images/addSymbol.png")}/>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    const [coffeeBean, setBeanData] = useState(coffeeBeans);

    const tab = createBottomTabNavigator();

    return(
        <ScrollView contentContainerStyle = {myStyle.scrollContainer}>
            <View style={myStyle.container}>
                <View style={myStyle.header}>
                    <Image
                        source={require('../assets/images/menu.png')}
                        style={myStyle.icon}
                    />
                    <Image
                        source={require('../assets/images/user.png')}
                        style={myStyle.icon}
                    />
                </View>
                <Text style={myStyle.welcome}>Find the best coffee for you</Text>
                <View style={myStyle.searchingBar}>
                    <Image
                        source={require('../assets/images/search_icon.png')}
                        style={myStyle.iconSearch}
                    />
                    <TextInput style={myStyle.findText} placeholder="Find Your Coffee..."></TextInput>
                </View>
                <FlashList
                    data = {categoriesData}
                    renderItem = {renderCategories}
                    horizontal= {true}
                    estimatedItemSize={200}
                    showsHorizontalScrollIndicator={false}
                    extraData={selectedIndex}
                />
                <FlashList
                    data={coffeeDrink}
                    renderItem={renderDrinks}
                    horizontal={true}
                    estimatedItemSize={200}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={myStyle.coffeeBean}>Coffee Beans</Text>
                <FlashList
                    data={coffeeBean}
                    renderItem={renderDrinks}
                    horizontal={true}
                    estimatedItemSize={200}
                    showsHorizontalScrollIndicator={false}
                />
                
            </View>
            
           

        </ScrollView>
        

    );
}

const myStyle = StyleSheet.create({
    scrollContainer:{
        flexGrow:1,
        backgroundColor:"#0C0F14", 
    },
    container:{
        marginHorizontal: 20,
    },
    header:{
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between"
    }, 
    icon:{
        width:30,
        height:30
    },
    welcome:{
        width:"60%",
        fontSize:28,
        fontWeight:700,
        lineHeight:36,
        color:"#ffffff",
        marginVertical:20
    },
    searchingBar:{
        padding:15,
        flexDirection:"row",
        backgroundColor: "#141921",
        borderRadius:15,
        marginVertical: 10
    },
    iconSearch:{
        width:20,
        height:20,
        marginLeft:10
    },
    findText:{
        color:"#52555A",
        marginLeft:15,
        fontWeight:700,
        fontSize:10
    },
    textItem:{
        color: "#52555A",
        fontSize: 14,
        fontWeight : 600,
        lineHeight : 20,
        marginRight: 24
    },
    circle:{
        width:8,
        height:8,
        backgroundColor:"#D17842",
        borderRadius:7,
        marginRight: 24
    },
    categoriesContainer:{
        height:34,
        flexDirection: "column",
        alignItems:"center",
        textAlign:"center",
        marginVertical:20
    },
    productCard:{
        backgroundColor:"#252A32",
        borderRadius:23,
        width:150,
        height:246,
        flexDirection:"column",
        padding:15,
        marginRight:20,
        justifyContent:"space-between"
    },
    imageContainer:{
        width:126,
        height:126,
        borderRadius:20,
    },
    productImage:{
        width:"100%",
        height:"100%",
        borderRadius:20,
    },
    ratingContainer:{
        opacity:0.7,
        flexDirection:"row",
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:"#000000",
        borderBottomLeftRadius:10,
        borderTopRightRadius:20,
        alignItems:"center",
        padding:5
    },
    starIcon:{
        width:12,
        height:12,
        borderRadius:20,
        marginHorizontal:4
    },
    rating:{
        color:"#ffffff",
        marginRight:8,
        fontSize:10
    },
    name:{
        color:"#ffffff",
        fontSize:13
    },
    description:{
        color:"#ffffff",
        fontSize:9
    },
    priceContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    priceValue:{
        flexDirection:"row",
        alignItems:"center",
    },
    dolla:{
        color:"#D17842",
        lineHeight:20, 
        fontSize:15,
        fontWeight:600,
        marginRight:5
    },
    price:{
        color:"#ffffff",
        lineHeight:20, 
        fontSize:15,
        fontWeight:600
    },
    addButton:{
        width:30,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#D17842",
        borderRadius:10,
    },
    addSymbol:{
        width:10,
        height:10
    },
    coffeeBean:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:500,
        lineHeight:20,
        marginVertical:20
    }
});