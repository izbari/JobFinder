import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
    cardBody:{
        backgroundColor:'white',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#BDBDBD',
        padding:10,
        margin:10,
        

    },
    cardTitle:{
        fontSize:20,
        fontWeight : 'bold',

    
    },cardCategory:{
        fontWeight : 'bold',
        fontSize:17,

    },cardLocView:{

        backgroundColor:'#EF5350',
        paddingLeft:5,
        paddingRight:5,
        alignSelf: 'flex-start',
        borderRadius:20,
        marginTop:5,
    
    },cardLocText:{
        fontSize:16,
        fontWeight: 'bold',
        padding:1,
        color:'white',

    
    },
    cardJobLv:{
        alignSelf:'flex-end',
        fontWeight: 'bold',
        color:'#EF5350',
        marginBottom:10

    },
    buttonRemove:{
    padding:8,
alignSelf:'stretch',
backgroundColor:'#EF5350',
       
        borderRadius : 7,
        marginTop:0,
    },
    buttonRemoveText:{
        fontWeight:'bold',
        fontSize:17,
        color:'white',
        alignSelf:'center',

    }


    })
    export default style;