import React, { useEffect, useState } from "react";
import { AccountProducts } from "./AccountProducts";
import axios from "axios";

export const AccountProductsList = ({ cardGroup }) => {
    const [products, setProducts] = useState([]);
    const [toPrint, setToPrint] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get("/products");
            setProducts(response.data);
        };
        getProducts();
    }, []);

    useEffect(() => {
        getCardsToPrint();
    }, [cardGroup]);

    const getCardsToPrint = () => {
        switch (cardGroup) {
            case "selling":
                setToPrint(
                    products.filter((product) => {
                        return (
                            product.sellerId ===
                                sessionStorage.getItem("userID") &&
                            product.status === "listed"
                        );
                    })
                );
                break;
            case "sold":
                setToPrint(
                    products.filter((product) => {
                        return (
                            product.sellerId ===
                                sessionStorage.getItem("userID") &&
                            product.status === "sold"
                        );
                    })
                );
                break;
            case "bought":
                setToPrint(
                    products.filter((product) => {
                        return (
                            product.buyerId ===
                                sessionStorage.getItem("userID") &&
                            product.status === "sold"
                        );
                    })
                );
                break;
            case "watchlist":
                const getUser = async () => {
                    const response = await axios.get(
                        `/users/u=${sessionStorage.getItem("userID")}`
                    );
                    setToPrint(response.data.watchlist);
                };
                getUser();
                break;
            default:
                return;
        }
    };

    console.log(toPrint);
    return (
        <div className="row col-12 my-5 mx-auto">
            {toPrint.map((product, i) => (
                <AccountProducts key={i} product={product} group={cardGroup} />
            ))}
        </div>
    );
};
