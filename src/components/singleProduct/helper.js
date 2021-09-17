import axios from "axios";

export const getSingleProduct = async(setter, loader, id) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setter(res?.data);
        loader(false)
    } catch (error) {
        setter([]);
        console.log("Error", error?.message)
        loader(false)
    }
}