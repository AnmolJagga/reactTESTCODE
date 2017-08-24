import axios from "axios";

const ProductAction = (Product, Product_Action) => {
    const productActionType = (Product_Action == "ADD") ? "ADD_PRODUCT" : "REMOVE_PRODUCT"
    return {
        payload: Product,
        type: productActionType
    }
    
}

export default ProductAction