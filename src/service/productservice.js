import axios from "axios";
const API_URL="http://localhost:8080";

class ProductService{

    addProduct(product){
        return axios.post(API_URL+"/addproduct",product);
    }

    getAllProduct()
    {
        return axios.get(API_URL+"/getAllProduct");
    }

    getProductById(id){
        return axios.get(API_URL+"/getProductById/"+id)
    }

    deleteProductById(id) {
        return axios.delete(API_URL + "/deleteProduct/" + id);
    }
    
    updateProduct(product)
    {
        return axios.put(API_URL+"/updateProduct",product);
    }
}
export default new ProductService;