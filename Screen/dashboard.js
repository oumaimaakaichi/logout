
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState , useEffect } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,ScrollView } from 'react-native';
import profile from '../assets/profile.png';
import { getUserData, LogoutUser, storeUserData } from "../utils/AsyncStorageFunctions";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Tab ICons...
import home from '../assets/home.png';
import liste from '../assets/l.png';
import messages from '../assets/m.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
// Menu
import { Table, Row, Rows } from 'react-native-table-component';


import menu from '../assets/menu.png';
import close from '../assets/close.png';

import photo from '../assets/photo.jpg';
import Rese from './allReservation';
export default function Dashboard({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
 
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  /*const [data , setData] = useState([]);
  useEffect(async() =>{
      getAvis();
  } , [])

  async function getAvis(){
    let result = await fetch("http://localhost:3001/comme/getcomm");
    result = await result.json();
    setData(result)

}*/
const[station , setStation]=useState('')

useEffect(async () => {
  setStation(await getUserData());
  
  console.log(station)
}, []);



const Logout =  () => {
  const token= station.data.token;
  fetch("http://192.168.43.230:3001/utilisateur/logout" , {
          method: 'GET',
          headers: { "Authorization": `Bearer ${token}` },
        })
        .then(res=>res.json())
      .then(async data=>{
    if(data.status==true){   
    
      await AsyncStorage.removeItem("station");
       navigation.navigate('signin')
      
      }
      else{
        console.log('logout failed')
      }
     
      })
      .catch(err=>{
        console.log(err)
      });
   
  
        
        
    
     
    
};





  return (
    <SafeAreaView style={styles.container}>
<ScrollView style={styles.s}>
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 15
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Station Lavage</Text>

        <TouchableOpacity onPress={() => {navigation.navigate("Profilee")}}>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 30 }}>
          {
            // Tab Bar Buttons....
          }

          <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
    <TouchableOpacity>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'white',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={home} style={{
          width: 25, height: 25,
          tintColor: "#4682b4"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "#4682b4"
        }}>Home</Text>

      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {navigation.navigate("Reservation")}}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={liste} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>Reservation</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {navigation.navigate("Commentaire")}}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={messages} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>Commentaires</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.warn(station.data.token)}}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={settings} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>Settings</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
            Logout();
          }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={logout} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>logout</Text>
      </View>
    </TouchableOpacity>
    </TouchableOpacity>

        </View>

        

      </View>
      
      </ScrollView>
      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'red',
              marginTop: 40,

            }}></Image>

          </TouchableOpacity>
          <ScrollView>
          
          <Text style={{
          fontSize:22 , 
          fontWeight:"bold",
          marginBottom:15,
          marginTop:30,
          color:'teal',
          
        }}>Bienvenue dans votre espace</Text>
        
<Rese/>
         
          </ScrollView>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#4682b4" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#4682b4" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682b4',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  s:{
    color:'#4682b4',
    backgroundColor:'#4682b4'
  }
});
