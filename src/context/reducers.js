export default function(state,action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            if(state.favList.some(item => action.payload.job.id === item.id))
        {
            
            return state;
        }else{
            const newList = [...state.favList, action.payload.job]
            return {...state, favList: newList};
        }
           
        case 'REMOVE_FAVORITE':
            const newList2= state.favList.filter(item =>{  return item.id !== action.payload.item.id});
           
            return ({favList: newList2});

     case 'UPDATE_FAVORITE':
         console.log( action.payload.allItems)
            return ({favList: action.payload.allItems});

        default:
            return state;
         
    }


}