import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
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
                    <h4 className="card-text">${product.price}</h4>
                </div>
            </div>
        </Link>
    );
};
