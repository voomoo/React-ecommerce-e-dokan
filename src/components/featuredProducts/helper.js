import axios from "axios";

export const getProducts = async(setter, loader) => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products/");
        setter(res?.data);
        loader(false)
    } catch (error) {
        setter([]);
        console.log("Error", error?.message)
        loader(false)
    }
}