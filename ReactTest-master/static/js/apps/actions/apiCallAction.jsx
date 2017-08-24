import axios from "axios";

const ApiCallAction = () => {
    return (dispatch)=>{
        axios.get("http://localhost:1337/items")
        .then(resp=>{
            dispatch({
                type:"SUCCESSFUL_API_RESPONSE" ,
                products: resp.data.catalog
            })
        })
    }
    
}

export default ApiCallAction