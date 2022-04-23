import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View , ImageBackground ,Button , ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
//import {AuthContext} from '../contexte/AuthContext';
import { DataTable } from 'react-native-paper';

import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const Reservat = ({navigation}) => { 
    const[data  , setData]=useState('')
    async function  componentDidMount(){
    
        const url="http://192.168.43.230:3001/reservation/getAllReservation"
        fetch(url).then((res)=>res.json())
        .then((resJson)=>{
         // alert(JSON.stringify(resJson))
         setData({data:resJson})
        })
      }
  
   
  return (
    <View style={styles.container}>
        
       
           
              
    <View >
     <SafeAreaView> 
    <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
      <DataTable style={styles.container}>

<DataTable.Header style={styles.tableHeader}>

<DataTable.Title style={styles.title} >Nom et Prenom</DataTable.Title>
<DataTable.Title style={styles.title} >Nom station</DataTable.Title>
<DataTable.Title style={styles.title} >date et heure</DataTable.Title>
<DataTable.Title style={styles.title} >Marque véhicule</DataTable.Title>
<DataTable.Title style={styles.title} >Nature véhiule</DataTable.Title>
<DataTable.Title  style={styles.title} >status</DataTable.Title>
<DataTable.Title style={styles.title}>Action</DataTable.Title>
</DataTable.Header>

{
data.map((item , index)=>{
    return(
<DataTable.Row  >
<DataTable.Cell style={styles.title1}>{item.Nom_prenom}</DataTable.Cell>
<DataTable.Cell style={styles.title1}>{item.namestation}</DataTable.Cell>
<DataTable.Cell style={styles.title1}>{item.date_heure}</DataTable.Cell>
<DataTable.Cell style={styles.title1}>{item.marque_vehicule}</DataTable.Cell>
<DataTable.Cell style={styles.title1}>{item.Nature_vehicule}</DataTable.Cell>
<DataTable.Cell style={styles.title1}>{item.etat ? (<div className="text-green-500 " style={{color:'green'}}>
                  <b> Confirmer</b>
                </div>
              ) : (
                <div className="text-blue-500" style={{color:'blue'}}>
                  <b >En Attente...</b>
                </div>
              )}</DataTable.Cell>
<DataTable.Cell  >
<MaterialIcons name='delete'size= {20} color='#D90115'  style={{marginRight:20}}/>
<AntDesign name="checkcircle" size={20} color="#22780F"  />

</DataTable.Cell>
</DataTable.Row>
)
})
}

</DataTable>
</ScrollView>
    </SafeAreaView>
    </View>
   

</View>

  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width : null,
    height: null,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginVertical: 10,
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: 200,
height : 45,
borderRadius : 25,
backgroundColor: 'black',
justifyContent: 'center',
marginTop : 20,
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  link: {
    color: 'blue',
  },
  input:{
    width:300,
    height:45,
    marginTop:10,
    marginBottom:10,
    borderRadius:25,
    fontSize:10,
    paddingLeft:45,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 15

  },
  logoContainer:{
alignItems:'center'
},
btnEye:{

  top:17,
  right:60,
}
,
logoText:{
  color:'black',
fontWeight:600,
  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5,
  marginBottom:10
},
  logo:{
    width:150,
    height:180,
    marginBottom:20
  }
});
export default Reservat;