const initialState = {

   value1 : '',
   value2 : '',
   value3 : '',
   value4 : '',
}

// action types

const UPDATE_VALUE1 ='UPDATE_VALUE1'
const UPDATE_VALUE2 ='UPDATE_VALUE2'
const UPDATE_VALUE3 ='UPDATE_VALUE3'
const UPDATE_VALUE4 ='UPDATE_VALUE4'
const UPDATE_ALL_VALUES ='UPDATE_ALL_VALUE5'


// action creators   -> the purpose is to instruct our reducer how to alter state

export function updateValue1(newValue){   
   return{
      type: UPDATE_VALUE1,
      payload: newValue
   }
}


export function updateValue2(newValue){   
   return{
      type: UPDATE_VALUE2,
      payload: newValue
   }
}


export function updateValue3(newValue){   
   return{
      type: UPDATE_VALUE3,
      payload: newValue
   }
}
export function updateValue4(newValue){   
   return{
      type: UPDATE_VALUE4,
      payload: newValue
   }
}
export function updateALLValues(values){   
   return{
      type: UPDATE_ALL_VALUES,
      payload: values
   }
}

// reducer

export default function(state = initialState, action){
   switch(action.type){

      case  UPDATE_VALUE1:
         return {...state, value1: action.payload}

      case  UPDATE_VALUE2:
         return {...state, value2: action.payload}

      case  UPDATE_VALUE3:
         return {...state, value3: action.payload}
         
      case  UPDATE_VALUE4:
         return {...state, value4: action.payload}

      case  UPDATE_ALL_VALUES:
         return {...state, ...action.payload}

      default:
         return state
      
   }
}