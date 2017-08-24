import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BasketList from "./components/basketList";
import ProductList from "./components/productList";
import ApiCallAction from "./actions/apiCallAction"


const App = ({ message, ApiCallAction,cartValue}) =>{
    // Below Function is called fo the APi Call to Mock JSON
    ApiCallAction();
    //
    return (<div>
        <div>Cart Value- {cartValue}</div>
        <BasketList />
        <ProductList />
    </div>)
};
const mapStateToProps= (state)=> {
    return {cartValue :state.basketListReducer[0]}
}
const mapDispatchToProps= (dispatch)=> {
    return bindActionCreators({ ApiCallAction }, dispatch)
}  
export default connect(mapStateToProps,mapDispatchToProps)(App);