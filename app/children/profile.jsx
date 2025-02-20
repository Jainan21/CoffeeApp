import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FlashList } from '@shopify/flash-list';
import { router } from 'expo-router';

const profile = () => {
  const Data = [
    {
      id: "1",
      content: 'Personal Details',
      image: require('@/assets/images/usericon.png')
    },
    {
      id: "2",
      content: 'Address',
      image: require('@/assets/images/location.png')
    },
    {
      id: "3",
      content: 'Payment Method',
      image: require('@/assets/images/card-payment.png')
    },
    {
      id: "4",
      content: 'About',
      image: require('@/assets/images/info.png')
    },
    {
      id: "5",
      content: 'Help',
      image: require('@/assets/images/question.png')
    },
    {
      id: "6",
      content: 'Log out',
      image: require('@/assets/images/logout.png')
    },
  ];

  const [settingData, setSettingData] = useState(Data);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const renderTag = ({ item, index }) => {
    const { content, image } = item;
    return (
      <TouchableOpacity style={styles.buttonItem} onPress={ () =>
        {index == 0 ? router.push("/children/edit_profile") : index == 2 ? router.push("/children/payment") : console.log("test");}}>
        <View style={styles.icon1}>
          <Image style={styles.icon} source={item.image} />
        </View>
        <Text style={styles.textItem}>{item.content}</Text>
        <Image style={styles.iconNext} source={require("@/assets/images/greater-than-symbol.png")} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={()=>{router.push("/home")}}>
          <Image style={styles.icon} source={require("@/assets/images/back.png")} />
        </TouchableOpacity>
        <Text style={styles.headerName}>Setting</Text>
      </View>
      <FlashList
        data={settingData}
        renderItem={renderTag}
        horizontal={false}
        estimatedItemSize={200}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default profile

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
  buttonItem:{
    flexDirection:"row",
    marginVertical:10
  },
  icon1:{
    width:15,
    height:15,
    padding:15,
    borderRadius:20,
    backgroundColor:'rgba(209, 120, 66, 0.5)',
    justifyContent:"center",
    alignItems:"center",
    marginRight:30
  },
  iconNext:{
    position:"absolute",
    right:0,
    width:20,
    height:20
  },
  textItem:{
    fontSize:16,
    fontWeight:500,
    color:"#FFFFFF",
    alignContent:"center"
  }

})