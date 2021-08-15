import React from 'react'
import { 
    TouchableOpacity ,View,Text } from 'react-native';
import styles from './job.style';

const JobCard= (props) => {

  return( 
     
      <TouchableOpacity onPress={props.toDetails}>


<View style={styles.cardBody}>
    
    <Text style={styles.cardTitle}>{props.item.name}</Text>
    <Text style={styles.cardCategory}>{props.item.company.name}</Text>
  
    <View style={styles.cardLocView}>
   <Text style={styles.cardLocText}>{props.item.locations['0'].name}</Text>
   </View>


   <Text style={styles.cardJobLv}>{props.item.levels['0'].name}</Text>

    </View>



      </TouchableOpacity>
   
       )
    
}
 
       export default JobCard;