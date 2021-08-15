import React,{useState} from 'react';
import { View,Text,SafeAreaView,Button,FlatList ,StyleSheet} from 'react-native';
import JobCard from '../components/JobCard';
import Loading from '../components/Loading';
import {API_JOBS_URL} from "@env";
import Error from '../components/Error';
import useFetch from '../Hooks/useFetch';
function Jobs(props) {
    
    //states
    const {loading,error,data} = useFetch(API_JOBS_URL);
   

  
    const toDetails=(item)=>
    {
        props.navigation.navigate('JobDetails',{item:item})
    }
   

    if(loading){
        return <Loading /> 
    }

    if(error){
       return  <Error /> 
    }
    //funtions
    function toNavigate() {
         props.navigation.navigate('Favorites')
    }

    function renderItem({item}){
        return <JobCard item = {item} toDetails={() =>toDetails(item)}/>
    }
  
 
    


    return(

        <SafeAreaView style = {styles.container}>
          
       <Text style = {styles.Header}>Jobs</Text>
        <FlatList 
        data={data.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
container: {
        marginBottom: 45,
    backgroundColor:'#ECEFF1',


},
Header:{
fontSize:20,
alignSelf: 'center',
color: '#EF5350',
marginTop:10,
alignSelf:'center',
justifyContent: 'center',
fontWeight: 'bold',

}

})
export default Jobs;