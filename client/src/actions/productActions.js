import { FETCH_PRODUCTS, NEW_PRODUCTS } from "./types";
import axios from "axios";

export function fetchProducts() {
    return async function (dispatch) {
        const response = await axios.get("/products");
        dispatch({
            type: FETCH_PRODUCTS,
            payload: response.data,
        });
    };
}
