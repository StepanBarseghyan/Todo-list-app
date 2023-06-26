export default function reducer(state,action){
    switch(action.type){
      case 'Add':
        return [
          ...state,
          {
            id:new Date().getTime().toString(),
            text: action.payload,
            checked:false
          }
        ]
        case 'Delete':
          return [ ...state.filter(e=> e.id !== action.payload)]
        case 'Change':
          return [...state.map(e=> e.id === action.payload ? {...e,checked:!e.checked} : e)]
        case 'DeleteAll':
          return [ ...state.filter(e=> !e.checked)]
        case 'Edit':
          return [...state.map(e=> e.id === action.payload.id ? {...e,text:action.payload.text} : e)]
            
        default:
          return [...state]
    }
  }