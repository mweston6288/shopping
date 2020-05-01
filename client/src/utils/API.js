import axios from "axios";

export default{
    getTop: function(id){
        return axios.get("/api/products")
    }
}