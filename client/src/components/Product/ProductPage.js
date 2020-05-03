import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "../SearchBar/SearchBar";

export const ProductPage = ({ match }) => {
    const [product, setProduct] = useState({});
    const [loggedIn, setLoggedIn] = useState(sessionStorage.username);

    useEffect(() => {
        getProduct(match.params.id);
        setLoggedIn(sessionStorage.username);
    }, []);

    const getProduct = async (id) => {
        const response = await axios.get(`/products/p=${id}`);
        setProduct(response.data);
        console.log(response.data);
    };

    console.log(product.shipping);

    return (
        <>
            <SearchBar filter={false} />
            <div className="container h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="my-5">
                        <div className="row d-flex align-items-start">
                            <div className="col-11 col-md-8 order-2 order-md-1 px-3 mx-auto">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={product.image}
                                        className="img-fluid"
                                        alt={product.title}
                                    />
                                </div>
                                <div className="product-description my-5">
                                    {product.description}
                                </div>
                                <div className="col-12" id="questionForm"></div>
                                <div className="question-previous-questions col-12 mt-5">
                                    <h3 className="bg-light p-3">
                                        Questions and Answers
                                    </h3>
                                    <div
                                        className="col-12"
                                        id="qAndAPrintOut"
                                    ></div>
                                </div>
                            </div>
                            <div
                                id="productButtonContainer"
                                className="col-11 col-md-4 py-2 product-btn-container order-1 order-md-2 mx-auto mb-3"
                            >
                                <h3>{product.title}</h3>
                                <h4 className="small">
                                    Listing #: {product._id}
                                </h4>
                                <h4 className="text-success font-weight-bold my-4">
                                    ${product.price}
                                </h4>
                                <div
                                    id="dynamicBtnContainer"
                                    className="row"
                                ></div>
                                <div className="mt-3">
                                    <h5 className="mb-0">Seller:</h5>
                                    <h4 className="mb-0">
                                        {/* {sellerData.username} */}
                                    </h4>
                                    <h6 className="mb-2">
                                        {/* {sellerData.location} */}
                                    </h6>

                                    {/* {product.shipping.pickup &&
                                    product.shipping.deliver ? (
                                        <p class="mb-0">
                                            Shipping: Pick up and delivery
                                            available
                                        </p>
                                    ) : product.shipping.pickup ? (
                                        <p class="mb-0">
                                            Shipping: Pick up only
                                        </p>
                                    ) : (
                                        <p class="mb-0">
                                            Shipping: Delivery only
                                        </p>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
