import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Product from './product'
import ProductAction from "../actions/productAction"

const BasketList = ({basketProducts,ProductAction})=>{

    const RemoveFromBucket= (RemovedProduct)=>{
        ProductAction(RemovedProduct, "REMOVE")
    }
    const products =basketProducts.map((product)=>{
        return <Product key={product.id} {...product} productAction={RemoveFromBucket} />
    }) 
    return (
        <div>
            <h1>BUCKET LIST</h1>
            {products}
        </div>
    )
}
const mapStateToProps= (state)=> {
    return {basketProducts :state.basketListReducer}
}
const mapDispatchToProps= (dispatch)=> {
    return bindActionCreators({ ProductAction }, dispatch)
} 
export default connect( mapStateToProps, mapDispatchToProps)(BasketList);