import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withDecay } from "react-native-reanimated";
import React, { useState } from "react";
import { FlashList } from "@shopify/flash-list";

const DATA = [
    {
        id:1,
        title:"Tất cả"
    }, 
    {
        id:2,
        title:"Phổ biến"
    },
    {
        id:3,
        title:"Xu hướng"
    },
];

const locationData = [
    {
        id: 1,
        name: 'Hồ Chí Minh',
        img: "https://www.conicaltravel.com/wp-content/uploads/2020/04/Ho-Chi-Minh-City-Travel-Guide.jpg"
    },
    {
        id: 2,
        name: 'Hà Nội',
        img: "https://media.tacdn.com/media/attractions-content--1x-1/0b/18/9a/2c.jpg"
    },
    {
        id: 3,
        name: 'Đà Nẵng',
        img: "https://storage.googleapis.com/fvallimages/uploads/blog/top-7-places-to-visit-in-da-nang-vietnam-4316.jpg"
    },
    {
        id: 4,
        name: 'Cần Thơ',
        img: "https://storage.googleapis.com/fvallimages/uploads/blog/top-7-places-to-visit-in-da-nang-vietnam-4316.jpg"
    },
    {
        id: 5,
        name: 'Nha Trang',
        img: "https://storage.googleapis.com/fvallimages/uploads/blog/top-7-places-to-visit-in-da-nang-vietnam-4316.jpg"
    }
];





export default function Exercise(){
    
        const [data, setData] = useState(DATA)
      
        const renderItem = ({ item, index }) => {
          const { title } = item;
          return(
            <TouchableOpacity>
              <Text style={myStyle.textItem}>{title}</Text>
            </TouchableOpacity>
          );
        }

        const [locationDatas, setLocationData] = useState(locationData)
        const renderLocationItem = ({ item, index }) => {
            const { name, img} = item;
            return(
              <View style={myStyle.locationContainer}>
                <Image style = {myStyle.locationImg} source = {{uri : img}}/>
                <Text style={myStyle.locationName}>{name}</Text>
                <Text style={myStyle.explore}>Khám phá</Text>
              </View>
            );
          }

    return(
        <ScrollView contentContainerStyle = {myStyle.scrollContainer}>
            <View style={myStyle.container}>
                <View style={myStyle.header}>
                    <Image style={myStyle.logo} source={require('../assets/images/exercise_logo.png')}/>
                    <Image style={myStyle.avt} source={require('../assets/images/exercise_avatar.png')}/>
                </View>
                <View style={myStyle.banner}>
                    <Image style={myStyle.bannerImage} source={require('../assets/images/exercise_banner.png')}/>
                    <View style={myStyle.banner_child1}>
                        <Text style={myStyle.bannerName}>Majestic SaiGon Hotel</Text>
                        <View style={myStyle.bannerRate}>
                            <Image style={myStyle.iconStar} source={require('../assets/images/exercise_banner_star.png')}/>
                            <Text>5.0</Text>
                        </View>
                    </View>
                    <Image style={myStyle.banner_child2}  source={require('../assets/images/exercise_banner_plane.png')}/>
                </View>
                <View style={myStyle.containerCategories}>
                    <TouchableOpacity style={myStyle.cate}>Tất cả</TouchableOpacity>
                    <Text style={myStyle.cate}>Phổ biến</Text>
                    <Text style={myStyle.cate}>Xu hướng</Text>
                </View>
                <View style={myStyle.banner}>
                    <Image style={myStyle.bannerImage} source={require('../assets/images/exercise_banner.png')}/>
                    <View style={myStyle.banner_child1}>
                        <Text style={myStyle.bannerName}>Majestic SaiGon Hotel</Text>
                        <View style={myStyle.bannerRate}>
                            <Image style={myStyle.iconStar} source={require('../assets/images/exercise_banner_star.png')}/>
                            <Text>5.0</Text>
                        </View>
                    </View>
                    <Text style={myStyle.bannerDescription}>Luxury room with Balcony</Text>
                </View>
                <Text style={myStyle.locations}>Các địa điểm</Text>
                <FlashList
                    data={locationDatas}
                    renderItem={renderLocationItem}
                    horizontal= {true}
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
        backgroundColor: "#F5F8FF",
        width:"100%"
    },
    container:{
        marginHorizontal:20
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:10,
        padding:20
    },
    logo:{
        width:60,
        height:60
    },
    avt:{
        width:40,
        height:40
    },
    banner:{
        width:"100%",
        
    },
    bannerImage:{
        width:"100%",
        height:203,
        borderRadius:15,
        paddingHorizontal:20
    }, 
    banner_child1:{
        alignItems:"center",
        top:30,
        flexDirection:"row",
        position:"absolute",
        width:"100%",
        height:"auto"
    },
    bannerName:{
        fontSize:26,
        fontWeight:700,
        color:"#ffffff",
        position:"absolute",
        left:20,
    },
    bannerDescription:{
        position:"absolute",
        bottom:4,
        left:20,
        color:"#fff",
        fontSize:20,
        fontWeight:500,
        lineHeight:24
    },
    iconStar:{
        width:12,
        height:12,
        marginRight:5
    },
    bannerRate:{
        flexDirection:"row",
        position:"absolute",
        alignItems:"center",
        right:20,
        padding:5,
        backgroundColor:"#4461F2",
        borderRadius:20
    },
    banner_child2:{
        marginTop:10,
        flexDirection:"row",
        position:"absolute",
        bottom:10,
        right:20,
        width:22,
        height:22
    },
    containerCategories:{
        width: "100%",
        flexDirection:'row',
        justifyContent: "space-between",
        marginVertical:20
    },
    cate:{
        borderWidth:3,
        padding:7,
        borderColor:"#4461F2",
        borderRadius:20,
        width:100,
        textAlign:"center",
        
    },
    cate2:{
        backgroundColor:"#4461F2"
    },
    locations:{
        color:"#000000",
        fontSize:16, 
        fontWeight:600,
        marginVertical:20
    },
    locationContainer:{
        width:152,
        height:150,
        borderRadius:16,
        flexDirection:"column",
        justifyContent:"space-between",
        marginRight:20
    },
    locationImg:{
        width:"100%",
        height:"100%",
        borderRadius:16,
        
    },
    locationName:{
        position:"absolute",
        bottom:30,
        left:10,
        fontSize:16,
        color:"#fff"
    },
    explore:{
        position:"absolute",
        bottom:5,
        left:10,
        color:"#fff",
        fontSize:12
    }
    
})