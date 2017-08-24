import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Product from './product'
import ProductAction from "../actions/productAction"

const ProductList= ({products,ProductAction})=>{
    const AddToBucket= (AddedProduct)=>{
        ProductAction(AddedProduct, "ADD")
    }
    const Products =products.map((product)=>{
        return <Product key={product.id} {...product} productAction={AddToBucket}/>
    }) 
    return (
        <div>
            <h1>PRODUCT LIST</h1>
            {Products}
        </div>
    )
}
const mapStateToProps= (state)=> {
    return {products :state.productListReducer}
}
const mapDispatchToProps= (dispatch)=> {
    return bindActionCreators({ ProductAction }, dispatch)
} 
export default connect( mapStateToProps, mapDispatchToProps)(ProductList);