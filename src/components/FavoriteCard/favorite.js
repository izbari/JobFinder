import React from 'react'
import { 
    TouchableOpacity ,View,Text } from 'react-native';
import styles from './favorite.style';

const FavoriteCard= (props) => {

  return( 
     


<View style={styles.cardBody}>
    
    <Text style={styles.cardTitle}>{props.item.name}</Text>
    <Text style={styles.cardCategory}>{props.item.company.name}</Text>
  
    <View style={styles.cardLocView}>
   <Text style={styles.cardLocText}>{props.item.locations['0'].name}</Text>
   </View>


   <Text style={styles.cardJobLv}>{props.item.levels['0'].name}</Text>
      <TouchableOpacity style={styles.buttonRemove} onPress={props.removeItem}>
        <Text style={styles.buttonRemoveText}>Remove</Text>
      </TouchableOpacity>
    </View>



     
   
       )
    
}
 
       export default FavoriteCard;