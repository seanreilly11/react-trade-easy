import React from "react";
import { Link } from "react-router-dom";

export const AccountProducts = ({ product, group }) => {
    return (
        <Link
            className="col-lg-3 col-sm-12 col-md-6"
            to={`/product/${product._id}`}
        >
            <div className="product-link position-relative card p-0 col">
                <img
                    className="card-img-top p-4 bg-light"
                    src={product.image}
                    alt={product.title}
                />
                <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    {group === "selling" || group === "watchlist" ? (
                        <h4 className="card-text">${product.price}</h4>
                    ) : group === "bought" ? (
                        <div
                            class="alert alert-success col-12 text-center"
                            role="alert"
                        >
                            Bought
                        </div>
                    ) : group === "sold" ? (
                        <div
                            class="alert alert-danger col-12 text-center"
                            role="alert"
                        >
                            Sold
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </Link>
    );
};
