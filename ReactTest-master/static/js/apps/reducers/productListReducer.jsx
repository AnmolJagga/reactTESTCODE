const productListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SUCCESSFUL_API_RESPONSE':
      return [...state, ...action.products]
    
    default:
      return state
  }
}

export default productListReducer