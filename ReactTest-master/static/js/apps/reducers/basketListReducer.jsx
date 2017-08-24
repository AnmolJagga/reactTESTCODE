const basketListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,action.payload
      ]
    case 'REMOVE_PRODUCT':      
      return state.filter(element => element.id !== action.payload.id);
      
    default:
      return state
  }
}

export default basketListReducer