import React from 'react';

const Product = (props)=>{
    return (
        <span style={{display:"inline-block"}}>
            <span>
                <img src={props.imageURL}></img>
            </span>
            <span>
                <h1>{props.name}</h1>
                <button type="button" onClick={()=>props.productAction(props)}>{`${props.currency}${props.price}`}</button>
            </span>
        </span>
    )
}
export default Product;