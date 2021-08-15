import React,{useState,useEffect} from 'react';
import { Text,StyleSheet,SafeAreaView,FlatList} from 'react-native';
import FavoriteCard from '../components/FavoriteCard';
import useFetch from '../Hooks/useFetch';
import {API_JOBS_URL} from "@env";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Favorites(props) {
    const list=useSelector(s => s.favList).slice().reverse();
                const dispatch = useDispatch();

                useEffect(() => {
                    getFavoritesFromUserDevice()
                   },[]);
                 
                  useEffect(() => {
                   saveFavoritesUserDevice(list)
                  },[list]);
          
              
                  const getFavoritesFromUserDevice = async () =>{
        
                    try {
                        const favorites= await AsyncStorage.getItem('favorites');
                        if(favorites != null){
                            dispatch({type:'UPDATE_FAVORITE',payload:{allItems:JSON.parse(favorites)}})  
                        }
                      } catch (error) {
                        console.log(error)
                      }       
                  
                  }; const saveFavoritesUserDevice = async (list) =>{
                    try {
                        const stringifyFavorites = JSON.stringify(list)
                        await AsyncStorage.setItem("favorites", stringifyFavorites)
                      } catch (e) {
                        console.log("hata save kısmında")
              
                        console.log(e)
                      }
              
                  
                  };
      const removeItem = (item) =>{
        
        dispatch({type:'REMOVE_FAVORITE',payload:{item:item}})  
      
      };
    function renderItem({item}){
        return <FavoriteCard item = {item} removeItem={() =>removeItem(item)}/>
    }
    
    return(

        <SafeAreaView style={styles.Container}>
                <Text style = {styles.Header}>Favorites Jobs</Text>

        <FlatList 
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
        />
        </SafeAreaView>
    )
}
   const styles =StyleSheet.create({
       Container:{
            marginBottom: 40,
       },
    Header:{
        fontSize:20,
        alignSelf: 'center',
        color: '#EF5350',
        marginTop:10,
        alignSelf:'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        
        },
   })

export default Favorites;