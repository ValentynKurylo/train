const initialState = {
    trains: [],
}

export const TrainReducer = (state = initialState, action) => {
   switch (action){
       case 'SET_TRAINS':
           console.log('ttttttttttttttttttttttt', action.payload)
           return {
               ...state,
               trains: action.payload
           }
       default:
           return state
   }
}