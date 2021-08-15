import React from 'react';
import { Alert,View,Text,TouchableOpacity,SafeAreaView,Button,FlatList ,StyleSheet} from 'react-native';
import JobCard from '../components/JobCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { WebView } from 'react-native-webview';
import {useDispatch} from 'react-redux';

function JobDetails(props) {

    //states
   
    const dispatch = useDispatch();
    
  
    const item = props.route.params.item;
    //funtions
   
    const submitHandler = () => {
      Alert.alert(
        'Başvurunuz alınmıştır...',
  
      );
    }
    
    const favHandler = () => {
      dispatch({type:'ADD_FAVORITE',payload:{job:item}})
    }

        return( 
           
      
      
            <View style={styles.container}>
          
          <Text style={styles.cardDetailsTitle}>{item.name}</Text>
          <View style={styles.cardLocView}>
      
          <View style={styles.coloredCombined}>

<Text style={{fontWeight: 'bold',color: 'red'}}>Job Level:</Text>
   <Text style={{marginLeft:5,fontWeight: 'bold'}}  > {item.levels['0'].name}</Text> 
</View>
         <View style={styles.coloredCombined}>

         <Text style={{fontWeight: 'bold',color: 'red' }}>Location:</Text>
            <Text style={{marginLeft:5,fontWeight: 'bold'}} >{item.locations['0'].name}</Text> 
         </View>
         </View>
       <Text style={styles.staticTitle}>Job Detail</Text>
            <View style={styles.detailsCardContainer}>
        
            <WebView   
             originWhitelist={['*']}
            source={{ html: item.contents }}
            style={{ marginTop: 10 }}
           />           
           </View>
          <View style={styles.buttonContainer}>
          
          <Icon.Button onPress={(item)=>submitHandler()} style = {{height:40,width:180,justifyContent:'center'}}name="arrow-up-box" backgroundColor="#EF5350">
    <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',fontWeight: 'bold' }}>
      Submit
    </Text>
  </Icon.Button>
  <Icon.Button onPress={(item)=>favHandler()} style = {{height:40,width:180,justifyContent:'center'}} name="heart" backgroundColor="#EF5350">
    <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',fontWeight: 'bold'}}>
      Favorite Job
    </Text>
  </Icon.Button>
          </View>
          </View>
        )
      


}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:'#ECEFF1',


},
detailsCardContainer:{
    flex:1,
    backgroundColor:'#FFFF'
},
cardDetailsTitle:{fontSize:26,fontWeight: 'bold',padding:5},
staticTitle:{
    fontSize:26,
    alignSelf: 'center',
    margin:10,
    fontWeight: 'bold'}
   ,
coloredCombined:{flexDirection:'row',padding:2,marginTop:5,marginLeft:5,},
Header:{
fontSize:20,
color: '#EF5350',
margin:10,
fontWeight: 'bold',


},
buttonContainer:{
    margin:10,
    flexDirection:'row',
   justifyContent:"space-evenly",

},
submitButton:{
    width : 150,
    height : 30,
    backgroundColor:'#EF5350',
    borderRadius:10,
    margin:20,
    marginRight:10,
    alignSelf: 'center',

},
favButton:{
    marginLeft:10,
    height : 30,
    alignSelf: 'center',
    width : 150,
    backgroundColor:'#EF5350',
    borderRadius:10,
    margin:20,
    
},
buttonText:{    
    alignSelf: 'center',

    color:'white',
    fontWeight: 'bold',
    fontSize:14,
},

})
export default JobDetails;